import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Home, Phone, Users, MapPin, MessageSquare, Monitor, Shield, Server, Network, Code, Cloud, Headphones, ShoppingCart, CheckCircle, Star } from "lucide-react";
import techCamelMascot from "@/assets/tech-camel-mascot.png";
const ITSupportAbuDhabi = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [activeTab, setActiveTab] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly."
    });
    setFormData({
      name: "",
      email: "",
      mobile: ""
    });
  };
  const tabs = [{
    icon: Home,
    label: "Overview"
  }, {
    icon: Phone,
    label: "Contact"
  }, {
    icon: Users,
    label: "Team"
  }, {
    icon: MapPin,
    label: "Location"
  }, {
    icon: MessageSquare,
    label: "Support"
  }];
  const services = [{
    icon: Monitor,
    title: "Managed IT Services",
    description: "Enterprise Managed IT Services in Abu Dhabi. Proactive monitoring and 24/7 support.",
    link: "/services#managed-it"
  }, {
    icon: Shield,
    title: "Information Security Solutions",
    description: "Protect your Abu Dhabi business with enterprise-grade security solutions.",
    link: "/services#security-assessment"
  }, {
    icon: Server,
    title: "Server and Storage Solutions",
    description: "Scalable server and storage systems for Abu Dhabi's growing businesses.",
    link: "/services#data-protection"
  }, {
    icon: Network,
    title: "Network Solutions",
    description: "Advanced network solutions for secure connectivity in the capital.",
    link: "/services#network-infrastructure"
  }, {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software solutions for Abu Dhabi enterprises.",
    link: "/services#web-development"
  }, {
    icon: Cloud,
    title: "Cloud Services",
    description: "Government-compliant cloud services for Abu Dhabi organizations.",
    link: "/services#cloud-migration"
  }, {
    icon: Headphones,
    title: "Unified Communications",
    description: "Modern unified communications for Abu Dhabi businesses.",
    link: "/services#voip"
  }, {
    icon: ShoppingCart,
    title: "Procurement Services",
    description: "IT procurement and vendor management for Abu Dhabi.",
    link: "/services#it-procurement"
  }];
  const features = [{
    title: "We Cover All",
    description: "Our packages are comprehensive because it matters greatly to us that every customer is well looked after. We offer customized upgrades for your specific requirements."
  }, {
    title: "We Know You",
    description: "By getting to know your business inside out, our dedicated teams can offer strategic advice on which package is best suited to you."
  }, {
    title: "We Are You",
    description: "We become your fully managed IT Department and work with you to ensure the return from your technology investment is maximized."
  }];
  const testimonials = [{
    name: "Sultan Al Nahyan",
    role: "CTO, Abu Dhabi Holdings",
    rating: 5,
    text: "Outstanding IT support services. They understand the unique needs of Abu Dhabi businesses."
  }, {
    name: "Layla Mohammed",
    role: "Operations Director, Capital Enterprises",
    rating: 5,
    text: "Professional, responsive, and extremely knowledgeable. Highly recommend their services."
  }, {
    name: "Rashid Al Ketbi",
    role: "IT Head, Government Services",
    rating: 5,
    text: "Compliant, secure, and reliable IT solutions. Perfect for our requirements."
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT Support In <span className="neon-text">Abu Dhabi</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Enterprise IT Support Services for businesses in Abu Dhabi. Our expert team delivers government-compliant, 
              secure solutions for organizations in the UAE capital.
            </p>
          </div>

          {/* Contact Form with Background */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
            <img src={techCamelMascot} alt="IT Support" className="absolute right-0 top-0 h-full w-1/2 object-contain opacity-30" />
            <div className="relative glass-card-3d p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Are You Looking For Best IT Support In Abu Dhabi?</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Input placeholder="Name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="bg-secondary/50 border-border" />
                  <Input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="bg-secondary/50 border-border" />
                  <Input placeholder="Mobile No" value={formData.mobile} onChange={e => setFormData({
                  ...formData,
                  mobile: e.target.value
                })} className="bg-secondary/50 border-border" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit</Button>
              </form>
            </div>
          </div>

          {/* Tab Icons */}
          
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Premier providers of <Link to="/" className="text-primary hover:underline">IT Support in Abu Dhabi</Link>. 
              We serve enterprises, government entities, and growing businesses in the UAE capital with comprehensive 
              IT solutions. Our team understands the unique regulatory and security requirements of Abu Dhabi organizations. 
              As certified partners of Microsoft, Fortinet, and Cisco, we deliver enterprise-grade technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-wider mb-2">Key Services</p>
            <h2 className="text-3xl md:text-4xl font-bold">Enterprise IT Solutions for Abu Dhabi</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => <Link key={index} to={service.link} className="group">
                <div className="glass-card-3d p-6 rounded-xl h-full hover:border-primary/50 transition-all">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-wider mb-2">Key Features</p>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our IT Services?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Abu Dhabi Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => <div key={index} className="glass-card-3d p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card-3d rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Abu Dhabi's Premier IT Support Partner</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your IT infrastructure? Get in touch with our team of experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote"><Button className="bg-primary hover:bg-primary/90 px-8">Get a Quote</Button></Link>
              <Link to="/contact"><Button variant="outline" className="px-8">Contact Us</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>;
};
export default ITSupportAbuDhabi;