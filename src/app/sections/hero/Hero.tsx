"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

// Import all 8 images with their correct order 
// Images used in the hero section background section
import DesmondTutu1 from "../../assets/images/heroimages/desmond-tutu-1.jpg" 
import JasonStatham2 from "../../assets/images/heroimages/jason-statham-2.jpg" 
import KhabiLame3 from "../../assets/images/heroimages/khabi-lame-3.jpg" 
import OkiyaOntata4 from "../../assets/images/heroimages/okiya-omtata-4.jpg" 
import FaithOdhiambo5 from "../../assets/images/heroimages/faith-odhiambo-5.jpg" 
import FerdinandOmanyala6 from "../../assets/images/heroimages/ferdinand-omanyala-6.jpg" 
import GeorgeLucas7 from "../../assets/images/heroimages/george-lucas-7.jpg" 
import Pele8 from "../../assets/images/heroimages/pele-8.jpg"

// Import the three images to be used in the happy faces section
import NataliaOyer1 from "../../assets/images/heroimages/happyfaces/natalia-oyer-1.jpg"
import MaxineWabosha2 from "../../assets/images/heroimages/happyfaces/maxine-wabosha-2.jpg" 
import MoisesArias3 from "../../assets/images/heroimages/happyfaces/moises-arias-3.jpg" 

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

  // Array of images for the happy faces section
  const happyfaces = [
    { src: NataliaOyer1, alt: "Natalia Oyer caricature", position: 1 },
    { src: MaxineWabosha2, alt: "Maxine Wabosha caricature", position: 2 },
    { src: MoisesArias3, alt: "Moise Aria caricature", position: 3 }
  ]

  return (
    <section className="relative min-h-[80vh] lg:max-h-[65vh] xl:max-h-[70vh] flex items-center justify-center overflow-hidden bg-dark-charcoal py-12 lg:py-18">
      {/* Background Caricatures Grid */}
      <div className="absolute inset-0 z-0 flex flex-col gap-1">
        {/* Row 1 - First 4 images */}
        <div className="flex w-full flex-1 gap-2">
          {heroImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative flex-1 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Last 4 images */}
        <div className="flex w-full flex-1 gap-2">
          {heroImages.slice(4, 8).map((image, index) => (
            <div
              key={index + 4}
              className="relative flex-1 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Global Overlay (covers all background images) */}
      <div className="absolute inset-0 bg-deep-charcoal opacity-92 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-[5%]">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Title */}
          <h1 className="font-fredoka font-[400] text-[48px] leading-[50px] lg:text-[58px] lg:leading-[60px] tracking-[0%] mb-6">
            <span className="block lg:inline text-pure-white">Personality </span>
            <span className="block lg:inline text-bright-yellow">Exaggerated</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-[18px] lg:text-[20px] font-[400] leading-[32px] tracking-[0%] text-light-gray mb-8 max-w-full lg:max-w-2xl">
            Get yourself and your loved ones personalized caricatures as memorable gifts. 
            You can also bring your event to life with custom live caricatures drawn by me.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-carrot-orange hover:bg-sunset-orange transition-colors duration-200 font-inter font-normal text-[14px] md:text-[16px] leading-[24px] tracking-[0%] text-pure-white rounded-lg mb-12 w-full max-w-[213px] px-4 py-3"
          >
            Get Your Caricature
          </button>

          {/* Happy Faces Section */}
          <div className="flex gap-3 mb-8">
            {/* Happy Faces Avatars */}
            <div className="flex -space-x-2">
              {happyfaces.map((face, index) => (
                <div
                  key={index}
                  className="relative rounded-full border-2 border-dark-charcoal overflow-hidden"
                  style={{
                    width: "31.82px",
                    height: "31.82px",
                  }}
                >
                  <Image
                    src={face.src}
                    alt={face.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              {/* Add 2 more empty circles to maintain the total of 5 */}
              {[...Array(0)].map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="rounded-full border-2 border-dark-charcoal bg-light-gray"
                  style={{
                    width: "31.82px",
                    height: "31.82px",
                  }}
                />
              ))}
            </div>
            
            {/* Happy Faces Text */}
            <span className="font-inter font-normal text-[14px] leading-[28px] tracking-[0%] text-light-gray">
              1000+ happy faces
            </span>
          </div>
          {/* Scroll Down Button */}
          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "auto" });
            }}
            className="flex flex-col items-center gap-2 mx-auto group"
            aria-label="Scroll to about section"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 group-hover:scale-110 group-active:scale-95"
            >
              <rect
                x="1"
                y="1"
                width="46"
                height="46"
                rx="23"
                ry="23"
                fill="#FFD60A"
                className="transition-colors duration-300 group-hover:fill-sunset-orange"
              />
              
              {/* Arrow */}
              <g className="transition-transform duration-500 ease-out group-hover:translate-y-2">
                <line
                  x1="24"
                  y1="16"
                  x2="24"
                  y2="28"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polyline
                  points="20,24 24,28 28,24"
                  fill="none"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;