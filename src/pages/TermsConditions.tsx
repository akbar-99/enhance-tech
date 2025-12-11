import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms and <span className="neon-text">Conditions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="glass-card-3d p-8 rounded-2xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using Enhance Tech's services, you agree to be bound by these Terms and Conditions. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Services</h2>
                <p className="text-muted-foreground">
                  Enhance Tech provides IT support, managed services, cloud solutions, cybersecurity, and related technology 
                  services. The specific terms of service delivery will be outlined in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Client Responsibilities</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain confidentiality of account credentials</li>
                  <li>Comply with applicable laws and regulations</li>
                  <li>Make timely payments as agreed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Enhance Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                  resulting from your use of our services, except as required by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, trademarks, and intellectual property on this website are owned by Enhance Tech. 
                  You may not use, reproduce, or distribute any content without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  For any questions about these Terms and Conditions, please contact us at:
                  <br />Email: info@itenhance.tech
                  <br />Phone: +971 567215617
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>
  );
};

export default TermsConditions;
