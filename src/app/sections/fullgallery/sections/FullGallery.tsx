"use client"

import { useEffect } from "react"
import FullGalleryDigitalCaricatures from "./FullGalleryDigitalCaricatures"

interface FullGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

function FullGallery({ isOpen, onClose }: FullGalleryProps) {
  
  // Disable scroll behind modal
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full h-full bg-white overflow-y-auto animate-scaleFade">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-black hover:text-gray-500 transition text-3xl"
        >
          ×
        </button>

        <div className="px-[5%] pt-16 pb-32 mx-auto">
          
          <FullGalleryDigitalCaricatures />

          {/* Back to Home */}
          <div className="flex justify-center mt-20">
            <button
              onClick={onClose}
              className="text-carrot-orange font-inter text-lg flex items-center gap-2 hover:opacity-80 transition"
            >
              ← Back to home page
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FullGallery;