"use client"

import Image from "next/image"
import Link from "next/link"

import logo from "../../assets/images/alosa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-carrot-orange text-white px-[5%] py-10 font-inter">
      {/* Logo and description */}
      <div className="flex flex-col items-start mb-10">
        {/* Logo */}
        <div className="flex items-center mb-4">
          <Image 
            src={logo} 
            alt="Alosa Arts Logo" 
            width={183.38} 
            height={78} 
            priority 
            className="w-auto h-[52px] md:h-[78px]" // Mobile: 52px height, Desktop: 78px height
          />
        </div>

        <p className="text-[15px] leading-relaxed text-white/90 max-w-xs">
          Everyone has a cartoon version of themselves just waiting to be set
          free. My job is to find that playful spirit and bring it to life
          through whimsical exaggeration.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 mb-10">
        {/* Facebook */}
        <Link href="#" aria-label="Facebook" className="hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
          </svg>
        </Link>

        {/* Instagram */}
        <Link href="#" aria-label="Instagram" className="hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
          </svg>
        </Link>

        {/* YouTube */}
        <Link href="#" aria-label="YouTube" className="hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path d="M10 15l5.19-3L10 9v6zm11.5-6.5s-.2-1.47-.82-2.12c-.78-.83-1.66-.83-2.06-.88C16.35 5.3 12 5.3 12 5.3h-.01s-4.35 0-6.61.2c-.4.05-1.28.05-2.06.88C2.7 7.03 2.5 8.5 2.5 8.5S2.3 10.07 2.3 11.65v.7c0 1.58.2 3.15.2 3.15s.2 1.47.82 2.12c.78.83 1.8.8 2.26.89 1.64.17 6.43.2 6.43.2s4.35 0 6.61-.2c.4-.05 1.28-.05 2.06-.88.62-.65.82-2.12.82-2.12s.2-1.57.2-3.15v-.7c0-1.58-.2-3.15-.2-3.15z" />
          </svg>
        </Link>

        {/* TikTok */}
        <Link href="#" aria-label="TikTok" className="hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path d="M12 2h2a4 4 0 0 0 4 4v2a6 6 0 0 1-4-1.5V15a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V2z" />
          </svg>
        </Link>

        {/* X / Twitter */}
        <Link href="#" aria-label="Twitter / X" className="hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path d="M22 4.01c-.77.34-1.6.56-2.47.66a4.3 4.3 0 0 0 1.89-2.37 8.6 8.6 0 0 1-2.72 1.04A4.27 4.27 0 0 0 11.3 7.1c0 .34.03.68.1 1A12.1 12.1 0 0 1 3 4.67a4.27 4.27 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.42 4.19 4.2 4.2 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.56 8.56 0 0 1 2 19.55a12.08 12.08 0 0 0 6.56 1.93c7.87 0 12.17-6.52 12.17-12.18v-.55A8.73 8.73 0 0 0 22 4.01z" />
          </svg>
        </Link>
      </div>

      {/* Quick Links */}
      <div className="mb-10">
        <h3 className="font-semibold text-white mb-3 text-lg">Quick Links</h3>
        <ul className="flex flex-col gap-2 text-white/90 text-[15px]">
          <li><Link href="#about" className="hover:underline">About</Link></li>
          <li><Link href="#services" className="hover:underline">Services</Link></li>
          <li><Link href="#gallery" className="hover:underline">Gallery</Link></li>
          <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
          <li><Link href="#contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="mb-4">
        <h3 className="font-semibold text-white mb-3 text-lg">Contact Info</h3>
        <ul className="flex flex-col gap-3 text-white/90 text-[15px]">
          <li className="flex items-center gap-2">
            {/* Email */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 11 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
            </svg>
            <span>alosa.louis@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            {/* Phone */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.44a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.44a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.15 2.2z"/>
            </svg>
            <span>+254721787390</span>
          </li>
          <li className="flex items-center gap-2">
            {/* Location */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
            </svg>
            <span>Nairobi, Kenya</span>
          </li>
        </ul>
      </div>

      <hr className="border-white/30 mt-8" />
    </footer>
  )
}

export default Footer;