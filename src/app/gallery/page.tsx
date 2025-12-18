import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import FullGalleryDigitalCaricatures from "@/app/sections/fullgallery/sections/FullGalleryDigitalCaricatures";
import FullGalleryIllustrations from "@/app/sections/fullgallery/sections/FullGalleryIllustrations";
import FullGalleryLiveCaricatures from "@/app/sections/fullgallery/sections/FullGalleryLiveCaricatures";

export const metadata: Metadata = createMetadata({
  title: "Gallery – Digital & Live Caricatures, Illustrations",
  description:
    "Browse Alosa Arts gallery: digital caricatures, live event caricatures, and illustrations created in Nairobi, Kenya.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="px-[5%] pt-10 pb-20">
      <FullGalleryDigitalCaricatures />
      <FullGalleryIllustrations />
      <FullGalleryLiveCaricatures />
    </div>
  );
}
