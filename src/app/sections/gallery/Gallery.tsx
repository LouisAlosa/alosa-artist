"use client"

import { useState } from "react";
import GalleryTopBar from "./sections/GalleryTopBar";

const Gallery = () => {
    const [activeGallery, setActiveGallery] = useState("Digital Caricatures")
    return (
        <section className="">
            <GalleryTopBar activeGallery={activeGallery} setActiveGallery={setActiveGallery} />
        </section>
    )
}

export default Gallery;