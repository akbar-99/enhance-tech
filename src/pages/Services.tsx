import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import CTASection from "@/components/CTASection";
import { Server, Shield, Database, Network, Code, Cloud, Phone, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Managed IT Services",
      description: "Complete IT management and support for your business operations. We handle everything from helpdesk to infrastructure management.",
      features: ["24/7 Support", "Remote Monitoring", "Proactive Maintenance", "IT Strategy Consulting"]
    },
    {
      icon: Shield,
      title: "Information Security",
      description: "Protect your business from cyber threats with our comprehensive security solutions and compliance services.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]
    },
    {
      icon: Database,
      title: "Server & Storage",
      description: "Enterprise-grade server and storage solutions designed for performance, reliability, and scalability.",
      features: ["Server Setup", "Data Migration", "Backup Solutions", "Disaster Recovery"]
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "Design, implement, and manage robust network infrastructure that keeps your business connected.",
      features: ["Network Design", "WiFi Solutions", "VPN Setup", "Network Security"]
    },
    {
      icon: Code,
      title: "Software Solutions",
      description: "Custom software development and implementation services tailored to your business needs.",
      features: ["Custom Development", "Integration Services", "API Development", "Maintenance"]
    },
    {
      icon: Cloud,
      title: "AWS Cloud Services",
      description: "Leverage the power of AWS cloud computing for scalable, secure, and cost-effective infrastructure.",
      features: ["Cloud Migration", "AWS Consulting", "Cost Optimization", "DevOps"]
    },
    {
      icon: Phone,
      title: "Unified Communications",
      description: "Integrate your communication channels for seamless collaboration across your organization.",
      features: ["VoIP Solutions", "Video Conferencing", "Collaboration Tools", "Call Center"]
    },
    {
      icon: ShoppingCart,
      title: "Procurement Services",
      description: "Get the best IT hardware and software at competitive prices with our procurement services.",
      features: ["Hardware Sourcing", "License Management", "Vendor Relations", "Asset Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 right-1/4 w-[450px] h-[450px] blob opacity-25"
            style={{ background: 'hsl(280 80% 55% / 0.3)' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] blob opacity-20"
            style={{ background: 'hsl(300 100% 65% / 0.3)', animationDelay: '-3s' }}
          />
        </div>
        
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="gradient-text neon-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Comprehensive IT solutions designed to streamline your operations and accelerate your digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-children">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card p-8 shine fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="icon-circle shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ boxShadow: '0 0 8px hsl(300 100% 65% / 0.8)' }} />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium group"
                    >
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <FloatingNav />
    </div>
  );
};

export default Services;
