import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import enhanceTechLogo from "@/assets/enhance-tech-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={enhanceTechLogo} alt="Enhance Tech" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Enhance Tech architects, secures, and manages enterprise-grade IT infrastructures. Our suite of services transforms your technology into a scalable, secure catalyst for market advancement.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-4 h-4 text-foreground" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-4 h-4 text-foreground" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-4 h-4 text-foreground" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-primary font-semibold mb-6 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products#microsoft-365" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Microsoft 365</Link></li>
              <li><Link to="/products#bitdefender" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Bitdefender</Link></li>
              <li><Link to="/products#hexnode" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Hexnode</Link></li>
              <li><Link to="/products#fortinet" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Fortinet</Link></li>
              <li><Link to="/products#cisco" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Cisco</Link></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-primary font-semibold mb-6 uppercase tracking-wider">Quick Link</h3>
            <ul className="space-y-3">
              <li><Link to="/get-quote" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Get IT Quote</Link></li>
              <li><Link to="/it-support-dubai" className="text-muted-foreground hover:text-foreground transition-colors text-sm">IT Support in Dubai</Link></li>
              <li><Link to="/it-support-sharjah" className="text-muted-foreground hover:text-foreground transition-colors text-sm">IT Support in Sharjah</Link></li>
              <li><Link to="/it-support-abu-dhabi" className="text-muted-foreground hover:text-foreground transition-colors text-sm">IT Support in Abu Dhabi</Link></li>
              <li><Link to="/it-support-qatar" className="text-muted-foreground hover:text-foreground transition-colors text-sm">IT Support in Qatar</Link></li>
              <li><Link to="/it-consulting-dubai" className="text-muted-foreground hover:text-foreground transition-colors text-sm">IT Consulting in Dubai</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary font-semibold mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-semibold mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm" href="tel:+971567215617">+971 567 215 617</a>
              </li>
              <li>
                <a href="mailto:info@itenhance.tech" className="text-muted-foreground hover:text-foreground transition-colors text-sm">info@itenhance.tech</a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ENHANCE TECH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
