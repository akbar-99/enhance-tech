import { Home, Phone, Users, MapPin, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const FloatingNav = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", path: "/", isExternal: false },
    { icon: Phone, label: "Call Us", path: "tel:+97141234567", isExternal: true },
    { icon: Users, label: "About Us", path: "/about", isExternal: false },
    { icon: MapPin, label: "Location", path: "/contact", isExternal: false },
    { icon: MessageCircle, label: "WhatsApp", path: "https://wa.me/97141234567", isExternal: true },
  ];

  const handleClick = (item: typeof navItems[0]) => {
    if (item.isExternal) {
      window.open(item.path, item.path.startsWith("tel:") ? "_self" : "_blank");
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="floating-nav">
      <div className="glass-nav flex items-center gap-4 px-6 py-3">
        {navItems.map((item) => (
          <div key={item.label} className="relative">
            <button
              onClick={() => handleClick(item)}
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group hover:scale-110"
              onMouseEnter={() => setActiveTooltip(item.label)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <item.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </button>
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
