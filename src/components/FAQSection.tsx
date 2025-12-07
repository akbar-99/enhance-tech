import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "IT support helps you meet your business goals",
    answer: "We take time to understand how you work, how you use technology, and we make business recommendations to ensure technology helps you to succeed."
  },
  {
    question: "Fast response time",
    answer: "We ensure you have the right technology in place to support your business, and we react fast to any issues, responding in just 10 minutes."
  },
  {
    question: "We ensure you are cyber secure",
    answer: "Protect your business from cyber threats with our comprehensive security solutions, proactive monitoring, and expert guidance to keep your data safe."
  },
  {
    question: "Certified and experienced IT Support provider",
    answer: "We are certified and hold government Cyber Security Essentials certification. We're audited annually to ensure we're upholding rigorous data security standards."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">asked questions</span>
            <h2 className="section-title mt-4">
              Why partner with Enhance Tech for your IT support?
            </h2>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="faq-item border-none"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
