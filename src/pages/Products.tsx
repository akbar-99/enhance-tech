import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import CTASection from "@/components/CTASection";
import { Check, ArrowRight, Sparkles, Cloud, Globe, Server, Shield, Network, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
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

  const cloudProducts = [
    {
      id: "microsoft-365",
      name: "Microsoft 365",
      description: "Complete productivity suite with Word, Excel, PowerPoint, Teams, and more.",
      icon: Cloud,
      features: [
        "Office Apps (Word, Excel, PowerPoint)",
        "Microsoft Teams for collaboration",
        "1TB OneDrive cloud storage",
        "Enterprise email with Outlook",
        "Advanced security features",
        "24/7 Microsoft support"
      ],
      popular: true
    },
    {
      id: "google-workspace",
      name: "Google Workspace",
      description: "Cloud-based productivity and collaboration tools for modern businesses.",
      icon: Globe,
      features: [
        "Gmail business email",
        "Google Drive storage",
        "Google Meet video conferencing",
        "Docs, Sheets, and Slides",
        "Admin console management",
        "Enhanced security controls"
      ],
      popular: false
    },
    {
      id: "aws-services",
      name: "AWS Services",
      description: "Scalable cloud infrastructure on Amazon Web Services platform.",
      icon: Cloud,
      features: [
        "EC2 compute instances",
        "S3 storage solutions",
        "Lambda serverless functions",
        "RDS databases",
        "CloudFront CDN",
        "24/7 monitoring"
      ],
      popular: false
    },
    {
      id: "azure-solutions",
      name: "Azure Solutions",
      description: "Microsoft Azure cloud services for enterprise applications.",
      icon: Cloud,
      features: [
        "Virtual machines",
        "Azure Active Directory",
        "Azure SQL Database",
        "App Services",
        "DevOps integration",
        "Enterprise support"
      ],
      popular: false
    }
  ];

  const securityProducts = [
    {
      id: "endpoint-protection",
      name: "Endpoint Protection",
      description: "Advanced endpoint security to protect all devices in your network.",
      icon: Shield,
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Automated response",
        "Central management"
      ]
    },
    {
      id: "firewall-solutions",
      name: "Firewall Solutions",
      description: "Enterprise-grade firewall protection for your network perimeter.",
      icon: Shield,
      features: [
        "Next-gen firewall",
        "Intrusion prevention",
        "VPN capabilities",
        "Traffic analysis"
      ]
    },
    {
      id: "backup-recovery",
      name: "Backup & Recovery",
      description: "Comprehensive data backup and disaster recovery solutions.",
      icon: Server,
      features: [
        "Automated backups",
        "Cloud replication",
        "Quick recovery",
        "Compliance support"
      ]
    }
  ];

  const hardwareProducts = [
    {
      id: "servers-storage",
      name: "Servers & Storage",
      description: "Enterprise-grade servers and storage systems from leading manufacturers.",
      icon: Server,
      features: [
        "Dell, HP, Lenovo servers",
        "SAN & NAS storage",
        "Hyperconverged systems",
        "Expert deployment"
      ]
    },
    {
      id: "networking-equipment",
      name: "Networking Equipment",
      description: "Professional networking hardware for reliable connectivity.",
      icon: Network,
      features: [
        "Cisco & Aruba switches",
        "Enterprise routers",
        "Wireless access points",
        "Network accessories"
      ]
    },
    {
      id: "workstations",
      name: "Workstations",
      description: "High-performance workstations for demanding professional applications.",
      icon: Monitor,
      features: [
        "Custom configurations",
        "Pre-installed software",
        "Warranty support",
        "Bulk discounts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] blob opacity-25"
            style={{ background: 'hsl(210 100% 50% / 0.3)' }}
          />
          <div 
            className="absolute top-1/3 right-1/3 w-[350px] h-[350px] blob opacity-20"
            style={{ background: 'hsl(200 100% 60% / 0.3)', animationDelay: '-5s' }}
          />
        </div>
        
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="gradient-text neon-text">Products</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Premium software and cloud solutions to power your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Solutions Section */}
      <section id="cloud-solutions" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Cloud</span> Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-children">
            {cloudProducts.map((product, index) => (
              <div 
                key={index}
                id={product.id}
                className={`glass-card-3d p-8 shine fade-up relative scroll-mt-24 ${product.popular ? 'animated-border' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium text-primary-foreground flex items-center gap-1 neon-glow" style={{ background: 'var(--gradient-button)' }}>
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-3">
                  <product.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.2)' }}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="btn-primary w-full flex items-center justify-center gap-2 text-primary-foreground"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tools Section */}
      <section id="security-tools" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Security</span> Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
            {securityProducts.map((product, index) => (
              <div 
                key={index}
                id={product.id}
                className="glass-card-3d p-6 shine fade-up scroll-mt-24"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <product.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <Check className="w-3 h-3 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Solutions Section */}
      <section id="hardware-solutions" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Hardware</span> Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
            {hardwareProducts.map((product, index) => (
              <div 
                key={index}
                id={product.id}
                className="glass-card-3d p-6 shine fade-up scroll-mt-24"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <product.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <Check className="w-3 h-3 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
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

export default Products;
