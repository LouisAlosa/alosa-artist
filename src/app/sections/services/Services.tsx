"use client"

import { useState } from "react";
import CaricatureFromPhotos from "./sections/CaricatureFromPhotos";
import EventCaricature from "./sections/EventCaricature";
import MyServicesTopBar from "./sections/ServicesTopBar";
import WeddingCards from "./sections/WeddingCards";

interface MyServicesProps {
  onServiceOrder?: (serviceType: string) => void
}

const MyServices = ({ onServiceOrder }: MyServicesProps) => {
  const [activeService, setActiveService] = useState("Event Caricatures")
  
  const handleOrderPackage = (packageType: string, serviceType: string) => {
    // This will be passed to parent component (ContactMe) to handle the preselection
    if (onServiceOrder) {
      onServiceOrder(serviceType)
    }
  }

  return (
    <section id="services" className="bg-pure-white px-[5%] py-10 lg:py-12">
      {/* Top Bar with buttons */}
      <MyServicesTopBar activeService={activeService} setActiveService={setActiveService} />

      {/* Conditionally render based on selected service */}
      <div className="mt-12">
        {activeService === "Event Caricatures" && <EventCaricature onOrderPackage={handleOrderPackage} />}
        {activeService === "Caricatures From Photos" && <CaricatureFromPhotos onOrderPackage={handleOrderPackage} />}
        {activeService === "Wedding eCards" && <WeddingCards onOrderPackage={handleOrderPackage} />}
      </div>
    </section>
  )
}

export default MyServices;