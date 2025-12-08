"use client"

import { useState, useEffect } from "react"

interface ContactMeRightProps {
  preselectedOption?: string
}

const ContactMeRight = ({ preselectedOption = "" }: ContactMeRightProps) => {
  const [selectedOption, setSelectedOption] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
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

  // Dynamic success messages based on selected option
  const successMessageMap: Record<string, { title: string; description: string }> = {
    "Order a caricature from photos": {
      title: "Caricature Order Received! 🎨",
      description: "Thanks for your caricature order! I'll review your details and get back to you within 24 hours with pricing and next steps."
    },
    "Book live event caricatures": {
      title: "Live Event Booking Confirmed! 🎉",
      description: "Your live event booking request has been received! I'll check my availability and contact you soon to discuss details."
    },
    "Order wedding/ dowry ecards": {
      title: "E-Card Order Submitted! 💌",
      description: "Your wedding/dowry e-card order is in! I'll review your ideas and get back to you within 24 hours with design concepts."
    },
    "Leave a testimonial": {
      title: "Testimonial Sent Successfully! ⭐",
      description: "Thank you for sharing your experience! Your testimonial means a lot and helps others discover Alosa Arts."
    }
  }

  // Dynamic error titles based on type
  const errorTitleMap: Record<string, string> = {
    "no_option": "Please Select an Option",
    "missing_fields": "Missing Information",
    "submission_error": "Submission Failed"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedOption) {
      setErrorMessage("Please select what you'd like to do from the dropdown menu.")
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
      return
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all the required fields (Name, Email, and Message) to continue.")
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
      return
    }

    setIsSubmitting(true)

    try {
      // Create the full message with the selected option
      const fullMessage = `Service: ${selectedOption}\n\nMessage:\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("telephone", "")
      formDataToSend.append("message", fullMessage)
      formDataToSend.append("subject", selectedOption)
      formDataToSend.append("_replyto", formData.email)
      formDataToSend.append("service", selectedOption)

      const response = await fetch("https://formspree.io/f/mgedowaj", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json"
        }
      })

      if (response.ok) {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 5000)
        
        // Reset form
        setSelectedOption("")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("Something went wrong while sending your message. Please try again or contact us directly at alosa.louis@gmail.com")
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const buttonLabel = selectedOption
    ? buttonTextMap[selectedOption]
    : "Order a caricature"

  const successMessage = selectedOption && successMessageMap[selectedOption]
    ? successMessageMap[selectedOption]
    : { title: "Message Sent Successfully!", description: "Thank you for contacting Alosa Arts! We'll get back to you within 24 hours." }

  return (
    <>
      {/* Success Toast Notification - Using brand colors */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <div className="bg-carrot-orange text-pure-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md border-l-4 border-sunset-orange">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-fredoka font-medium text-lg">{successMessage.title}</p>
              <p className="text-sm opacity-95 mt-1 font-inter">
                {successMessage.description}
              </p>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="ml-2 text-pure-white hover:text-gray-200 transition-colors flex-shrink-0"
              aria-label="Close notification"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Error Toast Notification - Using complementary colors */}
      {showError && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <div className="bg-dark-charcoal text-pure-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md border-l-4 border-carrot-orange">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-fredoka font-medium text-lg">Oops! Action Required</p>
              <p className="text-sm opacity-95 mt-1 font-inter">
                {errorMessage}
              </p>
            </div>
            <button 
              onClick={() => setShowError(false)}
              className="ml-2 text-pure-white hover:text-gray-200 transition-colors flex-shrink-0"
              aria-label="Close notification"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <section id="contact-form" className="bg-soft-gray px-5 py-8 rounded-2xl h-full">
        <form 
          onSubmit={handleSubmit} 
          className="bg-neutral-gray flex flex-col gap-5 p-6 rounded-[8px]"
        >

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
              maxLength={70}
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

          {/* Hidden phone field for Formspree compatibility */}
          <input type="hidden" name="telephone" value="" />

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
              minLength={1}
              maxLength={1500}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-carrot-orange hover:bg-sunset-orange transition-colors duration-200 font-inter font-normal text-[14px] md:text-[16px] leading-[24px] tracking-[0%] text-pure-white rounded-lg shadow-md w-full px-4 py-3 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : buttonLabel}
          </button>
        </form>
      </section>

      {/* Add this to your global CSS or Tailwind config for the animation */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default ContactMeRight;