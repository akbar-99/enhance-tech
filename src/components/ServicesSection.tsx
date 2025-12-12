import { useState } from "react";
import { Shield, Server, Network, Code, Cloud, Headphones, ShoppingCart, Monitor } from "lucide-react";
const services = [{
  icon: Monitor,
  title: "Managed IT Services",
  description: "Boost efficiency with reliable Managed IT Services. Proactive monitoring, 24/7 support & tailored solutions for your business growth.",
  color: "from-blue-500/20 to-cyan-500/20"
}, {
  icon: Shield,
  title: "Information Security Solutions",
  description: "Our security solutions help improve collaboration, enhance user experience, and increase productivity with comprehensive protection.",
  color: "from-green-500/20 to-emerald-500/20"
}, {
  icon: Server,
  title: "Server and Storage Solutions",
  description: "Reduce costs and complexity by investing in systems that handle your infrastructure needs efficiently.",
  color: "from-orange-500/20 to-amber-500/20"
}, {
  icon: Network,
  title: "Network Solutions",
  description: "Intelligently integrated network solutions that secure connectivity and enhance your business operations.",
  color: "from-purple-500/20 to-pink-500/20"
}, {
  icon: Code,
  title: "Software Solutions",
  description: "Value-added software solutions designed to address your organization's unique needs and challenges.",
  color: "from-red-500/20 to-rose-500/20"
}, {
  icon: Cloud,
  title: "AWS Cloud Services",
  description: "Expert AWS cloud services to manage your business effectively with scalable infrastructure.",
  color: "from-sky-500/20 to-blue-500/20"
}, {
  icon: Headphones,
  title: "Unified Communications",
  description: "Solutions that improve collaboration, enhance user experience, and increase productivity and mobility.",
  color: "from-violet-500/20 to-purple-500/20"
}, {
  icon: ShoppingCart,
  title: "Procurement Services",
  description: "Transform your business with our unparalleled IT Vendor Management & Procurement Services.",
  color: "from-teal-500/20 to-cyan-500/20"
}];
const ServicesSection = () => {
  const [visibleServices, setVisibleServices] = useState(4);
  const loadMore = () => {
    setVisibleServices(prev => Math.min(prev + 4, services.length));
  };
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">key Services</span>
        </div>
        
        <h2 className="text-center section-title mb-16">IT Services That Drive Your Business Forward</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.slice(0, visibleServices).map((service, index) => <div key={service.title} className="service-card group" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className={`w-full h-40 rounded-xl mb-4 bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <service.icon className="w-16 h-16 text-foreground/60" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>)}
        </div>

        {visibleServices < services.length && <div className="text-center mt-10">
            <button onClick={loadMore} className="btn-primary text-primary-foreground">
              Load More
            </button>
          </div>}
      </div>
    </section>;
};
export default ServicesSection;