import { Home, Phone, Users, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FloatingNav = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Phone, label: "Call Us", path: "tel:+1234567890" },
    { icon: Users, label: "About Us", path: "/about" },
    { icon: MapPin, label: "Location", path: "/contact" },
    { icon: MessageCircle, label: "Chat", path: "/contact" },
  ];

  return (
    <div className="floating-nav">
      <div className="glass-nav flex items-center gap-4 px-6 py-3">
        {navItems.map((item) => (
          <div key={item.label} className="relative">
            <Link
              to={item.path}
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
              onMouseEnter={() => setActiveTooltip(item.label)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <item.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </Link>
            {activeTooltip === item.label && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-secondary rounded-lg text-xs text-foreground whitespace-nowrap animate-fade-in">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingNav;
