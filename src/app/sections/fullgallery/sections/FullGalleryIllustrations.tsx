"use client"

import Image from "next/image"

// Import yours later — placeholder structure
import ill1 from "../../../assets/images/gallery/fullgallery/illustrations/illustration1.jpg"
import ill2 from "../../../assets/images/gallery/fullgallery/illustrations/illustration2.jpg"
import ill3 from "../../../assets/images/gallery/fullgallery/illustrations/illustration3.jpg"
import ill4 from "../../../assets/images/gallery/fullgallery/illustrations/illustration4.jpg"


const illustrationImages = [
  { id: 1, src: ill1, alt: "Illustration sample 1" },
  { id: 2, src: ill2, alt: "Illustration sample 2" },
  { id: 3, src: ill3, alt: "Illustration sample 3" },
  { id: 4, src: ill4, alt: "Illustration sample 4" },
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