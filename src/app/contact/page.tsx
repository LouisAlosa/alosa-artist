import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import Contact from "@/app/sections/contact/Contact";

export const metadata: Metadata = createMetadata({
  title: "Contact – Book a Caricature Artist in Nairobi",
  description:
    "Contact Alosa Arts for custom caricatures, live event caricatures, or wedding eCard caricatures. Nairobi, Kenya.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
