"use client"

import ContactMeLeft from "./sections/ContactMeLeft";
import ContactMeRight from "./sections/ContactMeRight";

interface ContactMeProps {
  preselectedOption?: string;
}

const ContactMe = ({ preselectedOption = "" }: ContactMeProps) => {
    return (
        <section id="contact" className="bg-soft-gray px-[5%] lg:px-[8%] py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                    {/* Left Section - Takes half width on desktop */}
                    <div className="flex-1 lg:max-w-[50%]">
                        <ContactMeLeft />
                    </div>
                    
                    {/* Right Section - Takes half width on desktop */}
                    <div className="flex-1 lg:max-w-[50%]">
                        <ContactMeRight preselectedOption={preselectedOption} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;