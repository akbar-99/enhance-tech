import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import techCamelMascot from "@/assets/tech-camel-mascot.png";

const ITConsultingDubai = () => {
  const services = [
    { icon: Lightbulb, title: "Strategic Planning", description: "Align IT strategy with your business objectives" },
    { icon: Target, title: "Digital Transformation", description: "Guide your journey to digital excellence" },
    { icon: TrendingUp, title: "Technology Assessment", description: "Evaluate and optimize your IT infrastructure" },
    { icon: Users, title: "Team Augmentation", description: "Expert consultants to strengthen your IT team" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IT Consulting in <span className="neon-text">Dubai</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Strategic IT consulting services to help Dubai businesses leverage technology for growth. 
                Our expert consultants provide actionable insights and roadmaps for digital success.
              </p>
              <div className="flex gap-4">
                <Link to="/get-quote">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={techCamelMascot} alt="IT Consulting Dubai" className="w-80 h-80 object-contain float-3d" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="glass-card-3d p-6 rounded-xl text-center">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
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

export default ITConsultingDubai;
