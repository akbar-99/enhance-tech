import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Users, Target, Eye, Award, CheckCircle } from "lucide-react";
import techCamelMascot from "@/assets/tech-camel-mascot.png";

const About = () => {
  const values = [
    { icon: Users, title: "Empathy", description: "We recognize that the thoughts, feelings, and backgrounds of others are as important as our own." },
    { icon: Target, title: "Accountability", description: "We accept full responsibility for our decisions, actions, and results." },
    { icon: Award, title: "Integrity", description: "We are honest and transparent in all our dealings with clients and partners." },
    { icon: CheckCircle, title: "Excellence", description: "We strive for excellence in every project and solution we deliver." }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Team Members" },
    { value: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.3) 0%, transparent 70%)' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="gradient-text">Enhance Tech</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              A leading Information Technology company specialized in IT Infrastructure & Cloud Computing solutions and services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative flex justify-center">
              <img 
                src={techCamelMascot} 
                alt="Enhance Tech Mascot" 
                className="w-full max-w-md animate-float"
              />
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-circle">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative IT solutions provider, empowering businesses to achieve digital transformation and sustainable growth.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-circle">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To deliver cutting-edge technology solutions that simplify complex IT challenges, enabling our clients to focus on their core business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-foreground">Our Core </span>
            <span className="gradient-text">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
                <div className="icon-circle mb-4 group-hover:animate-pulse">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>
  );
};

export default About;
