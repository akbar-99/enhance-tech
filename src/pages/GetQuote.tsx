import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

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
    "Free consultation and assessment",
    "Customized solutions for your business",
    "Transparent pricing with no hidden fees",
    "24/7 support availability",
    "Flexible contract terms",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="neon-text">IT Quote</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your IT needs and we'll provide a customized quote tailored to your business requirements.
            </p>
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                <Input
                  placeholder="Services Interested In"
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                  className="bg-secondary/50 border-border"
                />
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

            {/* Benefits */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6">Why Get a Quote from Us?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
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
