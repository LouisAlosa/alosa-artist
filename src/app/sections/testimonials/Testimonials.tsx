"use client"

import TestimonialsBody from "./sections/TestimonialsBody";
import TestimonialsButton from "./sections/TestimonialsButton";
import TestimonialsTopBar from "./sections/TestimonialsTopar";

interface TestimonialsProps {
  onServiceOrder?: (serviceType: string) => void
}

const Testimonials = ({ onServiceOrder }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="bg-pure-white py-16">
      <TestimonialsTopBar />
      <TestimonialsBody />
      <TestimonialsButton onServiceOrder={onServiceOrder} />
    </section>
  )
}

export default Testimonials;