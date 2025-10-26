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
        className="bg-carrot-orange hover:bg-sunset-orange transition-colors duration-200 font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-pure-white rounded-lg shadow-md"
        style={{
          width: "213px",
          height: "48px",
          padding: "12px 32px",
        }}
      >
        Leave a Testimonial
      </button>
    </section>
  )
}

export default TestimonialsButton;