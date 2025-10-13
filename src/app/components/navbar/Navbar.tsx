"use client"

import Image from "next/image";
import AlosaLogo from "../../assets/images/alosa-logo.png"
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-soft-gray h-[68px] px-[5%] flex items-center justify-between relative">
      {/* Alosa image logo appears here */}
      <div className="flex items-center">
        <Image
          src={AlosaLogo}
          alt="Alosa Arts Logo"
          width={68}
          height={52}
          priority
        />
      </div>

      {/* Navigation Toggle (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle menu"
        className="flex flex-col justify-between w-6 h-4 focus:outline-none"
      >
        <span className="block h-[2px] w-full bg-dark-charcoal"></span>
        <span className="block h-[2px] w-full bg-dark-charcoal"></span>
        <span className="block h-[2px] w-full bg-dark-charcoal"></span>
      </button>

      {/* Navigation Menu */}
      <nav
        id="primary-navigation"
        className={`absolute top-[68px] right-[5%] bg-carrot-orange text-white rounded-md shadow-lg p-4 space-y-3 w-40 z-50 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-2 right-4 text-light-gray text-xl cursor-pointer"
          aria-label="Close menu"
        >
          ×
        </button>

        <ul className="flex flex-col space-y-3 mt-6">
          <li><a href="#about" className="font-fredoka text-[16px] text-light-gray block hover:opacity-80">About</a></li>
          <li><a href="#services" className="font-fredoka text-[16px] text-light-gray block hover:opacity-80">Services</a></li>
          <li><a href="#gallery" className="font-fredoka text-[16px] text-light-gray block hover:opacity-80">Gallery</a></li>
          <li><a href="#testimonials" className="font-fredoka text-[16px] text-light-gray block hover:opacity-80">Testimonials</a></li>
          <li><a href="#contact" className="font-fredoka text-[16px] text-light-gray block hover:opacity-80">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;