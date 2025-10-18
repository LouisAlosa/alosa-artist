"use client"

import { useState } from "react";
import CaricatureFromPhotos from "./sections/CaricatureFromPhotos";
import EventCaricature from "./sections/EventCaricature";
import MyServicesTopBar from "./sections/ServicesTopBar";
import WeddingCards from "./sections/WeddingCards";

const MyServices = () => {
  const [ activeService, setActiveService ] = useState("Event Caricatures")
    return (
        <section className="bg-pure-white px-[5%] py-16">
          {/* Top Bar with buttons */}
          <MyServicesTopBar activeService={activeService} setActiveService={setActiveService} />

          {/* Conditionally render based on selected service */}
          <div className="mt-12">
            {activeService === "Event Caricatures" && <EventCaricature />}
            {activeService === "Caricatures From Photos" && <CaricatureFromPhotos />}
            {activeService === "Wedding eCards" && <WeddingCards />}
          </div>
        </section>
    )
}

export default MyServices;