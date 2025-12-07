import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import techCamelMascot from "@/assets/tech-camel-mascot.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{
      background: 'radial-gradient(circle, hsl(300 100% 65% / 0.3) 0%, transparent 70%)'
    }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{
      background: 'radial-gradient(circle, hsl(280 80% 55% / 0.3) 0%, transparent 70%)'
    }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Simplifying Tech For</span>
            <br />
            <span className="gradient-text">Faster Solutions</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Enhance Tech is a leading Information Technology Company. We are specialized in IT Infrastructure & Cloud Computing solutions and services.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2 text-primary-foreground hover:scale-105 transition-transform">
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 group">
              <Play className="w-6 h-6 text-foreground ml-1 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Hero Image and Values */}
        <div className="grid lg:grid-cols-2 gap-8 items-end max-w-6xl mx-auto">
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img alt="Enhance Tech AI Mascot" className="w-full max-w-md animate-float drop-shadow-2xl" src="/lovable-uploads/f2d5b9d6-9157-4702-aaad-3d50cd206edb.jpg" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="value-card hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-muted-foreground text-sm">
                We recognize that the thoughts, feelings, and backgrounds of others are as important as our own.
              </p>
            </div>
            
            <div className="value-card hover:scale-[1.02] transition-transform duration-300">
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