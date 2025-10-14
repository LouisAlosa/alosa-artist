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
          <div className="absolute bottom-[-20px] right-[-10px] w-[100px] h-[90px] sm:w-[120px] sm:h-[110px] lg:w-[140px] lg:h-[120px] transform rotate-6 rounded-xl shadow-lg overflow-hidden border-4 border-white bg-white">
            <Image
              src={SmallCaricature}
              alt="Small caricature overlay"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT: Placeholder for text content (optional, you can add later) */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="font-fredoka text-[28px] sm:text-[36px] font-[400] text-dark-charcoal mb-4">
            About Alosa
          </h2>
          <p className="font-inter text-[16px] sm:text-[18px] text-gray-600 leading-[28px]">
            Your personalized caricature artist, capturing every smile and detail with creativity and color.
          </p>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}

export default AboutAlosa;