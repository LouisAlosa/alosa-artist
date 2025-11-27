"use client"

import Faqs from "./sections/Faqs";
import FaqTopBar from "./sections/FaqTopBar";

const Faq = () => {
    return (
        <section className="px-[5%] py-12 w-full">
            <FaqTopBar />
            <Faqs />
        </section>
    )
}

export default Faq;