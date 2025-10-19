"use client"
import Image from "next/image"

import leftTop from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-top.jpg"
import leftBottom1 from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-left.jpg"
import leftBottom2 from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-left-bottom-right.jpg"
import middle from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-middle.jpg"
import rightTop from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-right-top.jpg"
import rightBottom from "../../../assets/images/gallery/digitalcaricatures/digital-caricatures-right-bottom.jpg"

const DigitalCaricatures = () => {
  return (
    <section className="bg-pure-white w-full py-10 md:px-[5%]">
      {/* Main container with consistent max-width */}
      <div className="max-w-[1200px] mx-auto">
        {/* Grid wrapper with max height constraint */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[640px] lg:h-[720px] lg:max-h-[75vh]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 h-full">
            {/* Top full-width image */}
            <div className="relative w-full aspect-[4/3] flex-shrink-0">
              <Image
                src={leftTop}
                alt="Digital caricature left top"
                fill
                className="object-cover rounded-[16px]"
                priority
              />
            </div>

            {/* Bottom row with 2 images */}
            <div className="flex gap-4 h-full flex-1">
              <div className="relative flex-1 h-full min-h-[150px]">
                <Image
                  src={leftBottom1}
                  alt="Digital caricature left bottom 1"
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>
              <div className="relative flex-1 h-full min-h-[150px]">
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
          <div className="relative w-full h-full">
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
            <div className="relative w-full aspect-[4/3] flex-shrink-0">
              <Image
                src={rightTop}
                alt="Digital caricature right top"
                fill
                className="object-cover rounded-[16px]"
              />
            </div>
            <div className="relative w-full aspect-[4/3] flex-shrink-0">
              <Image
                src={rightBottom}
                alt="Digital caricature right bottom"
                fill
                className="object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalCaricatures