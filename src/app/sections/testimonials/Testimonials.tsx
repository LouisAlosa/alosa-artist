"use client"

import TestimonialsBody from "./sections/TestimonialsBody";
import TestimonialsTopBar from "./sections/TestimonialsTopar";

const Testimonials = () => {
  return (
    <section className="bg-pure-white py-16">
      <TestimonialsTopBar />
      <TestimonialsBody />
    </section>
  )
}

export default Testimonials;