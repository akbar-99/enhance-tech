import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingNav from "@/components/FloatingNav";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
const Index = () => {
  return <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <AboutSection className="border-secondary-foreground bg-white" />
      <ServicesSection className="bg-white" />
      <IndustriesSection className="bg-primary-foreground" />
      <TestimonialsSection className="bg-primary-foreground" />
      <FAQSection className="bg-primary-foreground" />
      <BlogSection className="bg-primary-foreground" />
      <CTASection />
      <Footer />
      <FloatingNav />
    </main>;
};
export default Index;