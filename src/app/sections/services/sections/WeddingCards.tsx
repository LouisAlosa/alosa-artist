"use client"

import Image from "next/image"
import WeddingCardsimage from "../../../assets/images/myservices-events/weddingEcards.jpg"

const WeddingCards = () => {
  return (
    <section className="bg-pure-white w-full flex flex-col items-center py-10 md:py-16 md:px-10">
      {/* Main wrapper for text + image */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1 max-w-[700px]">
          {/* Heading */}
          <h2 className="font-fredoka font-[400] text-[28px] leading-[32px] text-dark-charcoal mb-5">
            Wedding and dowry invitation eCards
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            <p className="font-inter font-[400] text-[18px] leading-[28px] text-medium-gray">
              I draw elegant and personalized wedding and dowry invitation cards that reflect your unique style and story.
            </p>

            <p className="font-inter font-[400] text-[18px] leading-[28px] text-medium-gray">
              Whether you prefer a modern, traditional, or blended touch, the invitations are crafted with attention to detail to leave a lasting impression on your guests.
            </p>

            <p className="font-inter font-[400] text-[18px] leading-[28px] text-medium-gray">
              Each card is tailored to celebrate your special day with beauty and meaning.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-[380px] h-[240px] md:h-[300px] flex-shrink-0">
          <Image
            src={WeddingCardsimage}
            alt="Event Caricature"
            fill
            className="object-cover rounded-[8px]"
            priority
          />
        </div>
      </div>

      {/* Package Cards */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Head to waist */}
        <div className="bg-neutral-gray rounded-[8px] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-fredoka font-[400] text-[24px] leading-[32px] text-dark-charcoal mb-2">
              Head to waist
            </h3>

            <p className="font-inter text-[20px] leading-[32px] text-carrot-orange font-[500] mb-1">
              Ksh. 15,000/ USD 150{" "}
              <span className="text-medium-gray text-[16px] font-[400]">Per couple</span>
            </p>

            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="font-inter text-[18px] leading-[24px] text-medium-gray">
                Plain background with text.
              </li>
              <li className="font-inter text-[18px] leading-[24px] text-medium-gray">
                Any additional person is{" "}
                <span className="text-carrot-orange">Ksh 6,000/USD 60 each.</span>
              </li>
              <li className="font-inter text-[18px] leading-[24px] text-medium-gray">
                Any additional items in the caricatures such as vehicles, pets, detailed backgrounds (landscapes, buildings, oceans etc) have additional charges starting from
                <span className="text-carrot-orange"> Ksh. 3,000/USD 30.</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] leading-[24px] rounded-[8px] px-4 py-3 mt-6 shadow-md 
                       transition-all duration-200 ease-in-out
                       hover:bg-carrot-orange/90 hover:shadow-lg 
                       active:scale-[0.98] active:shadow-inner"
          >
            Order This Package
          </button>
        </div>

        {/* Head to feet/full body */}
        <div className="bg-neutral-gray rounded-[8px] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-fredoka font-[400] text-[24px] leading-[32px] text-dark-charcoal mb-2">
              Head to feet/full body
            </h3>

            <p className="font-inter text-[20px] leading-[32px] text-carrot-orange font-[500] mb-1">
              Ksh. 19,000/ USD 190{" "}
              <span className="text-medium-gray text-[16px] font-[400]">Per couple</span>
            </p>

            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="font-inter text-[18px] leading-[24px] text-medium-gray">
                Plain background with text.
              </li>
              <li className="font-inter text-[18px] leading-[24px] text-medium-gray">
                Any additional person is {" "}
                <span className="text-carrot-orange">Ksh 8,000/USD 80 each.</span>
              </li>
              <li className="font-inter text-[18px] leading-[24px] text-medium-gray">
                Any additional items in the caricatures such as vehicles, pets, detailed backgrounds (landscapes, buildings, oceans etc) have additional charges starting from
                <span className="text-carrot-orange"> Ksh. 3,000/USD 30.</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] leading-[24px] rounded-[8px] px-4 py-3 mt-6 shadow-md 
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

export default WeddingCards;