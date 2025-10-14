import Navbar from "./components/navbar/Navbar";
import AboutAlosa from "./sections/about/About";
import Hero from "./sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutAlosa />
    </>
  )
}