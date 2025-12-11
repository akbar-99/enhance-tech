import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Home, Phone, Users, MapPin, MessageSquare, 
  Lightbulb, Target, TrendingUp, BarChart3, Layers, Cog, Rocket, Award,
  CheckCircle, Star
} from "lucide-react";
import techCamelMascot from "@/assets/tech-camel-mascot.png";

const ITConsultingDubai = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request Submitted!", description: "We'll contact you shortly." });
    setFormData({ name: "", email: "", mobile: "" });
  };

  const tabs = [
    { icon: Home, label: "Overview" },
    { icon: Phone, label: "Contact" },
    { icon: Users, label: "Team" },
    { icon: MapPin, label: "Location" },
    { icon: MessageSquare, label: "Support" },
  ];

  const services = [
    { icon: Lightbulb, title: "Strategic IT Planning", description: "Align your IT strategy with business objectives for sustainable growth.", link: "/services#it-consulting" },
    { icon: Target, title: "Digital Transformation", description: "Guide your journey to digital excellence with proven methodologies.", link: "/services#it-consulting" },
    { icon: TrendingUp, title: "Technology Assessment", description: "Comprehensive evaluation and optimization of your IT infrastructure.", link: "/services#it-consulting" },
    { icon: BarChart3, title: "IT Roadmap Development", description: "Create actionable roadmaps for technology implementation.", link: "/services#it-consulting" },
    { icon: Layers, title: "Architecture Design", description: "Design scalable and secure IT architectures for your business.", link: "/services#it-consulting" },
    { icon: Cog, title: "Process Optimization", description: "Streamline IT processes for improved efficiency and productivity.", link: "/services#it-consulting" },
    { icon: Rocket, title: "Innovation Consulting", description: "Leverage emerging technologies to drive competitive advantage.", link: "/services#it-consulting" },
    { icon: Award, title: "Compliance Advisory", description: "Ensure your IT systems meet industry standards and regulations.", link: "/services#it-consulting" },
  ];

  const features = [
    { title: "Expert Consultants", description: "Our team of seasoned IT consultants brings decades of combined experience across diverse industries and technologies." },
    { title: "Proven Methodology", description: "We follow industry-proven frameworks and methodologies to deliver consistent, high-quality results for our clients." },
    { title: "Business-First Approach", description: "We focus on your business outcomes first, ensuring technology investments deliver measurable ROI." },
  ];

  const testimonials = [
    { name: "Faisal Al Maktoum", role: "CEO, Dubai Ventures", rating: 5, text: "Their strategic IT consulting transformed our operations. Exceptional expertise and professionalism." },
    { name: "Jennifer Smith", role: "CTO, Global Trading Co", rating: 5, text: "The IT roadmap they developed has guided our digital transformation journey perfectly." },
    { name: "Ahmed Hassan", role: "Director, Tech Innovations", rating: 5, text: "Brilliant consultants who understand both technology and business. Highly recommended." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT Consulting In <span className="neon-text">Dubai</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Strategic IT consulting services to help Dubai businesses leverage technology for growth. 
              Our expert consultants provide actionable insights and roadmaps for digital success.
            </p>
          </div>

          {/* Contact Form with Background */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
            <img src={techCamelMascot} alt="IT Consulting" className="absolute right-0 top-0 h-full w-1/2 object-contain opacity-30" />
            <div className="relative glass-card-3d p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Need Expert IT Consulting In Dubai?</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Input placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-secondary/50 border-border" />
                  <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-secondary/50 border-border" />
                  <Input placeholder="Mobile No" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="bg-secondary/50 border-border" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit</Button>
              </form>
            </div>
          </div>

          {/* Tab Icons */}
          <div className="flex justify-center mt-8">
            <div className="glass-card-3d rounded-full px-6 py-3 flex gap-4">
              {tabs.map((tab, index) => (
                <button key={index} onClick={() => setActiveTab(index)} className={`p-3 rounded-full transition-all ${activeTab === index ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>
                  <tab.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Leading <Link to="/" className="text-primary hover:underline">IT Consulting in Dubai</Link>. 
              We help businesses navigate the complex technology landscape with strategic guidance and expert advice. 
              Our consultants have worked with enterprises, startups, and government entities across the UAE, delivering 
              transformational IT strategies that drive business value. Partner with us to unlock the full potential of 
              technology for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-wider mb-2">Consulting Services</p>
            <h2 className="text-3xl md:text-4xl font-bold">Strategic IT Consulting Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="glass-card-3d p-6 rounded-xl h-full hover:border-primary/50 transition-all">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold">Dubai's Trusted IT Consultants</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card-3d p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card-3d rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Business with Expert IT Consulting</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to align your technology with your business goals? Get in touch with our consultants today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote"><Button className="bg-primary hover:bg-primary/90 px-8">Get a Quote</Button></Link>
              <Link to="/contact"><Button variant="outline" className="px-8">Contact Us</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>
  );
};

export default ITConsultingDubai;
