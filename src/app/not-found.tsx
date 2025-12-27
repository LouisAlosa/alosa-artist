import Link from "next/link";
import Image from "next/image";
import NotFoundIllustration from "./assets/images/about/alosa-arts-caricature-main-alosa-nairobi-kenya.jpg";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 py-10 sm:py-12">
      <section className="w-full max-w-5xl text-center">
        {/* 404 Visual Section */}
        <div
          className="
            flex items-center justify-center
            mb-10 sm:mb-12
            select-none
            gap-2 sm:gap-4 md:gap-6
          "
        >
          {/* Left 4 */}
          <span
            className="
              text-[96px]
              sm:text-[140px]
              md:text-[200px]
              lg:text-[280px]
              font-bold
              text-[#424242]
              leading-none
            "
          >
            4
          </span>

          {/* Center Illustration with Ring */}
          <div className="relative flex items-center justify-center z-10">
            {/* Yellow Ring */}
            <div
              className="
                w-[88px] h-[88px]
                sm:w-[120px] sm:h-[120px]
                md:w-[160px] md:h-[160px]
                lg:w-[240px] lg:h-[240px]
                rounded-full
                border-[3px]
                md:border-[5px]
                lg:border-[6px]
                border-[#FBD100]
                bg-white
                flex items-center justify-center
                overflow-hidden
              "
            >
              {/* Image wrapper (slight zoom like reference) */}
              <div className="relative w-[110%] h-[110%]">
                <Image
                  src={NotFoundIllustration}
                  alt="Lost artist illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right 4 */}
          <span
            className="
              text-[96px]
              sm:text-[140px]
              md:text-[200px]
              lg:text-[280px]
              font-bold
              text-[#424242]
              leading-none
            "
          >
            4
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-3 sm:space-y-4 px-2 sm:px-4">
          <h1
            className="
              text-xl
              sm:text-2xl
              md:text-4xl
              font-bold
              text-[#333333]
              tracking-tight
            "
          >
            Even artists get lost sometimes
          </h1>

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-gray-500
              max-w-xl
              mx-auto
            "
          >
            Looks like this page stepped out for inspiration and forgot to come back
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              rounded-lg
              bg-[#E67E22]
              text-white
              px-6 py-3
              sm:px-8 sm:py-4
              text-sm sm:text-base
              font-medium
              hover:bg-[#d35400]
              transition-colors
              shadow-sm
            "
          >
            Back Before It Gets Awkward
          </Link>
        </div>
      </section>
    </main>
  );
}
