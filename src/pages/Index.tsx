import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DesignedInIndia from "@/components/DesignedInIndia";
import BenefitsSection from "@/components/BenefitsSection";
import DeviceShowcase from "@/components/DeviceShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DesignedInIndia />
      <BenefitsSection />
      <DeviceShowcase />
      <FeaturesSection />
      <ApplicationsSection />
      <ComparisonSection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
