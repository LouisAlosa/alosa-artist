"use client"

import TestimonialsBody from "./sections/TestimonialsBody";
import TestimonialsButton from "./sections/TestimonialsButton";
import TestimonialsTopBar from "./sections/TestimonialsTopar";

const Testimonials = () => {
  return (
    <section className="bg-pure-white py-16">
      <TestimonialsTopBar />
      <TestimonialsBody />
      <TestimonialsButton />
    </section>
  )
}

export default Testimonials;