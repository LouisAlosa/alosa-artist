"use client"

import { useState } from "react"

const ContactMeRight = () => {
  const [selectedOption, setSelectedOption] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    "Order a caricature from photos",
    "Book live event caricatures",
    "Order wedding/ dowry ecards",
    "Leave a testimonial",
  ]

  const buttonTextMap: Record<string, string> = {
    "Order a caricature from photos": "Order a caricature",
    "Book live event caricatures": "Book a live caricature event",
    "Order wedding/ dowry ecards": "Order a wedding or dowry ecard",
    "Leave a testimonial": "Submit testimonial",
  }

  const toggleDropdown = () => setIsOpen(!isOpen)
  const selectOption = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  // Determine the button label dynamically
  const buttonLabel = selectedOption
    ? buttonTextMap[selectedOption]
    : "Order a caricature"

  return (
    <section className="bg-off-white px-5 py-8 rounded-2xl shadow-sm h-full">
      <form className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block font-fredoka font-[400] text-dark-charcoal mb-2 text-[16px]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-fredoka font-[400] text-dark-charcoal mb-2 text-[16px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all"
          />
        </div>

        {/* Dropdown */}
        <div className="relative">
          <label className="block font-fredoka font-[400] text-dark-charcoal mb-2 text-[16px]">
            Select an option
          </label>

          <button
            type="button"
            onClick={toggleDropdown}
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-medium-gray text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all"
          >
            <span>{selectedOption || "I would like to..."}</span>

            {/* Caret Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
              {options.map((option, idx) => (
                <li
                  key={idx}
                  onClick={() => selectOption(option)}
                  className="px-4 py-3 hover:bg-[#FFF4EC] cursor-pointer text-medium-gray font-inter transition-colors border-b border-gray-100 last:border-b-0"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-fredoka font-[400] text-dark-charcoal mb-2 text-[16px]"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell me about your caricature idea or event details..."
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all min-h-[120px] resize-vertical"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-carrot-orange text-white font-fredoka font-[400] text-[17px] py-3 rounded-xl hover:bg-orange-600 transition-all shadow-md"
        >
          {buttonLabel}
        </button>
      </form>
    </section>
  )
}

export default ContactMeRight;