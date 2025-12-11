import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="neon-text">Policy</span>
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
                <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
                <p className="text-muted-foreground">
                  Enhance Tech ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Contact information (name, email, phone number, company name)</li>
                  <li>Technical information (IP address, browser type, device information)</li>
                  <li>Usage data (pages visited, time spent on site)</li>
                  <li>Communication data (inquiries, feedback, support requests)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To send you relevant updates and marketing communications</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal data against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
