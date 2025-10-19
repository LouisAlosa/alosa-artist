"use client"
import { Dispatch, SetStateAction } from "react";

interface GalleryTopBarProps {
    activeGallery: string;
    setActiveGallery: Dispatch<SetStateAction<string>>
}

const GalleryTopBar = ({ activeGallery, setActiveGallery }: GalleryTopBarProps) => {
    const galleries = [
        "Digital Caricatures",
        "Illustrations",
        "Live Caricatures"
    ]

    return (
        <section className="bg-pure-white w-full mb-6">
            {/* Gallery intro section */}
            <div className="flex flex-col items-center justify-center max-w-[800px] mx-auto text-center">
                {/* Heading */}
                <h2 className="font-fredoka font-[400] text-dark-charcoal text-[36px] mb-4">
                Gallery
                </h2>

                {/* Divider */}
                <div className="bg-silver-gray w-[80px] h-[6px] rounded-sm mb-6" />

                {/* Description */}
                <p className="font-inter font-[400] text-medium-gray text-[18px] max-w-[640px]">
                  Browse through some of my favorite caricatures from events and custom orders. Each piece captures not just a likeness, but a personality!
                </p>
            </div>

            {/* Pills / Button Section */}
            <div className="flex flex-wrap justify-center items-center gap-5 mt-12">
                {galleries.map((gallery) => {
                const isActive = activeGallery === gallery
                return (
                    <button
                    key={gallery}
                    onClick={() => setActiveGallery(gallery)}
                    type="button"
                    className={`min-w-[220px] lg:w-[240px] py-3 rounded-[8px] font-fredoka font-[400] text-[16px] transition-all duration-200
                        ${
                        isActive
                            ? "bg-carrot-orange text-pure-white shadow-md"
                            : "bg-silver-gray text-dark-charcoal hover:bg-carrot-orange/80 hover:text-pure-white"
                        }`}
                    >
                    {gallery}
                    </button>
                )
                })}
            </div>
            </section>
    )
}

export default GalleryTopBar;