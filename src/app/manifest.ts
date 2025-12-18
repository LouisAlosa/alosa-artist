import type { MetadataRoute } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Alosa Arts",
    description:
      "Custom caricatures from photos and live event caricatures in Nairobi, Kenya by Louis Alosa.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    icons: [
      {
        src: absoluteUrl("/assets/alosa-logo.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
