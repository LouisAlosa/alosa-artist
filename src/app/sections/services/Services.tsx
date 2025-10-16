"use client"

import EventCaricature from "./sections/EventCaricature";
import MyServicesTopBar from "./sections/ServicesTopBar";

const MyServices = () => {
    return (
        <section className="bg-pure-white px-[5%] py-16">
          <MyServicesTopBar />
          <EventCaricature />
        </section>
    )
}

export default MyServices;