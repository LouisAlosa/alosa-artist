"use client"

import Image from "next/image"
import { useState } from "react"

// First 4 images first column
import first from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import second from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import third from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"
import fourth from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-middle.jpg"

// second column 4 images
import SecondCfirst from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import SecondCsecond from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import SecondCthird from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"
import SecondCfourth from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-middle.jpg"

// third column 4 images
import thirdCfirst from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import thirdCSecond from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import thirdCthird from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"
import thirdCfourth from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-middle.jpg"

// fourth column 3 images
import FourthCfirst from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import FourthCSecond from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import FourthCthird from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"

// fifth column 3 images
import FifthCfirst from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import FifthCSecond from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import FifthCthird from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"

const FullGalleryDigitalCaricatures = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Digital Caricatures</h2>

      <div className="grid grid-cols-5 gap-4 md:gap-6">

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
          {[thirdCfirst, thirdCSecond, thirdCthird, thirdCfourth].map((src, i) => (
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
    </section>
  )
}

export default FullGalleryDigitalCaricatures;