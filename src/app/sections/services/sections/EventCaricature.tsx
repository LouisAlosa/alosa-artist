"use client"

import Image from "next/image"
import eventcaricatureimage from "../../../assets/images/myservices-events/colored-caricature.jpg"

interface EventCaricatureProps {
  onOrderPackage?: (packageType: string, serviceType: string) => void
}

const EventCaricature = ({ onOrderPackage }: EventCaricatureProps) => {
  
  const handleOrderPackage = (packageType: string) => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }

    // Call the parent handler to set the preselected option
    if (onOrderPackage) {
      onOrderPackage(packageType, "Book live event caricatures")
    }
  }

  return (
    <section className="bg-pure-white w-full flex flex-col items-center py-10 md:py-16 md:px-10">
      {/* Main wrapper for text + image */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1 max-w-[700px]">
          {/* Heading */}
          <h2 className="font-fredoka font-[400] text-[28px] text-dark-charcoal mb-5">
            Event Caricatures
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            <p className="font-inter font-[400] text-[18px] text-medium-gray py-2">
              These are live event caricatures drawn in weddings, corporate events, and festivals to entertain guests.
              It takes around 3–7 minutes to draw one person.
            </p>

            <p className="font-inter font-[400] text-[18px] text-medium-gray py-2">
              Guests get to go home happy with their own caricatures. Caricatures are drawn on plain white papers.
            </p>

            <p className="font-inter font-[400] text-[18px] text-medium-gray py-2">
              There are two packages to choose from:
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-[380px] h-[240px] md:h-[300px] flex-shrink-0">
          <Image
            src={eventcaricatureimage}
            alt="Event Caricature"
            fill
            className="object-cover rounded-[8px]"
            priority
          />
        </div>
      </div>

      {/* Package Cards */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Black & White Caricatures */}
        <div className="bg-neutral-gray rounded-[8px] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-fredoka font-[400] text-[24px] text-dark-charcoal mb-2">
              Black and White Caricatures
            </h3>

            <p className="font-inter text-[20px] text-carrot-orange font-[500] mb-1">
              Ksh. 10,000 / USD 100{" "}
              <span className="text-medium-gray text-[16px] font-[400]">Per hour</span>
            </p>

            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="font-inter text-[18px] text-medium-gray">
                It takes 3–5 minutes per face.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Branded papers with company or event logo have an additional charge of{" "}
                <span className="text-carrot-orange">Ksh 2,000 / USD 20 per hour.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                For gigs outside Nairobi, transport and accommodation (where applicable) are covered by the client.
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => handleOrderPackage("Black and White Caricatures")}
            className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] rounded-[8px] px-4 py-3 mt-6 shadow-md 
                       transition-all duration-200 ease-in-out
                       hover:bg-carrot-orange/90 hover:shadow-lg 
                       active:scale-[0.98] active:shadow-inner"
          >
            Order This Package
          </button>
        </div>

        {/* Colored Caricatures */}
        <div className="bg-neutral-gray rounded-[8px] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-fredoka font-[400] text-[24px] text-dark-charcoal mb-2">
              Coloured Caricatures
            </h3>

            <p className="font-inter text-[20px] text-carrot-orange font-[500] mb-1">
              Ksh. 13,000 / USD 130{" "}
              <span className="text-medium-gray text-[16px] font-[400]">Per hour</span>
            </p>

            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="font-inter text-[18px] text-medium-gray">
                It takes 4–6 minutes per face.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Branded papers with company or event logo have an additional charge of{" "}
                <span className="text-carrot-orange">Ksh 2,000 / USD 20 per hour.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                For gigs outside Nairobi, transport and accommodation (where applicable) are covered by the client.
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => handleOrderPackage("Coloured Caricatures")}
            className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] rounded-[8px] px-4 py-3 mt-6 shadow-md 
                       transition-all duration-200 ease-in-out
                       hover:bg-carrot-orange/90 hover:shadow-lg 
                       active:scale-[0.98] active:shadow-inner"
          >
            Order This Package
          </button>
        </div>
      </div>
    </section>
  )
}

export default EventCaricature;