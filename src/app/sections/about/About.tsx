"use client"

import Image from "next/image"
import MainCaricature from "../../assets/images/about/main-alosa.jpg"
import SmallCaricature from "../../assets/images/about/mini-alosa-about.jpg"

const AboutAlosa = () => {
  return (
    <section id="about" className="bg-soft-gray px-[5%] py-16 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* LEFT: Caricature Image Composition */}
        <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] flex-shrink-0 mx-auto lg:mx-0">
          {/* Yellow Circle Border */}
          <div className="absolute inset-0 rounded-full border-[8px] border-bright-yellow"></div>

          {/* Main Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={MainCaricature}
              alt="Main caricature of Alosa"
              fill
              className="object-cover rounded-full p-2 bg-bright-yellow"
              priority
            />
          </div>

          {/* Small Tilted Image Overlay */}
          <div className="absolute bottom-[-20px] right-[-10px] w-[100px] h-[90px] sm:w-[120px] sm:h-[110px] lg:w-[140px] lg:h-[120px] transform rotate-6 rounded-xl shadow-lg overflow-hidden">
            <Image
              src={SmallCaricature}
              alt="Small caricature overlay"
              fill
              className="object-cover"
            />
            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-dark-charcoal/20 z-[1]" />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="w-full">
          <h2 className="font-fredoka text-[36px] font-[400] text-dark-charcoal mb-4">
            About Alosa
          </h2>

          {/* Divider */}
          <div className="bg-silver-gray w-[80px] p-1"></div>

          {/* Paragraphs */}
          <p className="mt-4 font-inter text-[18px] leading-[28px] text-medium-gray mb-4">
            Louis Alosa is a caricature artist based in Nairobi, Kenya. His love for art began in childhood, sketching in school books and drawing inspiration from cartoonists Gado and KJ (Hon. John Kiarie). For the past 9 years, he has mastered the art of whimsical exaggeration, believing that everyone has a cartoon version of themselves waiting to be set free.
          </p>

          <p className="font-inter text-[18px] leading-[28px] text-medium-gray mb-10">
            Louis has spent the last 5 years energizing weddings, corporate events, and festivals with live caricatures transforming rooms into laughter-filled galleries. He has worked with brands and events such as PWC (2022), Safaricom Dealer Awards (2025), Capital Club Anniversary (2024), Colgate Campaign (2024), Exotel Workshops (2023 - 2024), and Mavuno Church (2023). He also collaborated with Africa Uncensored on The Big Picture Show (2022 - 2023).
          </p>

          {/* Achievements Section */}
          <div className="space-y-5">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gray flex-shrink-0">
                {/* Media Collaboration SVG (Solid) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E67E22"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-inter text-dark-charcoal text-[18px] font-[400]">
                  Media Collaboration
                </h3>
                <p className="font-inter text-medium-gray text-[16px] font-[400]">
                  Africa Uncensored
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gray flex-shrink-0">
                {/* Experience SVG (Solid Clock) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E67E22"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 11h-2V7h2zm0 0h4v2h-4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-inter text-dark-charcoal text-[18px] font-[400]">
                  9 Years Experience
                </h3>
                <p className="font-inter text-medium-gray text-[16px] font-[400]">
                  Full Time Caricature Artist
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gray flex-shrink-0">
                {/* Award SVG (Solid Trophy) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E67E22"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M18 2h-3V1a1 1 0 0 0-2 0v1H8a1 1 0 0 0-1 1v3a5 5 0 0 0 4 4.9V14H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3.1A5 5 0 0 0 17 6V3a1 1 0 0 0-1-1zm-1 4a3 3 0 0 1-6 0V4h6z" />
                </svg>
              </div>
              <div>
                <h3 className="font-inter text-dark-charcoal text-[18px] font-[400]">
                  Notable Event
                </h3>
                <p className="font-inter text-medium-gray text-[16px] font-[400]">
                  Safaricom’s Dealer of the Year Awards 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAlosa
