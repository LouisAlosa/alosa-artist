"use client"

import Image from "next/image"

// Import yours later — placeholder structure
import ill1 from "../../../assets/images/gallery/illustrations/ill1.jpg"
import ill2 from "../../../assets/images/gallery/illustrations/ill2.jpg"
import ill3 from "../../../assets/images/gallery/illustrations/ill3.jpg"
import ill4 from "../../../assets/images/gallery/illustrations/ill4.jpg"
import ill5 from "../../../assets/images/gallery/illustrations/ill5.jpg"
import ill6 from "../../../assets/images/gallery/illustrations/ill6.jpg"
import ill7 from "../../../assets/images/gallery/illustrations/ill7.jpg"
import ill8 from "../../../assets/images/gallery/illustrations/ill8.jpg"

const illustrationImages = [
  { id: 1, src: ill1, alt: "Illustration sample 1" },
  { id: 2, src: ill2, alt: "Illustration sample 2" },
  { id: 3, src: ill3, alt: "Illustration sample 3" },
  { id: 4, src: ill4, alt: "Illustration sample 4" },
  { id: 5, src: ill5, alt: "Illustration sample 5" },
  { id: 6, src: ill6, alt: "Illustration sample 6" },
  { id: 7, src: ill7, alt: "Illustration sample 7" },
  { id: 8, src: ill8, alt: "Illustration sample 8" },
]

const FullGalleryIllustrations = () => {
  return (
    <section className="w-full py-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Illustrations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {illustrationImages.map(({ id, src, alt }) => (
          <div key={id} className="relative w-full h-[280px] md:h-[300px] rounded-lg overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FullGalleryIllustrations;