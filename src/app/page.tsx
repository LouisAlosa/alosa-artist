"use client"

import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import AboutAlosa from "./sections/about/About";
import Footer from "./components/footer/Footer";
import Gallery from "./sections/gallery/Gallery";
import Hero from "./sections/hero/Hero";
import MyServices from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import Faq from "./sections/fqa/Faq";
import ContactMe from "./sections/contact/Contact";

export default function Home() {
  const [preselectedService, setPreselectedService] = useState("")

  const handleServiceOrder = (serviceType: string) => {
    setPreselectedService(serviceType)
  }
  
  return (
    <>
      <Navbar />
      <Hero />
      <AboutAlosa />
      <MyServices onServiceOrder={handleServiceOrder} />
      <Gallery />
      <Testimonials />
      <ContactMe preselectedOption={preselectedService} />
      <Faq />
      <Footer />
    </>
  )
}