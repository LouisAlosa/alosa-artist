"use client"

import Image from "next/image"
import Link from "next/link"

import logo from "../../assets/images/alosa-logo.png"
import emailFillIcon from "../../assets/images/footer/emailfillicon.svg";

const Footer = () => {
  return (
    <footer className="bg-saddle-brown text-pure-white px-[5%] py-10 font-inter">
      {/* Top Grid Section - Updated alignment only */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-10">
        {/* Logo and description - Left aligned */}
        <div className="flex flex-col items-start">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <Image
                src={logo}
                alt="Alosa Arts Logo"
                width={183.38}
                height={78}
                priority
                className="w-auto h-[52px] md:h-[78px]"
              />
            </button>
          </div>

          <p className="text-[16px] md:text-[17px] lg:text-[18px] font-[400] max-w-[380px]">
            Everyone has a cartoon version of themselves just waiting to be set
            free. My job is to find that playful spirit and bring it to life
            through whimsical exaggeration.
          </p>

          {/* Social Icons */}
          <div className="flex lg:items-center gap-4 mt-6">
            <Link href="http://www.facebook.com/alosaarts" aria-label="Facebook" className="hover:opacity-80" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
              </svg>
            </Link>

            <Link href="http://www.instagram.com/mrlouisalosa" aria-label="Instagram" className="hover:opacity-80" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
              </svg>
            </Link>

            <Link href="http://www.youtube.com/louisalosa" aria-label="YouTube" className="hover:opacity-80" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
              >
                <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.103C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.408.583A2.97 2.97 0 0 0 .502 6.186 31.58 31.58 0 0 0 0 11.995c-.003 1.956.186 3.91.557 5.837a2.97 2.97 0 0 0 2.09 2.103C4.309 20.49 12 20.49 12 20.49s7.691 0 9.408-.583a2.97 2.97 0 0 0 2.09-2.103 31.58 31.58 0 0 0 .557-5.837 31.58 31.58 0 0 0-.557-5.837zM9.75 15.02v-6.05l5.25 3.03-5.25 3.02z"/>
              </svg>
            </Link>

            <Link href="https://www.tiktok.com/@mrlouisalosa?_t=ZM-9064uX9IM8G&_r=1" aria-label="TikTok" className="hover:opacity-80" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M12 2h2a4 4 0 0 0 4 4v2a6 6 0 0 1-4-1.5V15a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V2z" />
              </svg>
            </Link>

            <Link href="http://www.x.com/mrlouisalosa" aria-label="Twitter / X" className="hover:opacity-80" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M22 4.01c-.77.34-1.6.56-2.47.66a4.3 4.3 0 0 0 1.89-2.37 8.6 8.6 0 0 1-2.72 1.04A4.27 4.27 0 0 0 11.3 7.1c0 .34.03.68.1 1A12.1 12.1 0 0 1 3 4.67a4.27 4.27 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.42 4.19 4.2 4.2 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.56 8.56 0 0 1 2 19.55a12.08 12.08 0 0 0 6.56 1.93c7.87 0 12.17-6.52 12.17-12.18v-.55A8.73 8.73 0 0 0 22 4.01z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Quick Links - Centered vertical list */}
        <div className="flex flex-col lg:items-center">
          <h3 className="font-fredoka font-[400] text-[20px] md:text-[24px] mb-4 md:mb-6">Quick Links</h3>
          <ul className="flex flex-col lg:items-center gap-3 font-inter text-[16px] md:text-[17px] lg:text-[18px] font-[400]">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info - Right aligned */}
        <div className="flex flex-col lg:items-end">
          <h3 className="font-fredoka font-[400] text-[20px] md:text-[24px] mb-3">Contact Info</h3>
          <ul className="flex flex-col gap-3 font-inter text-[16px] md:text-[18px] font-[400] lg:items-end">
            <li className="flex items-center gap-2">
              <Image 
                src={emailFillIcon} 
                alt="Email icon" 
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-[16px] md:text-[17px] lg:text-[18px]">alosa.louis@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.44a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.44a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.15 2.2z"/>
              </svg>
              <span className="text-[16px] md:text-[17px] lg:text-[18px]">+254721787390</span>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
              </svg>
              <span className="text-[16px] md:text-[17px] lg:text-[18px]">Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mt-8 mb-6" />

      {/* Bottom Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between lg:items-center gap-3 md:gap-0">
        <p className="text-[15px] md:text-[16px] lg:text-[18px] font-[400]">
          © 2025 Alosa Arts. All rights reserved.
        </p>
        <p className="text-[15px] md:text-[16px] lg:text-[18px] font-[400]">
          Designed by{" "}
          <Link href="https://www.linkedin.com/in/rachaelngotho/" className="underline hover:text-light-gray" target="_blank">
            Rachael
          </Link>
          , Developed by{" "}
          <Link href="https://www.linkedin.com/in/nemwel-nyandoro/" className="underline hover:text-light-gray" target="_blank">
            Nemwel
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer;