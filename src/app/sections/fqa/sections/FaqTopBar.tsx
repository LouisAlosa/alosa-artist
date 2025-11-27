"use client"

const FaqTopBar = () => {
    return (
        <section className="bg-pure-white w-full mb-4">
            {/* Frequently Asked Questions intro section */}
            <div className="flex flex-col items-center justify-center max-w-[800px] mx-auto text-center">
                {/* Heading */}
                <h2 className="font-fredoka font-[400] text-dark-charcoal text-[36px] mb-2">
                  Frequently Asked Questions
                </h2>

                {/* Divider */}
                <div className="bg-silver-gray w-[80px] h-[6px] rounded-sm mb-6" />

                {/* Description */}
                <p className="font-inter font-[400] text-medium-gray text-[18px] max-w-[640px]">
                  Everything you need to know about my caricature services
                </p>
            </div>
        </section>
    )
}

export default FaqTopBar;