import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ArrowRight, CheckCircle, Clock, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import techCamelMascot from "@/assets/tech-camel-mascot.png";

const GetQuote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    services: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with a customized quote.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", employees: "", services: "", message: "" });
  };

  const benefits = [
    { icon: Clock, title: "Fast Response", description: "Get your customized quote within 24 hours" },
    { icon: Shield, title: "No Obligation", description: "Free consultation with no commitment required" },
    { icon: Users, title: "Expert Team", description: "Consult with certified IT professionals" },
    { icon: Award, title: "Best Value", description: "Competitive pricing with premium service" },
  ];

  const services = [
    "Managed IT Services",
    "Cloud Solutions",
    "Cybersecurity",
    "Network Infrastructure",
    "IT Consulting",
    "Hardware Procurement",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your <span className="neon-text">IT Quote</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your IT needs and we'll provide a customized quote tailored to your business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card-3d p-6 rounded-xl text-center">
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="glass-card-3d p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/50 border-border"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-secondary/50 border-border"
                  />
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <Input
                  placeholder="Number of Employees"
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  className="bg-secondary/50 border-border"
                />
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Services Interested In</label>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded border-border" />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>
                <Textarea
                  placeholder="Tell us about your IT requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border min-h-[120px]"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Get My Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-center">
              <img src={techCamelMascot} alt="Get Quote" className="w-64 h-64 object-contain mx-auto mb-8 float-3d" />
              
              <h2 className="text-2xl font-bold mb-6">Why Get a Quote from Us?</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Free consultation and assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Customized solutions for your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">24/7 support availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Flexible contract terms</span>
                </li>
              </ul>

              <div className="glass-card-3d p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Prefer to Talk?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our team is available to discuss your requirements directly.
                </p>
                <div className="flex gap-4">
                  <a href="tel:+971567215617">
                    <Button variant="outline" size="sm">Call Us</Button>
                  </a>
                  <a href="https://wa.me/971567215617" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">WhatsApp</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-muted-foreground mb-8">
              Learn more about our comprehensive IT solutions before requesting a quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services"><Button variant="outline">View Services</Button></Link>
              <Link to="/products"><Button variant="outline">View Products</Button></Link>
              <Link to="/contact"><Button variant="outline">Contact Us</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>
  );
};

export default GetQuote;
