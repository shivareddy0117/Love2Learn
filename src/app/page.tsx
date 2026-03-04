import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import FeeStructure from "@/components/FeeStructure";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Features />
      <Gallery />
      <FeeStructure />
      <Testimonials />
      <CTABanner />
      <Contact />
    </>
  );
}
