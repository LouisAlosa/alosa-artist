"use client"

interface TestimonialsButtonProps {
  onServiceOrder?: (serviceType: string) => void
}

const TestimonialsButton = ({ onServiceOrder }: TestimonialsButtonProps) => {
  
  const handleLeaveTestimonial = () => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }

    // Call the parent handler to set the preselected option
    if (onServiceOrder) {
      onServiceOrder("Leave a testimonial")
    }
  }

  return (
    <section className="w-full flex justify-center py-4 md:py-8">
      <button
        onClick={handleLeaveTestimonial}
        className="bg-carrot-orange hover:bg-sunset-orange transition-colors duration-200 font-inter font-normal text-[14px] md:text-[16px] leading-[24px] tracking-[0%] text-pure-white rounded-lg shadow-md w-full max-w-[213px] px-4 py-3"
      >
        Leave a Testimonial
      </button>
    </section>
  )
}

export default TestimonialsButton;