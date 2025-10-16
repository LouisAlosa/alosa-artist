"use client"

import Image from "next/image"
import eventcaricatureimage from "../../../assets/images/myservices-events/colored-caricature.jpg"

const EventCaricature = () => {
  return (
    <section className="bg-pure-white w-full flex flex-col items-center py-10 md:py-16">
      {/* Main content wrapper */}
      <div className="w-full max-w-[420px] text-left">
        {/* Subheading */}
        <h2 className="font-fredoka font-[400] text-[28px] text-dark-charcoal mb-5 text-center">
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
        <div className="space-y-4 mb-8">
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

        {/* Package Cards Section */}
        <div className="flex flex-col gap-6">
          {/* Black and White Caricatures */}
          <div className="bg-neutral-gray rounded-[8px] p-5 shadow-sm">
            <h3 className="font-fredoka font-[400] text-[20px] text-dark-charcoal mb-2">
              Black and White Caricatures
            </h3>

            <p className="font-inter font-[500] text-[18px] text-medium-gray mb-4">
              <span className="text-carrot-orange font-[500]">Ksh. 10,000 / USD 100</span>
              <span className="text-[16px] font-[400] text-medium-gray"> per hour</span>
            </p>

            <ul className="list-disc list-inside space-y-3">
              <li className="font-inter text-[18px] text-medium-gray">
                It takes 3–5 minutes per face.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Branded papers with company or event logo have an additional charge of{" "}
                <span className="text-carrot-orange font-[500]">Ksh 2,000 / USD 20 per hour.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                For gigs outside Nairobi, transport and accommodation (where applicable) are covered by the client.
              </li>
            </ul>

            <button
                type="button"
                className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] rounded-[8px] px-4 py-3 mt-5 shadow-md 
                            transition-all duration-200 ease-in-out
                            hover:bg-carrot-orange/90 hover:shadow-lg 
                            active:scale-[0.98] active:shadow-inner"
                >
                Order This Package
            </button>
          </div>

          {/* Colored Caricatures */}
          <div className="bg-neutral-gray rounded-[8px] p-5 shadow-sm">
            <h3 className="font-fredoka font-[400] text-[20px] text-dark-charcoal mb-2">
              Colored Caricatures
            </h3>

            <p className="font-inter font-[500] text-[18px] text-medium-gray mb-4">
              <span className="text-carrot-orange font-[500]">Ksh. 13,000 / USD 130</span>
              <span className="text-[16px] font-[400] text-medium-gray"> per hour</span>
            </p>

            <ul className="list-disc list-inside space-y-3">
              <li className="font-inter text-[18px] text-medium-gray">
                It takes 4–6 minutes per face.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Branded papers with company or event logo have an additional charge of{" "}
                <span className="text-carrot-orange font-[500]">Ksh 2,000 / USD 20 per hour.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                For gigs outside Nairobi, transport and accommodation (where applicable) are covered by the client.
              </li>
            </ul>

            <button
                type="button"
                className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] rounded-[8px] px-4 py-3 mt-5 shadow-md 
                            transition-all duration-200 ease-in-out
                            hover:bg-carrot-orange/90 hover:shadow-lg 
                            active:scale-[0.98] active:shadow-inner"
                >
                Order This Package
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventCaricature