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
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <Footer />
      <FloatingNav />
    </main>;
};
export default Index;