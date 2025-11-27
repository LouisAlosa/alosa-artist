"use client"

import { useState } from "react";
import GalleryTopBar from "./sections/GalleryTopBar";
import DigitalCaricatures from "./sections/DigitalCaricatures";
import LiveCaricatures from "./sections/LiveCaricatures";
import Illustrations from "./sections/Illustrations";
import GalleryButton from "./sections/GalleryButton";
import FullGallery from "../fullgallery/sections/FullGallery";

const Gallery = () => {
    const [activeGallery, setActiveGallery] = useState("Digital Caricatures");
    const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);

    const openFullGallery = () => {
        setIsFullGalleryOpen(true);
    };

    const closeFullGallery = () => {
        setIsFullGalleryOpen(false);
    };

    return (
        <section id="gallery" className="bg-soft-gray px-[5%] py-10 lg:py-14">
            <GalleryTopBar activeGallery={activeGallery} setActiveGallery={setActiveGallery} />

            {/* Conditionally render based on the selected Gallery section */}
            <div className="mt-2">
              { activeGallery === "Digital Caricatures" && <DigitalCaricatures /> }
              { activeGallery === "Illustrations" && <Illustrations /> }
              { activeGallery === "Live Caricatures" && <LiveCaricatures /> }
            </div>
            
            <GalleryButton onClick={openFullGallery} />
            
            {/* Full Gallery Modal */}
            <FullGallery 
                isOpen={isFullGalleryOpen} 
                onClose={closeFullGallery} 
            />
        </section>
    )
}

export default Gallery;