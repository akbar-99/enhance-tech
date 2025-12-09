import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import enhanceTechLogo from "@/assets/enhance-tech-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const services = [
    "Managed IT Services",
    "Information Security Solutions",
    "Server and Storage Solutions",
    "Network Solutions",
    "Software Solutions",
    "AWS Cloud Services",
    "Unified Communications",
    "Procurement Services"
  ];

  const products = [
    "Microsoft 365",
    "Google Workspace",
    "Cloud Solutions",
    "Security Tools"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-6xl mx-auto glass-nav flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={enhanceTechLogo} alt="Enhance Tech" className="h-10 w-auto" />
          <span className="text-xl font-bold text-foreground">Enhance</span>
          <span className="text-xl font-bold neon-text">Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            About Us
          </Link>
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm font-medium">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 glass-card p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {services.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm font-medium">
              Products <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 glass-card p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {products.map((product) => (
                <Link
                  key={product}
                  to="/products"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  {product}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blog" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Contact us
          </Link>
        </div>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/971567215617"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex w-10 h-10 rounded-full bg-secondary items-center justify-center hover:bg-primary/20 transition-colors"
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
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 glass-card p-6 mx-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
