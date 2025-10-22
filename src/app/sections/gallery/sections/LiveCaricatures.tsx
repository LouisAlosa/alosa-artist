"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import leftTop from "../../../assets/images/gallery/liveCaricatures/live-caricatures-left-top.jpg"
import leftBottom1 from "../../../assets/images/gallery/liveCaricatures/live-caricatures-left-bottom-left.jpg"
import leftBottom2 from "../../../assets/images/gallery/liveCaricatures/live-caricatures-left-bottom-right.jpg"
import middle from "../../../assets/images/gallery/liveCaricatures/live-caricatures-middle.jpg"
import rightTop from "../../../assets/images/gallery/liveCaricatures/live-caricatures-right-top.jpg"
import rightBottom from "../../../assets/images/gallery/liveCaricatures/live-caricatures-right-bottom.jpg"

const LiveCaricatures = () => {
  const images = [
    { src: leftTop, alt: "Live caricature left top" },
    { src: leftBottom1, alt: "Live caricature left bottom 1" },
    { src: leftBottom2, alt: "Live caricature left bottom 2" },
    { src: middle, alt: "Live caricature center" },
    { src: rightTop, alt: "Live caricature right top" },
    { src: rightBottom, alt: "Live caricature right bottom" },
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
    <section className="bg-pure-white w-full py-10 md:px-[5%] relative">
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
                className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/80"
                aria-label="Close preview"
              >
                ×
              </button>

              {activeIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); showPrevious() }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
                  aria-label="Previous"
                >
                  ❮
                </button>
              )}
              {activeIndex < images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); showNext() }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
                  aria-label="Next"
                >
                  ❯
                </button>
              )}
            </div>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[640px] lg:h-[720px] lg:max-h-[75vh] transition-all duration-300 ${
              activeIndex !== null && !isMobile ? "opacity-40 md:opacity-100" : "opacity-100"
            }`}
          >
            <div className="flex flex-col gap-4 h-full">
              <div 
                className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={leftTop}
                  alt="Live caricature left top"
                  fill
                  className="object-cover rounded-[16px]"
                  priority
                />
              </div>

              <div className="flex gap-4 h-full flex-1">
                <div 
                  className="relative flex-1 h-full min-h-[150px] cursor-pointer"
                  onClick={() => handleImageClick(1)}
                >
                  <Image
                    src={leftBottom1}
                    alt="Live caricature left bottom 1"
                    fill
                    className="object-cover rounded-[16px]"
                  />
                </div>
                <div 
                  className="relative flex-1 h-full min-h-[150px] cursor-pointer"
                  onClick={() => handleImageClick(2)}
                >
                  <Image
                    src={leftBottom2}
                    alt="Live caricature left bottom 2"
                    fill
                    className="object-cover rounded-[16px]"
                  />
                </div>
              </div>
            </div>

            <div 
              className="relative w-full h-full cursor-pointer"
              onClick={() => handleImageClick(3)}
            >
              <Image
                src={middle}
                alt="Live caricature center"
                fill
                className="object-cover rounded-[16px]"
                priority
              />
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div 
                className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(4)}
              >
                <Image
                  src={rightTop}
                  alt="Live caricature right top"
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>
              <div 
                className="relative w-full aspect-[4/3] flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(5)}
              >
                <Image
                  src={rightBottom}
                  alt="Live caricature right bottom"
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>
            </div>
          </div>
        )}

        {!isMobile && activeIndex !== null && (
          <div
            className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex justify-center items-center rounded-[16px] md:rounded-[20px] overflow-hidden"
          >
            <div className="relative w-[90%] md:w-[70%] max-w-[900px] aspect-[4/3] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  className="object-contain rounded-[12px]"
                  sizes="(max-width: 768px) 90vw, 70vw"
                  priority
                />
              </div>

              <button
                onClick={closePopup}
                className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
                aria-label="Close preview"
              >
                ×
              </button>

              {activeIndex > 0 && (
                <button
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
                  aria-label="Previous"
                >
                  ❮
                </button>
              )}

              {activeIndex < images.length - 1 && (
                <button
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/70"
                  aria-label="Next"
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

export default LiveCaricatures;