"use client"

import Image from "next/image"
import CaricatureFromPhotosimage from "../../../assets/images/myservices-events/CaricatureFromPhotos.jpg"

interface CaricatureFromPhotosProps {
  onOrderPackage?: (packageType: string, serviceType: string) => void
}

const CaricatureFromPhotos = ({ onOrderPackage }: CaricatureFromPhotosProps) => {
  
  const handleOrderPackage = (packageType: string) => {
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }

    // Call the parent handler to set the preselected option
    if (onOrderPackage) {
      onOrderPackage(packageType, "Order a caricature from photos")
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
            Caricature from Photos
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            <p className="font-inter font-[400] text-[18px] text-medium-gray py-2">
              Caricatures from photos are caricatures drawn using photos as reference: You send photos of people to be drawn. A caricature is a great gift with a personal touch, tailored to specific requirements.
            </p>

            <p className="font-inter font-[400] text-[18px] text-medium-gray py-2">
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
            className="object-cover object-top rounded-[8px]"
            priority
          />
        </div>
      </div>

      {/* Package Cards */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Head to shoulders/chest */}
        <div className="bg-neutral-gray rounded-[8px] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-fredoka font-[400] text-[24px] text-dark-charcoal mb-2">
              Head to shoulders/chest
            </h3>

            <p className="font-inter text-[20px] text-carrot-orange font-[500] mb-1">
              Ksh. 5,000/ USD 50  
              <span className="text-medium-gray text-[16px] font-[400]"> Per person with a plain background</span>
            </p>

            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="font-inter text-[18px] text-medium-gray">
                Any additional person is <span className="text-carrot-orange">Ksh 4,000/USD 40 each.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Digital delivery via email.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                High resolution file.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                You can get a time-lapse of your caricatures, 1-3 minutes time-laps for 
                <span className="text-carrot-orange"> Ksh. 1,000/USD 10.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Additional items in the caricatures such as vehicles, pets, detailed background (landscapes, buildings, oceans, etc) have additional charges starting from 
                <span className="text-carrot-orange"> Ksh. 3,000/ USD 30.</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => handleOrderPackage("Head to shoulders/chest")}
            className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] rounded-[8px] px-4 py-3 mt-6 shadow-md 
                       transition-all duration-200 ease-in-out
                       hover:bg-carrot-orange/90 hover:shadow-lg 
                       active:scale-[0.98] active:shadow-inner"
          >
            Order This Package
          </button>
        </div>

        {/* Head to waist */}
        <div className="rounded-t-[8px]">
          <div className="w-full bg-bright-yellow text-center p-2">
            <p className="font-inter text-[20px]">Most Popular</p>
          </div>
          {/* This custom grouping accomodates the 'Most popular section shown above */}
          <div className="bg-neutral-gray rounded-[8px] px-6 py-2 shadow-sm flex flex-col justify-between">
            <div>
                <h3 className="font-fredoka font-[400] text-center text-[24px] text-dark-charcoal mb-2">
                Head to waist
                </h3>

                <p className="font-inter text-[20px] text-carrot-orange font-[500] pb-4 mb-1">
                  Ksh. 7,000/ USD 70 
                  <span className="text-medium-gray text-[16px] font-[400]"> Per person with a plain background</span>
                </p>

                <ul className="list-disc list-inside space-y-3 mt-4">
                <li className="font-inter text-[18px] text-medium-gray">
                    Any additional person is 
                    <span className="text-carrot-orange"> Ksh 6,000/USD 60 each.</span>
                </li>
                <li className="font-inter text-[18px] text-medium-gray">
                    Digital delivery via email.
                </li>
                <li className="font-inter text-[18px] text-medium-gray">
                    High resolution file.
                </li>
                <li className="font-inter text-[18px] text-medium-gray">
                    You can get a time-lapse of your caricatures, 1-3 minutes time-laps for
                    <span className="text-carrot-orange"> Ksh. 1,000/USD 10.</span>
                </li>
                <li className="font-inter text-[18px] text-medium-gray">
                    Additional items in the caricatures such as vehicles, pets, detailed background (landscapes, buildings, oceans, etc) have additional charges starting from
                    <span className="text-carrot-orange"> Ksh. 3,000/ USD 30.</span>
                </li>
                </ul>
            </div>

            <button
                type="button"
                onClick={() => handleOrderPackage("Head to waist")}
                className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] rounded-[8px] px-4 py-3 mt-6 shadow-md 
                        transition-all duration-200 ease-in-out
                        hover:bg-carrot-orange/90 hover:shadow-lg 
                        active:scale-[0.98] active:shadow-inner"
            >
                Order This Package
            </button>
          </div>
        </div>

        {/* Head to feet/full body */}
        <div className="bg-neutral-gray rounded-[8px] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-fredoka font-[400] text-[24px] text-dark-charcoal mb-2">
              Head to feet/full body
            </h3>

            <p className="font-inter text-[20px] text-carrot-orange font-[500] mb-1">
              Ksh. 9,000/ USD 90 
              <span className="text-medium-gray text-[16px] font-[400]"> Per person with a plain background</span>
            </p>

            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="font-inter text-[18px] text-medium-gray">
                Any additional person is 
                <span className="text-carrot-orange"> Ksh 8,000/USD 80 each.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Digital delivery via email.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                High resolution file.
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                You can get a time-lapse of your caricatures, 1-3 minutes time-laps for
                <span className="text-carrot-orange"> Ksh. 1,000/USD 10.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                Additional items in the caricatures such as vehicles, pets, detailed background (landscapes, buildings, oceans, etc) have additional charges starting from
                <span className="text-carrot-orange"> Ksh. 3,000/ USD 30.</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => handleOrderPackage("Head to feet/full body")}
            className="w-full bg-carrot-orange text-pure-white font-inter font-[400] text-[16px] rounded-[8px] px-4 py-3 mt-6 shadow-md 
                       transition-all duration-200 ease-in-out
                       hover:bg-carrot-orange/90 hover:shadow-lg 
                       active:scale-[0.98] active:shadow-inner"
          >
            Order This Package
          </button>
        </div>
      </div>

      {/* Photo Mounts */}
      <div className="bg-neutral-gray rounded-[8px] mt-6 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-fredoka text-center font-[400] text-[24px] text-dark-charcoal mb-2">
              Photo Mounting Rates
            </h3>

            <ul className="list-disc list-inside space-y-3 mt-4">
              <li className="font-inter text-[18px] text-medium-gray">
                A4 size (21 by 29.7cm) - <span className="text-carrot-orange">Ksh. 1,500.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                A3 size (29.7 by 42cm) - <span className="text-carrot-orange">Ksh. 2,500.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                A2 size (42 by 59.4cm) - <span className="text-carrot-orange">Ksh. 3,500.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                A1 size (59.4 by 84.1cm) - <span className="text-carrot-orange">Ksh. 5,500.</span>
              </li>
              <li className="font-inter text-[18px] text-medium-gray">
                A0 size (84.1 by 118.9cm) - <span className="text-carrot-orange">Ksh. 1,500.</span>
              </li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default CaricatureFromPhotos;