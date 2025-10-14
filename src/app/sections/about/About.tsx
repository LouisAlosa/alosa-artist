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

          {/* Main Image (centered inside yellow border) */}
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
            <div className="absolute inset-0 bg-dark-charcoal/30 z-[1]" />
          </div>
        </div>

        {/* RIGHT: Placeholder for text content */}
        <div className="w-full">
          <h2 className="font-fredoka text-[36px] font-[400] text-dark-charcoal mb-4">
            About Alosa
          </h2>

          {/* The divider hr-ish section which is silver in colour */}
          <div className="bg-silver-gray w-[80px] p-1"></div>

          <p className="mt-4 font-inter text-[18px] text-medium-gray mb-4">
            Louis Alosa is a caricature artist based in Nairobi, Kenya. His love for art began in childhood, sketching in school books and drawing inspiration from cartoonists Gado and KJ (Hon. John Kiarie). For the past 9 years, he has mastered the art of whimsical exaggeration, believing that everyone has a cartoon version of themselves waiting to be set free.
          </p>

          <p className="font-inter text-[18px] text-medium-gray mb-4">
            Louis has spent the last 5 years energizing weddings, corporate events, and festivals with live caricatures transforming rooms into laughter-filled galleries. He has worked with brands and events such as PWC (2022), Safaricom Dealer Awards (2025), Capital Club Anniversary (2024), Colgate Campaign (2024), Exotel Workshops (2023 - 2024), and Mavuno Church (2023). He also collaborated with Africa Uncensored on The Big Picture Show (2022 - 2023).
          </p>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}

export default AboutAlosa;