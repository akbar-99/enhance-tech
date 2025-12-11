import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What IT services does Enhance Tech provide?",
      answer: "We provide comprehensive IT services including Managed IT Services, Cloud Solutions, Cybersecurity, Network Infrastructure, IT Consulting, and Digital Transformation services tailored for businesses in the UAE and Gulf region."
    },
    {
      question: "Do you offer 24/7 IT support?",
      answer: "Yes, we offer round-the-clock IT support for our managed services clients. Our team is available 24/7 to handle any critical issues and ensure your business operations run smoothly."
    },
    {
      question: "What is your response time for IT support requests?",
      answer: "For critical issues, we respond within 15 minutes. For high-priority issues within 1 hour, and standard requests within 4 business hours. We prioritize based on the severity and impact on your business."
    },
    {
      question: "Do you provide on-site IT support in Dubai?",
      answer: "Yes, we have local technicians available for on-site support across Dubai, Sharjah, Abu Dhabi, and other UAE locations. We can also extend support to Qatar and other GCC countries."
    },
    {
      question: "What cybersecurity solutions do you offer?",
      answer: "Our cybersecurity services include endpoint protection, network security, threat detection and response, security assessments, compliance consulting, and employee security awareness training."
    },
    {
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migrations to Microsoft 365, Azure, AWS, and Google Cloud. We handle the entire process from assessment to migration and ongoing management."
    },
    {
      question: "How do I get a quote for IT services?",
      answer: "You can request a quote by visiting our Get IT Quote page, calling us at +971 567215617, or sending an email to info@itenhance.tech. We'll assess your needs and provide a customized proposal."
    },
    {
      question: "Do you offer IT services for small businesses?",
      answer: "Yes, we work with businesses of all sizes. Our solutions are scalable and can be customized to fit the needs and budget of small businesses, startups, and enterprises alike."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="neon-text">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our IT services and solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card-3d rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>
  );
};

export default FAQs;
