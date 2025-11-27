"use client"
import { useState } from "react"
import Image from "next/image"

import person1 from "../../../assets/images/testimonials/JobKIm.jpg"
import person2 from "../../../assets/images/testimonials/SerenaNdekeremo.jpg"
import person3 from "../../../assets/images/testimonials/AngelaOkutoyi.jpg"

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
      text: "Such a special gift 🥹🥹 ",
      textCarrot: "I'm so grateful you exist ❤️",
      name: "Serena Ndekeremo",
      type: "Live Caricature",
      image: person2,
    },
    {
      id: 3,
      text: "Love it, ",
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
    <section className="w-full flex flex-col items-center justify-center text-center py-10 bg-white">
      {/* Testimonial text */}
      <p className="text-medium-gray text-center px-6 md:px-12 lg:px-[10%] font-inter font-[400] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8">
        {text}
        <span className="text-carrot-orange font-medium">{textCarrot}</span>
      </p>

      {/* Main container for images + navigation arrows */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left navigation arrow (desktop positioning) */}
        <button
          onClick={handlePrevious}
          className="hidden md:flex absolute left-[10%] lg:left-[14%] w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700 hover:text-gray-900 text-lg shadow-sm transition-colors"
          aria-label="Previous testimonial"
        >
          ❮
        </button>

        {/* Images container */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-5">
          {/* Left side image */}
          <div
            className="relative w-[70px] h-[90px] sm:w-[100px] sm:h-[120px] md:w-[150px] md:h-[200px] rounded-xl overflow-hidden opacity-60 cursor-pointer transition-all duration-300 hover:opacity-80"
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
          <div className="relative w-[200px] h-[250px] sm:w-[220px] sm:h-[280px] md:w-[260px] md:h-[320px] lg:w-[300px] lg:h-[370px] rounded-2xl overflow-hidden shadow-xl z-10 ring-1 ring-gray-200 transition-all duration-500">
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
            className="relative w-[70px] h-[90px] sm:w-[100px] sm:h-[120px] md:w-[150px] md:h-[200px] rounded-xl overflow-hidden opacity-60 cursor-pointer transition-all duration-300 hover:opacity-80"
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

        {/* Right navigation arrow (desktop positioning) */}
        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-[10%] lg:right-[14%] w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700 hover:text-gray-900 text-lg shadow-sm transition-colors"
          aria-label="Next testimonial"
        >
          ❯
        </button>
      </div>

      {/* Name and type */}
      <div className="mt-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
          {name}
        </h3>
        <p className="text-sm sm:text-base md:text-[17px] text-gray-500 tracking-tight">
          {type}
        </p>
      </div>

      {/* Navigation buttons (mobile only) */}
      <div className="flex md:hidden justify-center items-center gap-6 mt-6">
        <button
          onClick={handlePrevious}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 text-gray-700 hover:text-gray-900 text-lg transition-colors shadow-sm"
          aria-label="Previous testimonial"
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 text-gray-700 hover:text-gray-900 text-lg transition-colors shadow-sm"
          aria-label="Next testimonial"
        >
          ❯
        </button>
      </div>
    </section>
  )
}

export default TestimonialsBody;