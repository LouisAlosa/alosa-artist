import type { Metadata } from "next";

export const SITE_NAME = "Alosa Arts";
export const SITE_DESCRIPTION =
  "Custom caricatures from photos and live event caricatures in Nairobi, Kenya by Louis Alosa.";

export const DEFAULT_KEYWORDS = [
  "Alosa Arts",
  "Louis Alosa",
  "caricature artist",
  "caricatures Nairobi",
  "live caricature",
  "custom caricature",
  "cartoon portrait",
  "illustration",
  "Kenya artist",
];

export const SOCIAL = {
  instagram: "https://www.instagram.com/mrlouisalosa",
  x: "https://x.com/mrlouisalosa",
  tiktok: "https://www.tiktok.com/@mrlouisalosa",
  youtube: "https://www.youtube.com/louisalosa",
  facebook: "https://www.facebook.com/alosaarts",
  email: "mailto:alosa.louis@gmail.com",
  phone: "+254721787390",
  location: "Nairobi, Kenya",
};

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  try {
    return new URL(fromEnv || "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  return new URL(path, base).toString();
}

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  images,
}: {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
} = {}): Metadata {
  const base = getSiteUrl();
  const ogImages = (images && images.length > 0 ? images : ["/assets/alosa-arts-caricature-alosa-logo-nairobi-kenya.png"]).map(
    (src) => absoluteUrl(src)
  );

  return {
    metadataBase: base,
    title: title ? {
      default: SITE_NAME,
      template: "%s | Alosa Arts",
    } : SITE_NAME,
    description,
    keywords: DEFAULT_KEYWORDS,
    applicationName: SITE_NAME,
    creator: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title: title || SITE_NAME,
      description,
      images: ogImages,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title || SITE_NAME,
      description,
      images: ogImages,
      creator: "@mrlouisalosa",
    },
    icons: {
      icon: "/assets/alosa-arts-caricature-alosa-logo-nairobi-kenya.png",
      apple: "/assets/alosa-arts-caricature-alosa-logo-nairobi-kenya.png",
    },
  };
}
