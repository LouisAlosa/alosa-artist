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
        <span className="block h-[2px] w-full bg-dark-charcoal transition-transform duration-300"></span>
        <span className="block h-[2px] w-full bg-dark-charcoal transition-opacity duration-300"></span>
        <span className="block h-[2px] w-full bg-dark-charcoal transition-transform duration-300"></span>
      </button>

      {/* Navigation Menu */}
      <nav 
        id="primary-navigation"
        className={`
          fixed top-[68px] right-4 bg-carrot-orange text-light-gray rounded-l-md shadow-lg p-4 space-y-3 w-36 z-50 
          transform transition-all duration-500 ease-out
          ${menuOpen 
            ? "translate-x-0 opacity-100 visible" 
            : "translate-x-full opacity-0 invisible"
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-2 right-4 text-light-gray text-xl cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-3 mt-6">
          <li>
            <a 
              href="#about" 
              className="font-fredoka text-[16px] text-light-gray block hover:opacity-80 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="font-fredoka text-[16px] text-light-gray block hover:opacity-80 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              className="font-fredoka text-[16px] text-light-gray block hover:opacity-80 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className="font-fredoka text-[16px] text-light-gray block hover:opacity-80 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="font-fredoka text-[16px] text-light-gray block hover:opacity-80 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Backdrop overlay when menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 top-[68px]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Navbar;