"use client"

import Image from "next/image"
import MainCaricature from "../../assets/images/about/main-alosa.jpg"
import SmallCaricature from "../../assets/images/about/mini-alosa-about.jpg"
import mediaColaboration from "../../assets/images/about/media_collaborations.svg"
import notableEvents from "../../assets/images/about/notable_events.svg"

const AboutAlosa = () => {
  return (
    <section id="about" className="bg-soft-gray px-[5%] lg:px-[8%] py-10 lg:py-12">
      {/* Container centered on page */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] lg:items-center gap-12 lg:gap-42">
          {/* LEFT: Image */}
          <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] flex-shrink-0 mx-auto lg:mx-0">
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

            {/* Small Tilted Overlay */}
            <div className="absolute bottom-[-20px] right-[-10px] w-[100px] h-[120px] sm:w-[120px] sm:h-[110px] lg:w-[140px] lg:h-[150px] transform rotate-6 rounded-[8px] shadow-lg overflow-hidden">
              <Image
                src={SmallCaricature}
                alt="Small caricature overlay"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-dark-charcoal/20 z-[1]" />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full max-w-[600px] lg:max-w-none flex flex-col lg:justify-center">
            <h2 className="font-fredoka text-[36px] font-[400] text-dark-charcoal mb-2">
              About Me
            </h2>

            <div className="bg-silver-gray w-[80px] h-[6px] rounded-sm mb-6" />

            <p className="mt-2 font-inter text-[18px] text-medium-gray mb-4 w-full">
              Louis Alosa is a caricature artist based in Nairobi, Kenya. His love for art began in childhood, sketching in school books and drawing inspiration from cartoonists Gado and KJ (Hon. John Kiarie). For the past 9 years, he has mastered the art of whimsical exaggeration, believing that everyone has a cartoon version of themselves waiting to be set free.
            </p>

            <p className="font-inter text-[18px] text-medium-gray mb-10 w-full">
              Louis has spent the last 5 years energizing weddings, corporate events, and festivals with live caricatures transforming rooms into laughter-filled galleries. He has worked with brands and events such as PWC (2022), Safaricom Dealer Awards (2025), Capital Club Anniversary (2024), Colgate Campaign (2024), Exotel Workshops (2023 - 2024), and Mavuno Church (2023). He also collaborated with Africa Uncensored on The Big Picture Show (2022 - 2023).
            </p>

            {/* Achievements */}
            <div className="max-w-[640px] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gray flex-shrink-0">
                  <Image
                    src={mediaColaboration}
                    alt="Profile icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-inter text-dark-charcoal text-[18px] font-normal">
                    Media Collaboration
                  </h3>
                  <p className="font-inter text-medium-gray text-[16px] font-normal">
                    Africa Uncensored
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gray flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#E67E22">
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 11h-2V7h2zm0 0h4v2h-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter text-dark-charcoal text-[18px] font-normal">
                    9 Years Experience
                  </h3>
                  <p className="font-inter text-medium-gray text-[16px] font-normal">
                    Full Time Caricature Artist
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gray flex-shrink-0">
                  <Image
                    src={notableEvents}
                    alt="Profile icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-inter text-dark-charcoal text-[18px] font-normal">
                    Notable Event
                  </h3>
                  <p className="font-inter text-medium-gray text-[16px] font-normal">
                    Safaricom’s Dealer of the Year Awards 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAlosa