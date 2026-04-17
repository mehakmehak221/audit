import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCloud } from "./components/LogoCloud";
import { StatsShowcase } from "./components/StatsShowcase";
import { ServicesAuditProcess } from "./components/ServicesAuditProcess";
import { CaseStudiesShowcase } from "./components/CaseStudiesShowcase";
import { PricingCTA } from "./components/PricingCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-gray-100 antialiased">
      <Navbar />
      <Hero />
      <LogoCloud />
      <StatsShowcase />
      <ServicesAuditProcess />
      <CaseStudiesShowcase />
      <PricingCTA />
      <Footer />
    </div>
  );
}
