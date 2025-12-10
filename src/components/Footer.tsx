import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import enhanceTechLogo from "@/assets/enhance-tech-logo.png";
const Footer = () => {
  return <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={enhanceTechLogo} alt="Enhance Tech" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-foreground">Enhance</span>
              <span className="text-2xl font-bold neon-text">Tech</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Your trusted partner for comprehensive IT solutions and services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Managed IT Services</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Network Solutions</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">123 Business District, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a className="text-muted-foreground hover:text-primary transition-colors text-sm" href="tel:+971567215617">+971 567215617   </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@enhancetech.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">info@itenhance.tech</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Enhance Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;