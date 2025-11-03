"use client"

import Image from "next/image"

// Import for my images
import live1 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures1.jpg"
import live2 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures2.jpg"
import live3 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures3.jpg"
import live4 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures4.jpg"
import live5 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures5.jpg"
import live6 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures6.jpg"
import live7 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures7.jpg"
import live8 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures8.jpg"
import live9 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures9.jpg"
import live10 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures10.jpg"
import live11 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures11.jpg"
import live12 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures12.jpg"

const liveImages = [
  { id: 1, src: live1, alt: "Live caricature drawing" },
  { id: 2, src: live2, alt: "Live caricature event" },
  { id: 3, src: live3, alt: "Artist drawing live" },
  { id: 4, src: live4, alt: "Live caricature sample" },
  { id: 5, src: live5, alt: "Guest caricature" },
  { id: 6, src: live6, alt: "Event caricature booth" },
  { id: 7, src: live7, alt: "Corporate caricature event" },
  { id: 8, src: live8, alt: "Wedding caricature live" },
  { id: 9, src: live9, alt: "Guest caricature" },
  { id: 10, src: live10, alt: "Event caricature booth" },
  { id: 11, src: live11, alt: "Corporate caricature event" },
  { id: 12, src: live12, alt: "Wedding caricature live" },
]

 const FullGalleryLiveCaricatures = () => {
  return (
    <section className="w-full py-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Live Caricatures</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {liveImages.map(({ id, src, alt }) => (
          <div key={id} className="relative w-full h-[280px] md:h-[300px] rounded-lg overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FullGalleryLiveCaricatures;