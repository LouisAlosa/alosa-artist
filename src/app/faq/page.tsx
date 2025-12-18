import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import Faq from "@/app/sections/fqa/Faq";
import FaqJsonLd from "@/app/components/seo/FaqJsonLd";

export const metadata: Metadata = createMetadata({
  title: "FAQ – Common Questions Answered",
  description:
    "Find answers about turnaround time, booking live caricature events, and how Alosa Arts works in Nairobi, Kenya.",
  path: "/faq",
});

export default function FaqPage() {
  const faqs = [
    {
      question: "What is your turnaround time after I order?",
      answer:
        "Typically 2–3 days; up to 5 days during busy periods.",
    },
    {
      question: "How far in advance should I book you for an event?",
      answer: "At least 2 days ahead; 1 week recommended to be safe.",
    },
    {
      question: "Do you have a studio?",
      answer: "I work from home in Nairobi and travel to events.",
    },
  ];
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <Faq />
    </>
  );
}
