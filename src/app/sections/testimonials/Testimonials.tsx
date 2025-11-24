"use client"

import TestimonialsBody from "./sections/TestimonialsBody";
import TestimonialsButton from "./sections/TestimonialsButton";
import TestimonialsTopBar from "./sections/TestimonialsTopar";

interface TestimonialsProps {
  onServiceOrder?: (serviceType: string) => void
}

const Testimonials = ({ onServiceOrder }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="bg-pure-white py-10 lg:py-14">
      <TestimonialsTopBar />
      <TestimonialsBody />
      <TestimonialsButton onServiceOrder={onServiceOrder} />
    </section>
  )
}

export default Testimonials;