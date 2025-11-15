"use client"

import { Dispatch, SetStateAction } from "react";

interface MyServicesTopBarProps {
  activeService: string;
  setActiveService: Dispatch<SetStateAction<string>>
}

const MyServicesTopBar = ({ activeService, setActiveService }: MyServicesTopBarProps) => {
  const services = [
    "Event Caricatures",
    "Caricatures From Photos",
    "Wedding eCards",
  ]

  return (
    <section className="bg-pure-white w-full">
      {/* Services intro section */}
      <div className="flex flex-col items-center justify-center max-w-[800px] mx-auto text-center">
        {/* Heading */}
        <h2 className="font-fredoka font-[400] text-dark-charcoal text-[36px] mb-4">
          My Services
        </h2>

        {/* Divider */}
        <div className="bg-silver-gray w-[80px] h-[6px] rounded-sm mb-6" />

        {/* Description */}
        <p className="font-inter font-[400] text-medium-gray text-[18px] max-w-[640px]">
          Looking for that unique gift? Something extraordinary? Whether it&apos;s for a birthday,
          a retirement, baby shower, friendship or a &apos;just because&apos; caricature as a gift will
          always win.
        </p>
      </div>

      {/* Pills / Button Section */}
      <div className="flex flex-wrap justify-center items-center gap-5 mt-12">
        {services.map((service) => {
          const isActive = activeService === service
          return (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              type="button"
              className={`min-w-[220px] lg:w-[240px] py-3 rounded-[8px] font-fredoka font-[400] text-[16px] transition-all duration-200
                ${
                  isActive
                    ? "bg-carrot-orange text-pure-white shadow-md"
                    : "bg-silver-gray text-dark-charcoal hover:bg-gray-300 hover:text-dark-charcoal"
                }`}
            >
              {service}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default MyServicesTopBar;