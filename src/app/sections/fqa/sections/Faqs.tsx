"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const Faqs = () => {
  const alosaFaqs = [
    {
      id: 1,
      faqTitle: "What is your turn around time after I order?",
      faqBody:
        "It takes around 2–3 days, when I have a lot of orders it can even take 5 days.",
    },
    {
      id: 2,
      faqTitle: "How far in advance should I book you for an event?",
      faqBody:
        "At least 2 days before the event, but I recommend at least a week to be on the safe side.",
    },
    {
      id: 3,
      faqTitle: "Do you have a studio?",
      faqBody:
        "I do not have a studio, I work from home.",
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id))
  }

  return (
    <section className="w-full bg-pure-white py-12 lg:px-[7%]">
      <div className="flex flex-col gap-4 w-full mx-auto">
        {alosaFaqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-off-white rounded-xl shadow-sm border border-gray-100 p-5 my-2 transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="font-fredoka font-[400] text-[22px] md:text-[24px] mb-3">
                {faq.faqTitle}
              </h3>
              {openFaq === faq.id ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {openFaq === faq.id && (
              <p className="text-[16px] font-inter md:text-[17px] lg:text-[18px] font-[400]">
                {faq.faqBody}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faqs
