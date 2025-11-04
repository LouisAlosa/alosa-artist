"use client";

import Image from "next/image";

// ✅ Replace with your actual imports later
import live1 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures1.jpg";
import live2 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures2.jpg";
import live3 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures3.jpg";
import live4 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures4.jpg";
import live5 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures5.jpg";
import live6 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures6.jpg";
import live7 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures7.jpg";
import live8 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures8.jpg";
import live9 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures9.jpg";
import live10 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures10.jpg";
import live11 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures11.jpg";
import live12 from "../../../assets/images/gallery/fullgallery/livecaricatures/livecaricatures12.jpg";

const liveImages = [
  { id: 1, src: live1, alt: "Live caricature 1" },
  { id: 2, src: live2, alt: "Live caricature 2" },
  { id: 3, src: live3, alt: "Live caricature 3" },
  { id: 4, src: live4, alt: "Live caricature 4" },
  { id: 5, src: live5, alt: "Live caricature 5" },
  { id: 6, src: live6, alt: "Live caricature 6" },
  { id: 7, src: live7, alt: "Live caricature 7" },
  { id: 8, src: live8, alt: "Live caricature 8" },
  { id: 9, src: live9, alt: "Live caricature 9" },
  { id: 10, src: live10, alt: "Live caricature 10" },
  { id: 11, src: live11, alt: "Live caricature 11" },
  { id: 12, src: live12, alt: "Live caricature 12" },
];

const FullGalleryLiveCaricatures = () => {
  return (
    <section className="w-full py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Live Caricatures</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {liveImages.map(({ id, src, alt }) => (
          <div
            key={id}
            className="relative w-full h-[300px] md:h-[320px] rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullGalleryLiveCaricatures;