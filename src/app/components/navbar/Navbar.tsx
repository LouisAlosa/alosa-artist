"use client"

import Image from "next/image";
import AlosaLogo from "../../assets/images/alosa-logo.png"
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-soft-gray h-[68px] lg:h-[78px] px-[5%] flex items-center justify-between relative">
      {/* Alosa image logo appears here */}
      <div className="flex items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer"
        >
          <Image 
            src={AlosaLogo} 
            alt="Alosa Arts Logo" 
            width={183.38} 
            height={78} 
            priority 
            className="w-auto h-[52px] md:h-[78px]" // Mobile: 52px height, Desktop: 78px height
          />
        </button>
      </div>

      {/* Navigation Toggle (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle menu"
        className="flex flex-col justify-between w-6 h-4 focus:outline-none md:hidden" // Hide on tablet/desktop
      >
        <span className="block h-[2px] w-full bg-dark-charcoal transition-transform duration-300"></span>
        <span className="block h-[2px] w-full bg-dark-charcoal transition-opacity duration-300"></span>
        <span className="block h-[2px] w-full bg-dark-charcoal transition-transform duration-300"></span>
      </button>

      {/* Desktop Navigation Menu */}
      <nav 
        id="primary-navigation"
        className="hidden md:flex items-center space-x-8" // Show on tablet/desktop
      >
        <ul className="flex space-x-8">
          <li>
            <a 
              href="#about" 
              className="font-fredoka text-[18px] text-dark-charcoal hover:text-carrot-orange transition-colors duration-200 leading-[24px] tracking-[0%]"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="font-fredoka text-[18px] text-dark-charcoal hover:text-carrot-orange transition-colors duration-200 leading-[24px] tracking-[0%]"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              className="font-fredoka text-[18px] text-dark-charcoal hover:text-carrot-orange transition-colors duration-200 leading-[24px] tracking-[0%]"
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className="font-fredoka text-[18px] text-dark-charcoal hover:text-carrot-orange transition-colors duration-200 leading-[24px] tracking-[0%]"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="font-fredoka text-[18px] text-dark-charcoal hover:text-carrot-orange transition-colors duration-200 leading-[24px] tracking-[0%]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      <nav 
        id="primary-navigation-mobile"
        className={`
          fixed top-[68px] right-4 bg-carrot-orange text-light-gray rounded-l-md shadow-lg p-4 space-y-3 w-36 z-50 
          transform transition-all duration-500 ease-out md:hidden // Hide on tablet/desktop
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
          className="fixed inset-0 bg-opacity-50 z-40 top-[68px] md:hidden" // Hide on tablet/desktop
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Navbar;