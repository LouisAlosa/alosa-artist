#!/usr/bin/env node
import { readdir, readFile, rename, stat, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const IMAGE_DIRS = [
  path.join(repoRoot, "public", "assets"),
  path.join(repoRoot, "src", "app", "assets"),
];
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);
const TEXT_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".mdx", ".css", ".mjs", ".cjs", ".json"]);

const WRITE = process.argv.includes("--write");

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getCategoryKeywords(filePath) {
  const p = filePath.toLowerCase();
  if (p.includes("digitalcaricatures") || p.includes("digitalcaricature")) return "digital-caricature";
  if (p.includes("livecaricatures") || p.includes("livecaricature")) return "live-caricature";
  if (p.includes("illustrations") || p.includes("illustration")) return "illustration";
  if (p.includes("wedding") || p.includes("cards")) return "wedding-caricature";
  if (p.includes("hero")) return "caricature";
  return "caricature";
}

function isOptimized(baseSlug, cat) {
  return baseSlug.startsWith("alosa-arts-") && baseSlug.includes(cat);
}

function proposeName(absFilePath) {
  const dir = path.dirname(absFilePath);
  const ext = path.extname(absFilePath);
  const base = path.basename(absFilePath, ext);
  const cat = getCategoryKeywords(absFilePath);
  const baseSlug = slugify(base);
  const brand = "alosa-arts";
  const loc = "nairobi-kenya";
  // If already optimized, keep as-is
  if (isOptimized(baseSlug, cat)) {
    return { dir, ext, base, proposed: `${base}${ext}` };
  }
  // Compose and trim to reasonable length
  let name = [brand, cat]
    .concat(baseSlug && baseSlug !== cat ? [baseSlug] : [])
    .concat([loc])
    .join("-");
  if (name.length > 60) name = name.slice(0, 60).replace(/-+$/g, "");
  return { dir, ext, base, proposed: `${name}${ext}` };
}

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...(await walk(p)));
    } else {
      out.push(p);
    }
  }
  return out;
}

async function listImages() {
  const all = [];
  for (const d of IMAGE_DIRS) {
    all.push(...(await walk(d)));
  }
  return all.filter((p) => IMAGE_EXTS.has(path.extname(p).toLowerCase()));
}

async function listTextFiles() {
  const src = await walk(path.join(repoRoot, "src"));
  const pub = await walk(path.join(repoRoot, "public"));
  return [...src, ...pub].filter((p) => TEXT_EXTS.has(path.extname(p).toLowerCase()));
}

async function main() {
  const images = await listImages();
  const mapping = [];
  const collisionCheck = new Map();

  for (const img of images) {
    const { dir, ext, base, proposed } = proposeName(img);
    const current = path.basename(img);
    if (current === proposed) continue;

    // ensure uniqueness within the directory
    let finalName = proposed;
    let i = 2;
    while (collisionCheck.get(dir + "/" + finalName) || (await exists(path.join(dir, finalName)))) {
      const core = path.basename(proposed, ext);
      finalName = `${core}-${i}${ext}`;
      i += 1;
    }
    collisionCheck.set(dir + "/" + finalName, true);
    mapping.push({
      fromAbs: img,
      toAbs: path.join(dir, finalName),
      fromName: current,
      toName: finalName,
      relFrom: path.relative(repoRoot, img),
      relTo: path.relative(repoRoot, path.join(dir, finalName)),
    });
  }

  if (mapping.length === 0) {
    console.log("No images need renaming. Filenames already look SEO-friendly.");
    return;
  }

  // Write report
  const reportPath = path.join(__dirname, "seo-rename-report.json");
  await writeFile(reportPath, JSON.stringify(mapping, null, 2));
  console.log(`Proposed renames: ${mapping.length}`);
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`);

  if (!WRITE) {
    console.log("Dry-run mode. To apply changes, run: pnpm seo:images:write");
    return;
  }

  // Perform renames
  for (const m of mapping) {
    await rename(m.fromAbs, m.toAbs);
    console.log(`Renamed: ${m.relFrom} -> ${m.relTo}`);
  }

  // Update references in text files by replacing '/oldName' with '/newName'
  const files = await listTextFiles();
  let totalRepl = 0;
  for (const file of files) {
    let content;
    try {
      content = await readFile(file, "utf8");
    } catch {
      continue;
    }
    let updated = content;
    for (const m of mapping) {
      // Replace occurrences of '/oldName' while preserving directories
      const re = new RegExp(`/${escapeRegex(m.fromName)}(?=["'\)\?]|$)`, "g");
      updated = updated.replace(re, `/${m.toName}`);
    }
    if (updated !== content) {
      await writeFile(file, updated);
      totalRepl++;
    }
  }
  console.log(`Updated references in ${totalRepl} files.`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
