import { NavBar } from "@/components/NavBar";
import {
  HeroSection,
  AboutSection,
  ProblemSection,
  ServicesSection,
  ProductTeaserSection,
  ProcessSection,
  CTASection,
} from "@/components/sections";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <ServicesSection />
      <ProductTeaserSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
