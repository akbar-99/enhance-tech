import { useState } from "react";
import { Menu, X, ChevronDown, Monitor, Server, Network, Code, Cloud, Phone, ShoppingCart, Building, Anchor, Shield, Globe, Smartphone, Palette, Search, Share2, Target } from "lucide-react";
import { Link } from "react-router-dom";
import enhanceTechLogo from "@/assets/enhance-tech-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const itServices = [
    { name: "Managed IT Services", icon: Monitor },
    { name: "Server and Storage Solutions", icon: Server },
    { name: "Network Solutions", icon: Network },
    { name: "Software Solutions", icon: Code },
    { name: "AWS Cloud Services", icon: Cloud },
    { name: "Unified Communications", icon: Phone },
    { name: "Procurement Services", icon: ShoppingCart },
    { name: "Meeting Room Solutions", icon: Building },
    { name: "Warehouse Solutions", icon: Building },
    { name: "Maritime VSAT", icon: Anchor },
  ];

  const cyberSecurityServices = [
    { name: "Email Security", icon: Shield },
    { name: "Web Security", icon: Globe },
    { name: "End Point Security", icon: Smartphone },
  ];

  const digitalServices = [
    { name: "Branding", icon: Palette },
    { name: "Web Development", icon: Globe },
    { name: "SEO Services", icon: Search },
    { name: "Social Media Marketing", icon: Share2 },
    { name: "Google Ads", icon: Target },
  ];

  const products = [
    "Microsoft 365",
    "Google Workspace",
    "Cloud Solutions",
    "Security Tools"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo - Outside the pill */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={enhanceTechLogo} alt="Enhance Tech" className="h-10 w-auto" />
          <span className="text-xl font-bold text-foreground">Enhance</span>
          <span className="text-xl font-bold neon-text">Tech</span>
        </Link>

        {/* Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-border/30">
          <Link 
            to="/" 
            className="px-4 py-2 text-primary hover:text-primary transition-colors text-sm font-medium rounded-full hover:bg-primary/10"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium rounded-full hover:bg-primary/10"
          >
            About Us
          </Link>
          
          {/* Services Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-primary transition-colors text-sm font-medium rounded-full hover:bg-primary/10">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-300 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex gap-6 p-6 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl min-w-[700px]">
                {/* IT Services Column */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4">
                    <span className="text-primary">IT</span> Services
                  </h3>
                  <div className="space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to="/services"
                        className="flex items-center gap-3 py-2 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors group"
                      >
                        <service.icon className="w-4 h-4 text-primary/70 group-hover:text-primary" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Column - Cyber Security & Digital Services */}
                <div className="flex-1 space-y-6">
                  {/* Cyber Security Services */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      <span className="text-primary">Cyber Security</span> Services
                    </h3>
                    <div className="space-y-1">
                      {cyberSecurityServices.map((service) => (
                        <Link
                          key={service.name}
                          to="/services"
                          className="flex items-center gap-3 py-2 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors group"
                        >
                          <service.icon className="w-4 h-4 text-primary/70 group-hover:text-primary" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Digital Services */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      <span className="text-primary">Digital</span> Services
                    </h3>
                    <div className="space-y-1">
                      {digitalServices.map((service) => (
                        <Link
                          key={service.name}
                          to="/services"
                          className="flex items-center gap-3 py-2 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors group"
                        >
                          <service.icon className="w-4 h-4 text-primary/70 group-hover:text-primary" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium rounded-full hover:bg-primary/10">
              Products <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-48 p-3 rounded-xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {products.map((product) => (
                <Link
                  key={product}
                  to="/products"
                  className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                >
                  {product}
                </Link>
              ))}
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium rounded-full hover:bg-primary/10">
              Blog <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-48 p-3 rounded-xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <Link
                to="/blog"
                className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
              >
                All Posts
              </Link>
              <Link
                to="/blog"
                className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
              >
                Tech News
              </Link>
              <Link
                to="/blog"
                className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
              >
                Insights
              </Link>
            </div>
          </div>

          <Link 
            to="/contact" 
            className="px-4 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium rounded-full hover:bg-primary/10"
          >
            Contact us
          </Link>
        </nav>

        {/* WhatsApp Icon - Outside the pill */}
        <a
          href="https://wa.me/971567215617"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex w-11 h-11 rounded-full bg-secondary/80 backdrop-blur-md border border-border/30 items-center justify-center hover:bg-primary/20 transition-colors shrink-0"
        >
          <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 glass-card p-6 mx-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-primary font-medium">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            
            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
              >
                Services 
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l border-border/50">
                  <p className="text-sm text-primary font-medium pt-2">IT Services</p>
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to="/services"
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <p className="text-sm text-primary font-medium pt-2">Cyber Security</p>
                  {cyberSecurityServices.map((service) => (
                    <Link
                      key={service.name}
                      to="/services"
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <p className="text-sm text-primary font-medium pt-2">Digital Services</p>
                  {digitalServices.map((service) => (
                    <Link
                      key={service.name}
                      to="/services"
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact us</Link>
            
            {/* Mobile WhatsApp */}
            <a
              href="https://wa.me/971567215617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
