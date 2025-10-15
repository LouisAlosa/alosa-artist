"use client"

const MyServicesTopBar = () => {
    return (
        <div className="bg-pure-white w-full text-center">
            {/* Services intro section */}
            <div className="my-4 flex items-center flex-col justify-center">
                <h2 className="font-fredoka font-[400] text-dark-charcoal text-[36px] mb-4">My Services</h2>
                <div className="bg-silver-gray w-[80px] h-[6px] rounded-sm mb-6" />

                <p className="font-inter font-[400] text-medium-gray text-[18px]">
                    Looking for that unique gift? Something extraordinary? Whether it's for a birthday, a retirement, baby shower, friendship or a 'just because'; caricature as a gift will always win.
                </p>
            </div>
        </div>
    )
}

export default MyServicesTopBar;