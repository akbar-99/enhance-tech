import { Eye, Target } from "lucide-react";
const AboutSection = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">WELCOME TO ENHANCE TECH</span>
        </div>
        
        <h2 className="text-center section-title mb-6 text-secondary-foreground">Stress Less ! We bring calm to IT Chaos</h2>
        
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">Our proactive monitoring prevents many issues before they become big problems. We help your team breathe easier, think more clearly, and get back on track fast. </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="value-card text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Respect</h3>
            <p className="text-muted-foreground text-sm">
              We recognize that the thoughts, feelings, and backgrounds of others are as important as our own.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="value-card text-center">
              <h3 className="text-4xl font-bold neon-text mb-1">100+</h3>
              <p className="text-muted-foreground text-sm">Customers</p>
            </div>
            <div className="value-card text-center">
              <h3 className="text-4xl font-bold neon-text mb-1">40%</h3>
              <p className="text-muted-foreground text-sm">Average Cost Savings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="value-card">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                To be the strategic force that transforms your vision, pioneering your intelligent digital future.
              </p>
            </div>
            
            <div className="value-card">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                To empower our clients' success by delivering stable IT solutions and responsive service experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;