"use client"
import { useState } from "react"
import Image from "next/image"

import leftTop from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import leftBottom1 from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import leftBottom2 from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"
import middle from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-middle.jpg"
import rightTop from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-right-top.jpg"
import rightBottom from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-right-bottom.jpg"

const DigitalCaricatures = () => {
  const images = [
    { src: leftTop, alt: "Digital caricature left top" },
    { src: leftBottom1, alt: "Digital caricature left bottom 1" },
    { src: leftBottom2, alt: "Digital caricature left bottom 2" },
    { src: middle, alt: "Digital caricature center" },
    { src: rightTop, alt: "Digital caricature right top" },
    { src: rightBottom, alt: "Digital caricature right bottom" },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const closePopup = () => setActiveIndex(null)
  const showNext = () =>
    setActiveIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    )
  const showPrevious = () =>
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))

  return (
    <section className="bg-pure-white w-full py-10 md:px-[5%] relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Normal Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[640px] lg:h-[720px] lg:max-h-[75vh] transition-all duration-300 ${
            activeIndex !== null ? "hidden md:grid" : "grid"
          }`}
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 h-full">
            <div
              className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer"
              onClick={() => setActiveIndex(0)}
            >
              <Image
                src={leftTop}
                alt="Digital caricature left top"
                fill
                className="object-cover rounded-[16px]"
                priority
              />
            </div>

            <div className="flex gap-4 h-full flex-1">
              <div
                className="relative flex-1 h-full min-h-[150px] cursor-pointer"
                onClick={() => setActiveIndex(1)}
              >
                <Image
                  src={leftBottom1}
                  alt="Digital caricature left bottom 1"
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>
              <div
                className="relative flex-1 h-full min-h-[150px] cursor-pointer"
                onClick={() => setActiveIndex(2)}
              >
                <Image
                  src={leftBottom2}
                  alt="Digital caricature left bottom 2"
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setActiveIndex(3)}
          >
            <Image
              src={middle}
              alt="Digital caricature center"
              fill
              className="object-cover rounded-[16px]"
              priority
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 h-full">
            <div
              className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer"
              onClick={() => setActiveIndex(4)}
            >
              <Image
                src={rightTop}
                alt="Digital caricature right top"
                fill
                className="object-cover rounded-[16px]"
              />
            </div>
            <div
              className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer"
              onClick={() => setActiveIndex(5)}
            >
              <Image
                src={rightBottom}
                alt="Digital caricature right bottom"
                fill
                className="object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>

        {/* POPUP VIEW */}
        {activeIndex !== null && (
          <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex justify-center items-center rounded-[16px] md:rounded-[20px] overflow-hidden">
            {/* Container with limited size */}
            <div className="relative w-[90%] md:w-[70%] max-w-[800px] h-[90%] flex items-center justify-center">
              {/* Image stays confined within the blurred background */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  className="object-contain rounded-[16px]"
                  sizes="(max-width: 768px) 90vw, 70vw"
                  priority
                />
              </div>

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
              >
                ×
              </button>

              {/* Previous Button (only if not first) */}
              {activeIndex > 0 && (
                <button
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
                >
                  ❮
                </button>
              )}

              {/* Next Button (only if not last) */}
              {activeIndex < images.length - 1 && (
                <button
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
                >
                  ❯
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DigitalCaricatures;