"use client"

const ContactMeLeft = () => {
  return (
    <section className="bg-soft-gray w-full mb-6 text-left">
      {/* Contact me intro section */}
      <div className="flex flex-col lg:items-start justify-center max-w-[800px] mx-auto">
        {/* Heading */}
        <h2 className="font-fredoka font-[400] text-dark-charcoal text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-2">
          Let&apos;s Get Sketching!
        </h2>

        {/* Divider */}
        <div className="bg-silver-gray w-[60px] h-[4px] rounded-sm mb-5" />

        {/* Description */}
        <p className="font-inter font-[400] text-medium-gray text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-[640px]">
          Ready to commission a caricature or book me for your event? Fill out
          the form and I&apos;ll get back to you within 24 hours.
        </p>

        {/* Contact Details Section */}
        <div className="w-full max-w-[360px] text-left">
          <h3 className="font-inter font-[400] text-dark-charcoal text-[18px] lg:text-[20px] mb-4">
            Contact Details
          </h3>

          <ul className="space-y-4">
            {/* Email */}
            <li className="flex items-center gap-3">
              <div className="bg-light-gray p-3 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-carrot-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-inter text-medium-gray text-[15px] lg:text-[16px]">
                alosa.louis@gmail.com
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <div className="bg-light-gray p-3 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-carrot-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="font-inter text-medium-gray text-[15px] lg:text-[16px]">
                +254721787390
              </span>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3">
              <div className="bg-light-gray p-3 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-carrot-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="font-inter text-medium-gray text-[15px] lg:text-[16px]">
                Nairobi City, Kenya
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default ContactMeLeft;