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

  const toggleDropdown = () => setIsOpen(!isOpen)
  const selectOption = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <section className="bg-off-white px-5 py-8 rounded-2xl shadow-sm">
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
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA893A]"
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
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA893A]"
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
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-medium-gray text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#FA893A]"
          >
            <span>{selectedOption || "I would like to..."}</span>

            {/* Caret Icon (SVG, rotates when open) */}
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
            <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10">
              {options.map((option, idx) => (
                <li
                  key={idx}
                  onClick={() => selectOption(option)}
                  className="px-4 py-3 hover:bg-[#FFF4EC] cursor-pointer text-medium-gray font-inter"
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
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA893A] min-h-[120px]"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-[#FA893A] text-white font-fredoka font-[400] text-[17px] py-3 rounded-xl hover:bg-[#f77d24] transition-all"
        >
          Order a caricature
        </button>
      </form>
    </section>
  )
}

export default ContactMeRight;