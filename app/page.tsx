import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Games from "@/components/Games";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Games />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
