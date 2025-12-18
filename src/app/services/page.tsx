import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import Services from "@/app/sections/services/Services";

export const metadata: Metadata = createMetadata({
  title: "Services – Caricatures From Photos, Live Events, Wedding eCards",
  description:
    "Order custom caricatures from photos, hire a live caricature artist for events, or get wedding eCard caricatures. Nairobi, Kenya.",
  path: "/services",
});

export default function ServicesPage() {
  return <Services />;
}
