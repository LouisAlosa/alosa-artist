"use client"

import ContactMeLeft from "./sections/ContactMeLeft";
import ContactMeRight from "./sections/ContactMeRight";

const ContactMe = () => {
    return (
        <section className="px-[5%] lg:px-[8%] py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                    {/* Left Section - Takes half width on desktop */}
                    <div className="flex-1 lg:max-w-[50%]">
                        <ContactMeLeft />
                    </div>
                    
                    {/* Right Section - Takes half width on desktop */}
                    <div className="flex-1 lg:max-w-[50%]">
                        <ContactMeRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;