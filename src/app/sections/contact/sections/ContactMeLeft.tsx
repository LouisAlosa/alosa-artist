"use client"

const ContactMeLeft = () => {
  return (
    <section className="bg-pure-white w-full mb-6 text-left">
      {/* Contact me intro section */}
      <div className="flex flex-col lg:items-start justify-center max-w-[800px] mx-auto">
        {/* Heading */}
        <h2 className="font-fredoka font-[400] text-dark-charcoal text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-3">
          Let's Get Sketching!
        </h2>

        {/* Divider */}
        <div className="bg-silver-gray w-[60px] h-[4px] rounded-sm mb-5" />

        {/* Description */}
        <p className="font-inter font-[400] text-medium-gray text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-[640px]">
          Ready to commission a caricature or book me for your event? Fill out
          the form and I'll get back to you within 24 hours.
        </p>

        {/* Contact Details Section */}
        <div className="w-full max-w-[360px] text-left">
          <h3 className="font-inter font-[600] text-dark-charcoal text-[18px] lg:text-[20px] mb-4">
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
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.96 1.54l.59 2.35a2 2 0 01-.45 1.78l-1.27 1.52a11.05 11.05 0 005.05 5.05l1.52-1.27a2 2 0 011.78-.45l2.35.59a2 2 0 011.54 1.96V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V5z"
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
                    d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5 9 6.344 9 8s1.344 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s8-7.582 8-14a8 8 0 10-16 0c0 6.418 8 14 8 14z"
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