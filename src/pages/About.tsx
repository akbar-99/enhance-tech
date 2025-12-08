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
      
      {/* Decorative Curved Border with Purple Orb */}
      <div className="relative">
        <div className="absolute inset-x-0 top-20 h-32 overflow-visible z-10">
          {/* Curved black border */}
          <div className="absolute inset-x-0 bottom-0 h-24">
            <svg 
              viewBox="0 0 1440 100" 
              fill="none" 
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path 
                d="M0 100 L0 50 Q360 0 720 50 Q1080 100 1440 50 L1440 100 Z" 
                fill="hsl(var(--background))"
                stroke="url(#borderGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(280 80% 55% / 0.3)" />
                  <stop offset="50%" stopColor="hsl(300 100% 65%)" />
                  <stop offset="100%" stopColor="hsl(280 80% 55% / 0.3)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Purple gradient orb */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-32 z-20">
            <div className="relative w-full h-full">
              {/* Outer glow */}
              <div 
                className="absolute inset-0 rounded-full blur-xl animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.6) 0%, hsl(280 80% 55% / 0.3) 50%, transparent 70%)' }}
              />
              {/* Main orb */}
              <div 
                className="absolute inset-4 rounded-full"
                style={{ 
                  background: 'radial-gradient(circle at 30% 30%, hsl(300 100% 75%) 0%, hsl(280 80% 55%) 50%, hsl(260 70% 40%) 100%)',
                  boxShadow: '0 0 40px hsl(300 100% 65% / 0.5), inset 0 0 20px hsl(300 100% 80% / 0.3)'
                }}
              />
              {/* Inner highlight */}
              <div 
                className="absolute top-5 left-5 w-6 h-6 rounded-full opacity-60"
                style={{ background: 'radial-gradient(circle, hsl(0 0% 100% / 0.8) 0%, transparent 70%)' }}
              />
              {/* Rotating arrow icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/80 text-xs font-medium animate-spin-slow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] blob opacity-25"
            style={{ background: 'hsl(300 100% 65% / 0.3)' }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] blob opacity-20"
            style={{ background: 'hsl(280 80% 55% / 0.3)', animationDelay: '-4s' }}
          />
        </div>
        
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="gradient-text neon-text">Enhance Tech</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              A leading Information Technology company specialized in IT Infrastructure & Cloud Computing solutions and services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative float-3d">
                <img 
                  src={techCamelMascot} 
                  alt="Enhance Tech Mascot" 
                  className="w-full max-w-md drop-shadow-2xl"
                />
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full blur-3xl -z-10 animate-pulse-glow"
                  style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.3) 0%, transparent 70%)' }}
                />
              </div>
            </div>
            
            <div className="space-y-6 stagger-children">
              <div className="glass-card-3d p-6 shine fade-up" style={{ animationDelay: '0.2s' }}>
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
              
              <div className="glass-card-3d p-6 shine fade-up" style={{ animationDelay: '0.4s' }}>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto stagger-children">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card-3d p-6 text-center shine fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold gradient-text neon-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob opacity-15"
            style={{ background: 'hsl(280 80% 55% / 0.3)' }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-up">
            <span className="text-foreground">Our Core </span>
            <span className="gradient-text neon-text">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto stagger-children">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="glass-card-3d p-6 group shine fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="icon-circle mb-4 group-hover:neon-glow transition-all duration-300">
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
