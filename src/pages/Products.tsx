import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import CTASection from "@/components/CTASection";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "Microsoft 365",
      description: "Complete productivity suite with Word, Excel, PowerPoint, Teams, and more.",
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
      name: "Google Workspace",
      description: "Cloud-based productivity and collaboration tools for modern businesses.",
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
      name: "Cloud Solutions",
      description: "Scalable cloud infrastructure on AWS, Azure, or Google Cloud Platform.",
      features: [
        "Cloud migration services",
        "Multi-cloud management",
        "Auto-scaling infrastructure",
        "Cost optimization",
        "Security and compliance",
        "24/7 monitoring"
      ],
      popular: false
    },
    {
      name: "Security Tools",
      description: "Enterprise-grade security solutions to protect your business.",
      features: [
        "Endpoint protection",
        "Firewall solutions",
        "Email security",
        "SIEM solutions",
        "Vulnerability scanning",
        "Security training"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.3) 0%, transparent 70%)' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="gradient-text">Products</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Premium software and cloud solutions to power your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`glass-card p-8 hover:scale-[1.02] transition-all duration-300 relative ${product.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
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
