import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuSection />
      <Projects />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
