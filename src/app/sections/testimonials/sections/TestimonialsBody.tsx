"use client"
import { useState } from "react"
import Image from "next/image"

import person1 from "../../../assets/images/gallery/illustrations/illustration-left.jpg"
import person2 from "../../../assets/images/gallery/illustrations/illustration-middle-bottom.jpg"
import person3 from "../../../assets/images/gallery/illustrations/illustration-right.jpg"

const TestimonialsBody = () => {
  const testimonials = [
    {
      id: 1,
      text: "I love it!!!!! 🤣🤣🤣🤣 ",
      textCarrot: "Definitely my new profile pic!!!",
      name: "Job Kim",
      type: "Custom Caricature",
      image: person1,
    },
    {
      id: 2,
      text: "Such a special gift 🥹🥹. ",
      textCarrot: "I'm so grateful you exist ❤️.",
      name: "Serena Ndekeremo",
      type: "Live Caricature",
      image: person2,
    },
    {
      id: 3,
      text: "Love it , ",
      textCarrot: "thanks 🔥",
      name: "Angela Okutoyi",
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

  const getTestimonialIndex = (offset: number) => {
    const newIndex = current + offset
    if (newIndex < 0) return testimonials.length - 1
    if (newIndex >= testimonials.length) return 0
    return newIndex
  }

  const { text, name, type, image, textCarrot } = testimonials[current]

  return (
    <section className="lg:px-[5%] w-full flex flex-col items-center justify-center text-center">
      {/* Testimonial text */}
      <p className="text-medium-gray text-center px-[5%] font-inter font-[400] text-[18px] py-6">
        {text}
        <span className="text-carrot-orange">{textCarrot}</span>
      </p>

      {/* Images container */}
      <div className="relative w-full max-w-sm mb-8">
        <div className="flex items-center justify-center gap-3">
          {/* Left side image */}
          <div
            className="relative w-20 h-24 rounded-xl overflow-hidden opacity-70 cursor-pointer transition-all duration-300 hover:opacity-85"
            onClick={() => setCurrent(getTestimonialIndex(-1))}
          >
            <Image
              src={testimonials[getTestimonialIndex(-1)].image}
              alt={testimonials[getTestimonialIndex(-1)].name}
              fill
              className="object-cover"
            />
          </div>

          {/* Center main image */}
          <div className="relative w-[220px] h-[280px] rounded-2xl overflow-hidden shadow-xl z-10 ring-1 ring-gray-200">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side image */}
          <div
            className="relative w-20 h-24 rounded-xl overflow-hidden opacity-70 cursor-pointer transition-all duration-300 hover:opacity-85"
            onClick={() => setCurrent(getTestimonialIndex(1))}
          >
            <Image
              src={testimonials[getTestimonialIndex(1)].image}
              alt={testimonials[getTestimonialIndex(1)].name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name and type */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm sm:text-base text-gray-500 mb-8 tracking-tight">{type}</p>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={handlePrevious}
          className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-700 hover:text-gray-900 text-lg transition-colors shadow-sm"
          aria-label="Previous testimonial"
        >
          ❮
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-gray-900 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-700 hover:text-gray-900 text-lg transition-colors shadow-sm"
          aria-label="Next testimonial"
        >
          ❯
        </button>
      </div>
    </section>
  )
}

export default TestimonialsBody;