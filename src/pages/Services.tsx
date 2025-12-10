import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import CTASection from "@/components/CTASection";
import { Server, Shield, Database, Network, Code, Cloud, Phone, ShoppingCart, Building, Anchor, Globe, Smartphone, Palette, Search, Share2, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const itServices = [
    {
      id: "managed-it",
      icon: Server,
      title: "Managed IT Services",
      description: "Complete IT management and support for your business operations. We handle everything from helpdesk to infrastructure management.",
      features: ["24/7 Support", "Remote Monitoring", "Proactive Maintenance", "IT Strategy Consulting"]
    },
    {
      id: "server-storage",
      icon: Database,
      title: "Server & Storage Solutions",
      description: "Enterprise-grade server and storage solutions designed for performance, reliability, and scalability.",
      features: ["Server Setup", "Data Migration", "Backup Solutions", "Disaster Recovery"]
    },
    {
      id: "network",
      icon: Network,
      title: "Network Solutions",
      description: "Design, implement, and manage robust network infrastructure that keeps your business connected.",
      features: ["Network Design", "WiFi Solutions", "VPN Setup", "Network Security"]
    },
    {
      id: "software",
      icon: Code,
      title: "Software Solutions",
      description: "Custom software development and implementation services tailored to your business needs.",
      features: ["Custom Development", "Integration Services", "API Development", "Maintenance"]
    },
    {
      id: "aws-cloud",
      icon: Cloud,
      title: "AWS Cloud Services",
      description: "Leverage the power of AWS cloud computing for scalable, secure, and cost-effective infrastructure.",
      features: ["Cloud Migration", "AWS Consulting", "Cost Optimization", "DevOps"]
    },
    {
      id: "unified-communications",
      icon: Phone,
      title: "Unified Communications",
      description: "Integrate your communication channels for seamless collaboration across your organization.",
      features: ["VoIP Solutions", "Video Conferencing", "Collaboration Tools", "Call Center"]
    },
    {
      id: "procurement",
      icon: ShoppingCart,
      title: "Procurement Services",
      description: "Get the best IT hardware and software at competitive prices with our procurement services.",
      features: ["Hardware Sourcing", "License Management", "Vendor Relations", "Asset Management"]
    },
    {
      id: "meeting-room",
      icon: Building,
      title: "Meeting Room Solutions",
      description: "Transform your meeting spaces with state-of-the-art audio-visual and conferencing solutions.",
      features: ["AV Integration", "Smart Displays", "Room Booking Systems", "Video Conferencing Setup"]
    },
    {
      id: "warehouse",
      icon: Building,
      title: "Warehouse Solutions",
      description: "Optimize your warehouse operations with our comprehensive IT infrastructure solutions.",
      features: ["Inventory Systems", "Barcode Solutions", "WMS Integration", "IoT Sensors"]
    },
    {
      id: "maritime-vsat",
      icon: Anchor,
      title: "Maritime VSAT",
      description: "Reliable satellite communication solutions for maritime operations and vessels.",
      features: ["Satellite Internet", "Voice Solutions", "Fleet Management", "24/7 Support"]
    }
  ];

  const cyberSecurityServices = [
    {
      id: "email-security",
      icon: Shield,
      title: "Email Security",
      description: "Protect your organization from email-based threats with advanced filtering and encryption.",
      features: ["Spam Filtering", "Phishing Protection", "Email Encryption", "DLP"]
    },
    {
      id: "web-security",
      icon: Globe,
      title: "Web Security",
      description: "Secure your web presence and protect users from malicious websites and attacks.",
      features: ["Web Filtering", "SSL Certificates", "WAF", "DDoS Protection"]
    },
    {
      id: "endpoint-security",
      icon: Smartphone,
      title: "End Point Security",
      description: "Comprehensive endpoint protection for all devices in your organization.",
      features: ["Antivirus", "EDR Solutions", "Device Management", "Zero Trust"]
    }
  ];

  const digitalServices = [
    {
      id: "branding",
      icon: Palette,
      title: "Branding",
      description: "Create a powerful brand identity that resonates with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      id: "web-development",
      icon: Globe,
      title: "Web Development",
      description: "Custom website development with modern technologies and responsive design.",
      features: ["Custom Websites", "E-commerce", "CMS Development", "Web Apps"]
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO Services",
      description: "Improve your online visibility and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics"]
    },
    {
      id: "social-media",
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand presence on social platforms.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"]
    },
    {
      id: "google-ads",
      icon: Target,
      title: "Google Ads",
      description: "Drive targeted traffic and conversions with strategic Google advertising campaigns.",
      features: ["Search Ads", "Display Ads", "Remarketing", "Performance Tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 right-1/4 w-[450px] h-[450px] blob opacity-25"
            style={{ background: 'hsl(210 100% 50% / 0.3)' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] blob opacity-20"
            style={{ background: 'hsl(200 100% 60% / 0.3)', animationDelay: '-3s' }}
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

      {/* IT Services Section */}
      <section id="it-services" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">IT</span> Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-children">
            {itServices.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className="service-card p-8 shine fade-up scroll-mt-24"
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
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ boxShadow: '0 0 8px hsl(var(--primary) / 0.8)' }} />
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

      {/* Cyber Security Section */}
      <section id="cyber-security" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Cyber Security</span> Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children">
            {cyberSecurityServices.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className="service-card p-8 shine fade-up scroll-mt-24"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="icon-circle mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section id="digital-services" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Digital</span> Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children">
            {digitalServices.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className="service-card p-8 shine fade-up scroll-mt-24"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="icon-circle mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
