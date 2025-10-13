"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

// Import all 8 images with their correct order
import DesmondTutu1 from "../../assets/images/heroimages/desmond-tutu-1.jpg"
import JasonStatham2 from "../../assets/images/heroimages/jason-statham-2.jpg"
import KhabiLame3 from "../../assets/images/heroimages/khabi-lame-3.jpg"
import OkiyaOntata4 from "../../assets/images/heroimages/okiya-omtata-4.jpg"
import FaithOdhiambo5 from "../../assets/images/heroimages/faith-odhiambo-5.jpg"
import FerdinandOmanyala6 from "../../assets/images/heroimages/ferdinand-omanyala-6.jpg"
import GeorgeLucas7 from "../../assets/images/heroimages/george-lucas-7.jpg"
import Pele8 from "../../assets/images/heroimages/pele-8.jpg"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "instant" as ScrollBehavior })
    }
  }

  // Array of images in the correct order for the grid
  const heroImages = [
    { src: DesmondTutu1, alt: "Desmond Tutu caricature", position: 1 },
    { src: JasonStatham2, alt: "Jason Statham caricature", position: 2 },
    { src: KhabiLame3, alt: "Khabi Lame caricature", position: 3 },
    { src: OkiyaOntata4, alt: "Okiya Ontata caricature", position: 4 },
    { src: FaithOdhiambo5, alt: "Faith Odhiambo caricature", position: 5 },
    { src: FerdinandOmanyala6, alt: "Ferdinand Omanyala caricature", position: 6 },
    { src: GeorgeLucas7, alt: "George Lucas caricature", position: 7 },
    { src: Pele8, alt: "Pele caricature", position: 8 },
  ]

  return (
    <section className="bg-deep-charcoal relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-charcoal">
      {/* Background Caricatures Grid */}
      <div className="absolute inset-0 z-0 flex flex-col">
        {/* Row 1 - First 4 images */}
        <div className="flex justify-between w-full flex-1">
          {heroImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden"
              style={{ 
                width: "95.54px", 
                height: "100%",
                marginRight: index < 3 ? "0.5rem" : "0" // Add spacing except for last image
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-deep-charcoal opacity-50" />
            </div>
          ))}
        </div>

        {/* Row 2 - Last 4 images */}
        <div className="flex justify-between w-full flex-1 mt-1"> {/* Small vertical gap */}
          {heroImages.slice(4, 8).map((image, index) => (
            <div
              key={index + 4}
              className="relative rounded-lg overflow-hidden"
              style={{ 
                width: "95.54px", 
                height: "100%",
                marginRight: index < 3 ? "0.5rem" : "0" // Add spacing except for last image
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-deep-charcoal opacity-50" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-[5%]">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Title */}
          <h1 className="font-fredoka font-[400] text-[48px] tracking-[0%] mb-6">
            <span className="text-pure-white block">Personality</span>
            <span className="text-bright-yellow block">Exaggerated</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-[18px] text-[400] tracking-[0%] text-light-gray mb-8">
            Get yourself and your loved ones personalized caricatures as memorable gifts. You can also bring your event to life with custom live caricatures drawn by me.
          </p>

          {/* Paragraph */}
          <p className="font-inter font-normal text-[18px] leading-[32px] tracking-[0%] text-light-gray mb-8 max-w-2xl mx-auto">
            
          </p>

          {/* CTA Button - Fixed padding and dimensions */}
          <button 
            className="bg-carrot-orange hover:bg-sunset-orange transition-colors duration-200 font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-pure-white rounded-lg mb-12"
            style={{
              width: '213px',
              height: '48px',
              padding: '12px 32px' // 32px horizontal, 12px vertical
            }}
          >
            Get Your Caricature
          </button>

          {/* Happy Faces Section */}
          <div className="flex gap-3 mb-8">
            {/* Happy Faces Avatars */}
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="rounded-full border-2 border-dark-charcoal bg-light-gray"
                  style={{
                    width: '31.82px',
                    height: '31.82px'
                  }}
                />
              ))}
            </div>
            
            {/* Happy Faces Text */}
            <span className="font-inter font-normal text-[14px] leading-[28px] tracking-[0%] text-light-gray">
              200+ happy faces
            </span>
          </div>

          {/* Scroll Down Button - Fixed colors */}
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 mx-auto group"
            aria-label="Scroll to about section"
          >
            <div 
              className="rounded-full flex justify-center border-2 border-bright-yellow"
              style={{
                width: '32px',
                height: '48px'
              }}
            >
              <div 
                className="rounded-full bg-bright-yellow mt-2 group-hover:translate-y-1 transition-transform duration-300"
                style={{
                  width: '4px',
                  height: '12px'
                }}
              />
            </div>
            <span className="font-inter font-normal text-[14px] leading-[28px] tracking-[0%] text-bright-yellow">
              Scroll Down
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero