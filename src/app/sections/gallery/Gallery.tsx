"use client"

import { useState } from "react";
import GalleryTopBar from "./sections/GalleryTopBar";
import DigitalCaricatures from "./sections/DigitalCaricatures";
import LiveCaricatures from "./sections/LiveCaricatures";
import Illustrations from "./sections/Illustrations";

const Gallery = () => {
    const [activeGallery, setActiveGallery] = useState("Digital Caricatures")
    return (
        <section className="bg-pure-white px-[5%] py-16">
            <GalleryTopBar activeGallery={activeGallery} setActiveGallery={setActiveGallery} />

            {/* Conditionally render based on the selected Gallery section */}
            <div className="mt-2">
              { activeGallery === "Digital Caricatures" && <DigitalCaricatures /> }
              { activeGallery === "Illustrations" && <Illustrations /> }
              { activeGallery === "Live Caricatures" && <LiveCaricatures /> }
            </div>
        </section>
    )
}

export default Gallery;