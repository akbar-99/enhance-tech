import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const useCases = [{
  id: "ai-security",
  label: "AI-Native Data Security",
  title: "Self-Aware Data Security",
  description: "Know when data hits AI. Adapt to risk automatically. Protect at scale."
}, {
  id: "discovery",
  label: "LACK OF IN-HOUSE IT EXPERTISE",
  title: "Find and Tag Any Sensitive Data",
  description: "Get visibility and control over structured and unstructured data."
}, {
  id: "data-loss",
  label: "Prevent Data Loss",
  title: "Prevent Breaches. Everywhere.",
  description: "Secure sensitive data across AI, cloud, web, email, and endpoints."
}, {
  id: "compliance",
  label: "Compliance and Governance",
  title: "Control Access. Minimize Risk.",
  description: "Enforce least privilege. Find over-permissioned files. Audit access."
}];
const HeroSection = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);
  return <section className="relative min-h-[85vh] flex items-start pt-32 pb-16 overflow-hidden">
      {/* Dark gradient background - Forcepoint style */}
      <div className="absolute inset-0" style={{
      background: 'linear-gradient(135deg, hsl(220 25% 8%) 0%, hsl(215 30% 12%) 40%, hsl(210 25% 8%) 100%)'
    }} />

      {/* 3D Geometric Animation Container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          {/* Main geometric cluster */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Central cube structure */}
            <div className="geometric-cluster">
              {[...Array(8)].map((_, i) => <div key={i} className="geometric-cube" style={{
              '--delay': `${i * 0.5}s`,
              '--rotation': `${i * 45}deg`,
              '--translateX': `${Math.cos(i * 45 * Math.PI / 180) * 120}px`,
              '--translateY': `${Math.sin(i * 45 * Math.PI / 180) * 120}px`
            } as React.CSSProperties}>
                  <div className="cube-face cube-front" />
                  <div className="cube-face cube-back" />
                  <div className="cube-face cube-left" />
                  <div className="cube-face cube-right" />
                  <div className="cube-face cube-top" />
                  <div className="cube-face cube-bottom" />
                </div>)}
            </div>
          </div>
          
          {/* Ambient glow effects */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(circle, hsl(200 100% 50%) 0%, transparent 70%)'
        }} />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-20" style={{
          background: 'radial-gradient(circle, hsl(350 100% 60%) 0%, transparent 70%)'
        }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Use case tabs */}
          <div className="space-y-1 max-w-sm">
            {useCases.map((useCase, index) => <button key={useCase.id} onClick={() => setActiveUseCase(index)} className={`w-full text-left px-5 py-4 transition-all duration-300 flex items-center justify-between group ${activeUseCase === index ? 'bg-forcepoint-tab-active border border-forcepoint-border rounded-lg' : 'bg-transparent border border-transparent'}`}>
                <span className={`font-barlow text-sm tracking-wide ${activeUseCase === index ? 'text-foreground font-medium' : 'text-muted-foreground/70 hover:text-muted-foreground font-normal'}`}>
                  {useCase.label}
                </span>
                {activeUseCase === index && <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 border-t-foreground animate-spin" />}
              </button>)}
            
            <Link to="/services" className="block w-full text-left px-5 py-4 text-forcepoint-link font-barlow text-sm font-medium hover:text-foreground transition-colors">
              View All Use Cases
            </Link>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h1 className="font-barlow text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {useCases[activeUseCase].title}
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl font-barlow">
              {useCases[activeUseCase].description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-forcepoint-cta hover:bg-forcepoint-cta-hover text-forcepoint-cta-text font-barlow font-semibold rounded-full transition-all duration-300 hover:shadow-lg bg-primary">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link to="/services" className="inline-flex items-center gap-2 text-foreground font-barlow font-medium hover:text-primary transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for 3D geometric animation */}
      <style>{`
        .geometric-cluster {
          position: relative;
          width: 300px;
          height: 300px;
          transform-style: preserve-3d;
          animation: clusterRotate 20s linear infinite;
        }
        
        @keyframes clusterRotate {
          0% { transform: rotateX(-20deg) rotateY(0deg); }
          100% { transform: rotateX(-20deg) rotateY(360deg); }
        }
        
        .geometric-cube {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          transform-style: preserve-3d;
          animation: cubeFloat 4s ease-in-out infinite;
          animation-delay: var(--delay);
          transform: translate(-50%, -50%) 
                     translateX(var(--translateX)) 
                     translateY(var(--translateY))
                     rotateX(var(--rotation))
                     rotateY(var(--rotation));
        }
        
        @keyframes cubeFloat {
          0%, 100% { transform: translate(-50%, -50%) translateX(var(--translateX)) translateY(var(--translateY)) rotateX(var(--rotation)) rotateY(var(--rotation)) translateZ(0); }
          50% { transform: translate(-50%, -50%) translateX(var(--translateX)) translateY(var(--translateY)) rotateX(calc(var(--rotation) + 45deg)) rotateY(calc(var(--rotation) + 45deg)) translateZ(30px); }
        }
        
        .cube-face {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 1px solid hsl(200 100% 60% / 0.4);
          background: linear-gradient(135deg, 
            hsl(220 30% 15% / 0.8) 0%, 
            hsl(210 40% 20% / 0.6) 50%,
            hsl(200 50% 25% / 0.4) 100%
          );
          backdrop-filter: blur(4px);
        }
        
        .cube-front { transform: translateZ(30px); }
        .cube-back { transform: translateZ(-30px) rotateY(180deg); }
        .cube-left { transform: translateX(-30px) rotateY(-90deg); }
        .cube-right { transform: translateX(30px) rotateY(90deg); }
        .cube-top { transform: translateY(-30px) rotateX(90deg); }
        .cube-bottom { transform: translateY(30px) rotateX(-90deg); }
        
        .cube-face::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, 
            hsl(350 100% 60% / 0.2) 0%, 
            transparent 50%,
            hsl(200 100% 60% / 0.3) 100%
          );
        }
      `}</style>
    </section>;
};
export default HeroSection;