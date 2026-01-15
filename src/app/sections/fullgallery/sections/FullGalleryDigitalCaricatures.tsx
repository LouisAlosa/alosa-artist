"use client"

import Image from "next/image"
import { useState } from "react"

// First 4 images first column
import first from "../../../assets/images/gallery/digitalcaricatures/alosa-arts-digital-caricature-digital-caricatures-left-top-n.jpg"
import second from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesfirstcolumn2.jpg"
import third from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesfirstcolumn3.jpg"
import fourth from "../../../assets/images/gallery/digitalcaricatures/alosa-arts-digital-caricature-digital-caricatures-middle-nai.jpg"

// second column 4 images
import SecondCfirst from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturessecondcolumn-3.png"
import SecondCsecond from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturessecondcolumn-4.png"
import SecondCthird from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturessecondcolumn-2.jpg"
import SecondCfourth from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturessecondcolumn.jpg"

// third column 4 images
import thirdCfirst from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesmiddlecolumn.png"
import thirdCSecond from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesmiddlecolumn-2.png"
import thirdCthird from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesmiddlecolumn-3.jpg"

// fourth column 3 images
import FourthCfirst from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesrightlefttop.png"
import FourthCSecond from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesrightlefttop-2.png"
import FourthCthird from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesrightleftmai.jpg"

// fifth column 3 images
import FifthCfirst from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesright1-nairo.png"
import FifthCSecond from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesright2-nairo.png"
import FifthCthird from "../../../assets/images/gallery/fullgallery/digitalCaricatures/alosa-arts-digital-caricature-digitalcaricaturesright3-nairo.jpg"

const FullGalleryDigitalCaricatures = () => {
  const allImages = [
    { src: first, alt: "Digital caricature 1" },
    { src: second, alt: "Digital caricature 2" },
    { src: third, alt: "Digital caricature 3" },
    { src: fourth, alt: "Digital caricature 4" },
    { src: SecondCfirst, alt: "Digital caricature 5" },
    { src: SecondCsecond, alt: "Digital caricature 6" },
    { src: SecondCthird, alt: "Digital caricature 7" },
    { src: SecondCfourth, alt: "Digital caricature 8" },
    { src: thirdCfirst, alt: "Digital caricature 9" },
    { src: thirdCSecond, alt: "Digital caricature 10" },
    { src: thirdCthird, alt: "Digital caricature 11" },
    { src: FourthCfirst, alt: "Digital caricature 12" },
    { src: FourthCSecond, alt: "Digital caricature 13" },
    { src: FourthCthird, alt: "Digital caricature 14" },
    { src: FifthCfirst, alt: "Digital caricature 15" },
    { src: FifthCSecond, alt: "Digital caricature 16" },
    { src: FifthCthird, alt: "Digital caricature 17" },
  ]

  return (
    <section className="w-full py-8 bg-pure-white font-inter">
      <div className="px-6 mb-8">
        <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1A1A1A]">
          Digital Caricatures
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#666] mt-2">
          Explore our collection of premium digital caricatures.
        </p>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[300px] md:h-[320px] rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                placeholder="blur"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mt-10 text-center text-[#666] text-[14px]">
        {allImages.length} artworks • Scroll for more
      </div>
    </section>
  )
}

export default FullGalleryDigitalCaricatures;