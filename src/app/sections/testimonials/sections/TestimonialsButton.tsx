"use client"

const TestimonialsButton = () => {
  return (
    <section className="w-full flex justify-center py-4 md:py-8">
      <button
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
