import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import Testimonials from "@/app/sections/testimonials/Testimonials";

export const metadata: Metadata = createMetadata({
  title: "Testimonials – What Clients Say",
  description:
    "Read real client feedback on custom caricatures and live caricature events by Alosa Arts in Nairobi, Kenya.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return <Testimonials />;
}
