"use client";

import Image from "next/image";

// ✅ Replace with your actual imports later
import ill1 from "../../../assets/images/gallery/fullgallery/illustrations/alosa-arts-illustration-illustration1-nairobi-kenya.jpg";
import ill2 from "../../../assets/images/gallery/fullgallery/illustrations/alosa-arts-illustration-illustration2-nairobi-kenya.jpg";
import ill3 from "../../../assets/images/gallery/fullgallery/illustrations/alosa-arts-illustration-illustration3-nairobi-kenya.jpg";
import ill4 from "../../../assets/images/gallery/fullgallery/illustrations/alosa-arts-illustration-illustration4-nairobi-kenya.jpg";

const illustrationImages = [
  { id: 1, src: ill1, alt: "Illustration 1" },
  { id: 2, src: ill2, alt: "Illustration 2" },
  { id: 3, src: ill3, alt: "Illustration 3" },
  { id: 4, src: ill4, alt: "Illustration 4" },
];

const FullGalleryIllustrations = () => {
  return (
    <section className="w-full py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Illustrations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {illustrationImages.map(({ id, src, alt }) => (
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

export default FullGalleryIllustrations;