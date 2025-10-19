import Navbar from "./components/navbar/Navbar";
import AboutAlosa from "./sections/about/About";
import Gallery from "./sections/gallery/Gallery";
import Hero from "./sections/hero/Hero";
import MyServices from "./sections/services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutAlosa />
      <MyServices />
      <Gallery />
    </>
  )
}