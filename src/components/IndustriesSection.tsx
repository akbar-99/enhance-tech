import { Building2, Construction, Landmark, Radio, Factory, Settings, Calendar, Zap } from "lucide-react";
const industries = [{
  icon: Building2,
  name: "Offshore Oil & Gas"
}, {
  icon: Construction,
  name: "Construction"
}, {
  icon: Landmark,
  name: "Government"
}, {
  icon: Radio,
  name: "Telecoms"
}, {
  icon: Factory,
  name: "Manufacturing"
}, {
  icon: Settings,
  name: "Facilities Management"
}, {
  icon: Calendar,
  name: "Events"
}, {
  icon: Zap,
  name: "Utilities"
}];
const IndustriesSection = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4 bg-primary-foreground">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Industry sectors We Serve</h2>
          <p className="text-muted-foreground">
            Enhance Tech helps all sorts of businesses keep the works flowing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => <div key={industry.name} className="value-card text-center group cursor-pointer hover:neon-glow">
              <div className="icon-circle mx-auto mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-medium">{industry.name}</h3>
            </div>)}
        </div>
      </div>
    </section>;
};
export default IndustriesSection;