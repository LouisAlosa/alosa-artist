"use client"

import Image from "next/image"
import CaricatureFromPhotosimage from "../../../assets/images/myservices-events/weddingEcards.jpg"

const CaricatureFromPhotos = () => {
  return (
    <section className="bg-pure-white w-full flex flex-col items-center py-10 md:py-16 md:px-10">
      {/* Main wrapper for text + image */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1 max-w-[700px]">
          {/* Heading */}
          <h2 className="font-fredoka font-[400] text-[28px] leading-[32px] text-dark-charcoal mb-5">
            Caricature from Photos
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            <p className="font-inter font-[400] text-[18px] leading-[28px] text-medium-gray">
              Caricatures from photos are caricatures drawn using photos as reference: You send photos of people to be drawn. A caricature is a great gift with a personal touch, tailored to specific requirements.
            </p>

            <p className="font-inter font-[400] text-[18px] leading-[28px] text-medium-gray">
              The prices below are just for soft copy work which can be sent to your email once done. If you need a hard copy, there are additional costs for prints, photo mounting and framing.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-[380px] h-[240px] md:h-[300px] flex-shrink-0">
          <Image
            src={CaricatureFromPhotosimage}
            alt="Event Caricature"
            fill
            className="object-cover rounded-[8px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default CaricatureFromPhotos;