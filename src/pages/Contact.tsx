import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import techCamelMascot from "@/assets/tech-camel-mascot.png";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    value: "+971 4 123 4567",
    link: "tel:+97141234567"
  }, {
    icon: Mail,
    title: "Email",
    value: "info@enhancetech.ae",
    link: "mailto:info@enhancetech.ae"
  }, {
    icon: MapPin,
    title: "Address",
    value: "Dubai, United Arab Emirates",
    link: "#"
  }, {
    icon: Clock,
    title: "Business Hours",
    value: "Sun-Thu: 9AM - 6PM",
    link: "#"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{
        background: 'radial-gradient(circle, hsl(300 100% 65% / 0.3) 0%, transparent 70%)'
      }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Get In </span>
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Ready to transform your IT infrastructure? Let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" placeholder="+971 50 123 4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input type="text" value={formData.company} onChange={e => setFormData({
                    ...formData,
                    company: e.target.value
                  })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" placeholder="Your Company" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea required rows={5} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none" placeholder="Tell us about your project..." />
                </div>
                
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Mascot */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => <a key={index} href={info.link} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="icon-circle mb-4 group-hover:animate-pulse">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </a>)}
              </div>

              {/* Mascot */}
              <div className="glass-card p-8 text-center">
                <img alt="Enhance Tech Mascot" className="w-48 h-48 object-contain mx-auto mb-4 animate-float" src="/lovable-uploads/9bca7c92-053b-49f0-957e-5086b6c37483.jpg" />
                <h3 className="text-xl font-bold text-foreground mb-2">Need Quick Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Chat with our support team on WhatsApp for instant assistance.
                </p>
                <a href="https://wa.me/97141234567" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto glass-card overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.89784363326468!3d25.076280446482965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s" width="100%" height="400" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Enhance Tech Location" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>;
};
export default Contact;