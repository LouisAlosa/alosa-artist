"use client"

import Image from "next/image"
import { useState } from "react"

// First 4 images first column
import first from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import second from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesfirstColumn2.jpg"
import third from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesfirstColumn3.jpg"
import fourth from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-middle.jpg"

// second column 4 images
import SecondCfirst from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesSecondColumnTop1.jpg"
import SecondCsecond from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesSecondColumnTop2.jpg"
import SecondCthird from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesSecondColumnMiddle.jpg"
import SecondCfourth from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesSecondColumnBottom1.jpg"

// third column 4 images
import thirdCfirst from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesMiddleColumn1.jpg"
import thirdCSecond from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesMiddleColumn2.jpg"
import thirdCthird from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesMiddleColumn3.jpg"

// fourth column 3 images
import FourthCfirst from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesRightLeftTop1.jpg"
import FourthCSecond from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesRightLeftTop2.jpg"
import FourthCthird from "../../../assets/images/gallery/fullgallery/digitalCaricatures/digitalCaricaturesRightLeftMain.jpg"

// fifth column 3 images
import FifthCfirst from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import FifthCSecond from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import FifthCthird from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"

const FullGalleryDigitalCaricatures = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Combine all images for mobile view
  const allImages = [
    first, second, third, fourth,
    SecondCfirst, SecondCsecond, SecondCthird, SecondCfourth,
    thirdCfirst, thirdCSecond, thirdCthird,
    FourthCfirst, FourthCSecond, FourthCthird,
    FifthCfirst, FifthCSecond, FifthCthird
  ]

  return (
    <section className="w-full py-6 bg-white">
      {/* Header */}
      <div className="px-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Digital Caricatures</h2>
        <p className="text-gray-600 mt-2 text-sm">Swipe to explore all caricatures</p>
      </div>

      {/* Mobile View - Single Column Masonry Layout */}
      <div className="block lg:hidden">
        <div className="columns-2 gap-3 px-4 space-y-3">
          {allImages.map((src, index) => (
            <div 
              key={index} 
              className="relative break-inside-avoid mb-3 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image 
                src={src} 
                alt={`Digital caricature ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Original 5 Column Layout */}
      <div className="hidden lg:grid grid-cols-5 gap-4 md:gap-6 px-4">
        {/* Column 1 (4 stacked) */}
        <div className="flex flex-col gap-4">
          {[first, second, third, fourth].map((src, i) => (
            <div key={i} className="relative w-full h-[160px] md:h-[220px] rounded-lg overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Column 2 (2 top, 1 middle, 1 bottom) */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {[SecondCfirst, SecondCsecond].map((src, i) => (
              <div key={i} className="relative w-full h-[160px] md:h-[200px] rounded-lg overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="relative w-full h-[220px] md:h-[300px] rounded-lg overflow-hidden">
            <Image src={SecondCthird} alt="" fill className="object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[SecondCfourth].map((src, i) => (
              <div key={i} className="relative w-full h-[160px] md:h-[200px] rounded-lg overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 (4 stacked) */}
        <div className="flex flex-col gap-4">
          {[thirdCfirst, thirdCSecond, thirdCthird].map((src, i) => (
            <div key={i} className="relative w-full h-[160px] md:h-[220px] rounded-lg overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Column 4 (2 top, 1 bottom) */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {[FourthCfirst, FourthCSecond].map((src, i) => (
              <div key={i} className="relative w-full h-[160px] md:h-[200px] rounded-lg overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="relative w-full h-[260px] md:h-[350px] rounded-lg overflow-hidden">
            <Image src={FourthCthird} alt="" fill className="object-cover" />
          </div>
        </div>

        {/* Column 5 (3 stacked) */}
        <div className="flex flex-col gap-4">
          {[FifthCfirst, FifthCSecond, FifthCthird].map((src, i) => (
            <div key={i} className="relative w-full h-[180px] md:h-[250px] rounded-lg overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Footer Info */}
      <div className="block lg:hidden px-4 mt-8 text-center">
        <p className="text-gray-500 text-sm">
          {allImages.length} caricatures • Scroll to see more
        </p>
      </div>
    </section>
  )
}

export default FullGalleryDigitalCaricatures;