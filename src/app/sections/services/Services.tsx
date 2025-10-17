"use client"

import EventCaricature from "./sections/EventCaricature";
import MyServicesTopBar from "./sections/ServicesTopBar";
import WeddingCards from "./sections/WeddingCards";

const MyServices = () => {
    return (
        <section className="bg-pure-white px-[5%] py-16">
          <MyServicesTopBar />
          {/* <EventCaricature /> */}
          <WeddingCards />
        </section>
    )
}

export default MyServices;