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
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-carrot-orange"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-carrot-orange"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
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
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-carrot-orange"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
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