"use client"

import { useState, useEffect } from "react"

interface ContactMeRightProps {
  preselectedOption?: string
}

const ContactMeRight = ({ preselectedOption = "" }: ContactMeRightProps) => {
  const [selectedOption, setSelectedOption] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

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

  const placeholderMap: Record<string, string> = {
    "Order a caricature from photos":
      "Tell me about the caricature you'd like (number of people, theme, background...)",
    "Book live event caricatures":
      "Share your event details (date, venue, expected guests, hours needed...)",
    "Order wedding/ dowry ecards":
      "Describe your eCard idea, (couple details, background, text...)",
    "Leave a testimonial":
      "Share your experience with Alosa Arts",
  }

  const dynamicPlaceholder = selectedOption
    ? placeholderMap[selectedOption]
    : "Tell me about your caricature idea or event details..."

  useEffect(() => {
    if (preselectedOption) {
      setSelectedOption(preselectedOption)
    }
  }, [preselectedOption])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectOption = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedOption) {
      alert("Please select an option from the dropdown")
      return
    }

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields")
      return
    }

    console.log("Form submitted:", {
      service: selectedOption,
      ...formData
    })

    alert(
      `Thank you for your ${selectedOption.toLowerCase()}! We'll get back to you within 24 hours.`
    )

    setSelectedOption("")
    setFormData({ name: "", email: "", message: "" })
  }

  const buttonLabel = selectedOption
    ? buttonTextMap[selectedOption]
    : "Order a caricature"

  return (
    <section id="contact-form" className="bg-soft-gray px-5 py-8 rounded-2xl h-full">
      <form onSubmit={handleSubmit} className="bg-neutral-gray flex flex-col gap-5 p-6 rounded-[8px]">

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
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all"
            required
          />
        </div>

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
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="relative">
          <label className="block font-fredoka font-[400] text-dark-charcoal mb-2 text-[16px]">
            Select an option
          </label>

          <button
            type="button"
            onClick={toggleDropdown}
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all"
          >
            <span className={selectedOption ? "text-dark-charcoal" : "text-gray-400"}>
              {selectedOption || "I would like to..."}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
              {options.map((option, idx) => (
                <li
                  key={idx}
                  onClick={() => selectOption(option)}
                  className={`px-4 py-3 hover:bg-[#FFF4EC] cursor-pointer font-inter transition-colors border-b border-gray-100 last:border-b-0 ${
                    selectedOption === option
                      ? "bg-[#FFF4EC] text-carrot-orange font-medium"
                      : "text-medium-gray"
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-fredoka font-[400] text-dark-charcoal mb-2 text-[16px]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={dynamicPlaceholder}
            className="bg-pure-white w-full border border-gray-200 rounded-xl py-3 px-4 text-dark-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-carrot-orange focus:border-transparent transition-all min-h-[120px] resize-vertical"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-carrot-orange hover:bg-sunset-orange transition-colors duration-200 font-inter font-normal text-[14px] md:text-[16px] leading-[24px] tracking-[0%] text-pure-white rounded-lg shadow-md w-full px-4 py-3"
        >
          {buttonLabel}
        </button>
      </form>
    </section>
  )
}

export default ContactMeRight;