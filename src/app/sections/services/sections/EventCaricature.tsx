"use client"

import Image from "next/image"
import eventcaricatureimage from "../../../assets/images/myservices-events/colored-caricature.jpg"

const EventCaricature = () => {
  return (
    <section className="bg-pure-white w-full flex justify-center py-10 md:py-16">
      <div className="w-full bg-pure-white rounded-[12px] shadow-sm text-left">
        {/* Subheading */}
        <h2 className="font-fredoka font-[400] text-[28px] leading-[32px] text-dark-charcoal mb-5 text-center">
          Event Caricatures
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] md:h-[260px] mb-6">
          <Image
            src={eventcaricatureimage}
            alt="Event Caricature"
            fill
            className="object-cover rounded-[8px]"
            priority
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-4">
          <p className="font-inter font-[400] text-[18px] text-medium-gray">
            These are live event caricatures drawn in weddings, corporate events, and festivals to entertain guests.
            It takes around 3–7 minutes to draw one person.
          </p>

          <p className="font-inter font-[400] text-[18px] text-medium-gray">
            Guests get to go home happy with their own caricatures. Caricatures are drawn on plain white papers.
          </p>

          <p className="font-inter font-[400] text-[18px] text-medium-gray">
            There are two packages to choose from:
          </p>
        </div>
      </div>
    </section>
  )
}

export default EventCaricature