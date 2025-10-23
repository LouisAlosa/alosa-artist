"use client"
import { useState } from "react"
import Image from "next/image"

// Update these imports with your actual image paths
import person1 from "../../../assets/images/gallery/illustrations/illustration-left.jpg"
import person2 from "../../../assets/images/gallery/illustrations/illustration-middle-bottom.jpg"
import person3 from "../../../assets/images/gallery/illustrations/illustration-right.jpg"

const TestimonialsBody = () => {
  const testimonials = [
    {
      id: 1,
      text: "I love it!!!!! 🤣🤣🤣🤣 Definitely my new profile pic!!!",
      name: "Job Kim",
      type: "Custom Caricature",
      image: person1,
    },
    {
      id: 2,
      text: "This artist captured my personality perfectly. I can’t stop showing everyone!",
      name: "Sarah Doe",
      type: "Live Caricature",
      image: person2,
    },
    {
      id: 3,
      text: "Such a fun experience! Fast, professional, and the result blew my mind!",
      name: "Michael Lee",
      type: "Digital Caricature",
      image: person3,
    },
  ]

  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const { text, name, type, image } = testimonials[current]

  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-10 px-6 bg-white">
      {/* Testimonial text */}
      <p className="text-gray-700 text-lg md:text-xl font-medium mb-6 max-w-md leading-relaxed">
        {text}
      </p>

      {/* Image and info */}
      <div className="relative w-[220px] h-[280px] mx-auto bg-gray-100 rounded-[20px] overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-[20px]"
          priority
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{type}</p>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-xl transition"
          aria-label="Previous testimonial"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-xl transition"
          aria-label="Next testimonial"
        >
          ❯
        </button>
      </div>
    </section>
  )
}

export default TestimonialsBody;