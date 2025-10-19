"use client"

import { useState } from "react";
import GalleryTopBar from "./sections/GalleryTopBar";
import DigitalCaricatures from "./sections/DigitalCaricatures";

const Gallery = () => {
    const [activeGallery, setActiveGallery] = useState("Digital Caricatures")
    return (
        <section className="bg-pure-white px-[5%] py-16">
            <GalleryTopBar activeGallery={activeGallery} setActiveGallery={setActiveGallery} />

            {/* Gallery section toggled */}
            <DigitalCaricatures />
        </section>
    )
}

export default Gallery;