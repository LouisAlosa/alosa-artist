"use client"
import Image from "next/image"

import illustration1 from "../../../assets/images/gallery/illustrations/illustration-left.jpg"
import illustration2 from "../../../assets/images/gallery/illustrations/illustration-middle-top.jpg"
import illustration3 from "../../../assets/images/gallery/illustrations/illustration-middle-bottom.jpg"
import illustration4 from "../../../assets/images/gallery/illustrations/illustration-right.jpg"

const Illustrations = () => {
  return (
    <section className="bg-pure-white w-full py-10 md:px-[5%]">
      {/* Consistent section width */}
      <div className="max-w-[1200px] mx-auto">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[640px] lg:h-[720px] lg:max-h-[75vh]">
          {/* LEFT COLUMN — Tall illustration */}
          <div className="relative w-full h-full">
            <Image
              src={illustration1}
              alt="Illustration - African Sunz"
              fill
              className="object-cover rounded-[16px]"
              priority
            />
          </div>

          {/* MIDDLE COLUMN — Two smaller stacked illustrations */}
          <div className="flex flex-col gap-6 h-full">
            <div className="relative w-full aspect-[4/3] flex-shrink-0">
              <Image
                src={illustration2}
                alt="Illustration - Sherhehe Haitaki Hasira"
                fill
                className="object-cover rounded-[16px]"
              />
            </div>

            <div className="relative w-full aspect-[4/3] flex-shrink-0">
              <Image
                src={illustration3}
                alt="Illustration - Local News Scene"
                fill
                className="object-cover rounded-[16px]"
              />
            </div>
          </div>

          {/* RIGHT COLUMN — Tall illustration */}
          <div className="relative w-full h-full">
            <Image
              src={illustration4}
              alt="Illustration - Soipan and the Tree Seed"
              fill
              className="object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Illustrations
