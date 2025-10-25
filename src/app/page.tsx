import Navbar from "./components/navbar/Navbar";
import AboutAlosa from "./sections/about/About";
import Footer from "./components/footer/Footer";
import Gallery from "./sections/gallery/Gallery";
import Hero from "./sections/hero/Hero";
import MyServices from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import Faq from "./sections/fqa/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutAlosa />
      <MyServices />
      <Gallery />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}