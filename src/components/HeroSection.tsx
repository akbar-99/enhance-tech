import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import techCamelMascot from "@/assets/tech-camel-mascot.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden bg-primary-foreground">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blob opacity-30" style={{
        background: 'hsl(210 100% 60% / 0.3)'
      }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] blob opacity-25" style={{
        background: 'hsl(200 80% 55% / 0.3)',
        animationDelay: '-4s'
      }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] blob opacity-20" style={{
        background: 'hsl(220 90% 60% / 0.3)',
        animationDelay: '-2s'
      }} />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => <div key={i} className="absolute rounded-full animate-pulse" style={{
        width: `${4 + Math.random() * 8}px`,
        height: `${4 + Math.random() * 8}px`,
        background: `hsl(${200 + Math.random() * 40} 80% 65% / ${0.3 + Math.random() * 0.4})`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        boxShadow: `0 0 ${10 + Math.random() * 20}px hsl(210 100% 60% / 0.5)`
      }} />)}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">​Empowered by Tech,  </span>
            <br />
            <span className="gradient-text neon-text">​driven by results </span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Enhance Tech is a leading Information Technology Company. We are specialized in IT Infrastructure & Cloud Computing solutions and services.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2 text-primary-foreground animated-border">
              ​Become a Partner  <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 group rotate-glow">
              <Play className="w-6 h-6 text-foreground ml-1 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Hero Image and Values */}
        <div className="grid lg:grid-cols-2 gap-8 items-end max-w-6xl mx-auto stagger-children">
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative float-3d">
              <img alt="Enhance Tech AI Mascot" className="w-full max-w-md drop-shadow-2xl" src="/lovable-uploads/f2d5b9d6-9157-4702-aaad-3d50cd206edb.jpg" />
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{
              background: 'radial-gradient(circle, hsl(210 100% 60% / 0.4) 0%, transparent 70%)'
            }} />
              {/* Orbiting particles */}
              <div className="absolute inset-0 -z-10">
                {[...Array(6)].map((_, i) => <div key={i} className="absolute w-3 h-3 rounded-full bg-primary animate-pulse" style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 60}deg) translateX(180px)`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: '0 0 20px hsl(210 100% 60% / 0.8)'
              }} />)}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="value-card shine fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-muted-foreground text-sm">
                We recognize that the thoughts, feelings, and backgrounds of others are as important as our own.
              </p>
            </div>
            
            <div className="value-card shine fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <div className="icon-circle mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Accountability</h3>
              <p className="text-muted-foreground text-sm">
                We accept full responsibility for our decisions, actions, and results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;