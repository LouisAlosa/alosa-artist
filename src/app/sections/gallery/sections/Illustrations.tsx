"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import illustration1 from "../../../assets/images/gallery/illustrations/illustration-left.jpg"
import illustration2 from "../../../assets/images/gallery/illustrations/illustration-middle-top.jpg"
import illustration3 from "../../../assets/images/gallery/illustrations/illustration-middle-bottom.jpg"
import illustration4 from "../../../assets/images/gallery/illustrations/illustration-right.jpg"

const Illustrations = () => {
  const images = [
    { src: illustration1, alt: "Illustration - African Sunz" },
    { src: illustration2, alt: "Illustration - Sherhehe Haitaki Hasira" },
    { src: illustration3, alt: "Illustration - Local News Scene" },
    { src: illustration4, alt: "Illustration - Soipan and the Tree Seed" },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleImageClick = (index: number) => {
    setActiveIndex(index)
  }

  const closePopup = () => setActiveIndex(null)
  const showNext = () =>
    setActiveIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    )
  const showPrevious = () =>
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))

  return (
    <section className="bg-soft-gray w-full py-10 md:px-[5%] relative">
      <div className="max-w-[1200px] mx-auto relative">
        {isMobile && activeIndex !== null ? (
          <div className="w-full aspect-[4/3] relative mx-auto rounded-[16px] overflow-hidden">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/35 flex items-center justify-center p-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  className="object-contain rounded-[12px] shadow-lg"
                  priority
                />
              </div>

              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/90 z-10"
                aria-label="Close preview"
              >
                ×
              </button>

              {activeIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); showPrevious() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/90 z-10"
                  aria-label="Previous"
                >
                  ‹
                </button>
              )}
              {activeIndex < images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); showNext() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/90 z-10"
                  aria-label="Next"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[640px] lg:h-[720px] lg:max-h-[75vh] transition-all duration-300 ${
              activeIndex !== null && !isMobile ? "opacity-40 md:opacity-100" : "opacity-100"
            }`}
          >
            {/* LEFT LARGE IMAGE */}
            <div
              className="relative w-full h-full cursor-pointer group overflow-hidden rounded-[16px]"
              onClick={() => handleImageClick(0)}
            >
              <Image
                src={illustration1}
                alt="Illustration - African Sunz"
                fill
                className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px]" />
            </div>

            {/* CENTER COLUMN */}
            <div className="flex flex-col gap-6 h-full">

              {/* Middle Top */}
              <div
                className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer group overflow-hidden rounded-[16px]"
                onClick={() => handleImageClick(1)}
              >
                <Image
                  src={illustration2}
                  alt="Illustration - Sherhehe Haitaki Hasira"
                  fill
                  className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px]" />
              </div>

              {/* Middle Bottom */}
              <div
                className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer group overflow-hidden rounded-[16px]"
                onClick={() => handleImageClick(2)}
              >
                <Image
                  src={illustration3}
                  alt="Illustration - Local News Scene"
                  fill
                  className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px]" />
              </div>
            </div>

            {/* RIGHT LARGE IMAGE */}
            <div
              className="relative w-full h-full cursor-pointer group overflow-hidden rounded-[16px]"
              onClick={() => handleImageClick(3)}
            >
              <Image
                src={illustration4}
                alt="Illustration - Soipan and the Tree Seed"
                fill
                className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px]" />
            </div>
          </div>
        )}

        {!isMobile && activeIndex !== null && (
          <div className="absolute inset-0 z-20 bg-black/90 flex items-center justify-center rounded-[16px] overflow-hidden h-full">
            <div className="relative w-full h-full max-w-[95%] max-h-[95%] flex items-center justify-center">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                width={1000}
                height={800}
                className="object-contain w-auto h-full max-w-full max-h-full rounded-lg"
                priority
              />

              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-black hover:scale-110 transition-all duration-200 z-50"
                aria-label="Close preview"
              >
                ×
              </button>

              {activeIndex > 0 && (
                <button
                  onClick={showPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-black hover:scale-110 transition-all duration-200 z-50"
                  aria-label="Previous"
                >
                  ‹
                </button>
              )}

              {activeIndex < images.length - 1 && (
                <button
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-black hover:scale-110 transition-all duration-200 z-50"
                  aria-label="Next"
                >
                  ›
                </button>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-white/15 rounded-full px-4 py-2 text-lg font-medium">
                {activeIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Illustrations;