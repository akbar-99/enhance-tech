import { Star } from "lucide-react";
const testimonials = [{
  name: "Sarah Johnson",
  text: "Best IT Support service! Highly professional and responsive team.",
  rating: 5,
  timeAgo: "6 months ago"
}, {
  name: "Michael Chen",
  text: "Really professional company. Solution oriented and quick to support. Would definitely recommend.",
  rating: 5,
  timeAgo: "8 months ago"
}, {
  name: "Emily Davis",
  text: "Highly professional team, completely satisfied with their services.",
  rating: 5,
  timeAgo: "1 year ago"
}, {
  name: "James Wilson",
  text: "Enhance Tech is fantastic! Their IT solutions are top-notch, and their team is incredibly knowledgeable and responsive. Highly recommend them for any of your IT needs!",
  rating: 5,
  timeAgo: "1 year ago"
}, {
  name: "Amanda Roberts",
  text: "Enhance Tech exceeded my expectations with their innovative solutions and top-notch service. Their team is highly skilled and attentive to clients' needs.",
  rating: 5,
  timeAgo: "1 year ago"
}, {
  name: "David Thompson",
  text: "They are providing us exceptional service with high responsive rate. Specifically the support team who is providing us highly satisfactory service.",
  rating: 5,
  timeAgo: "2 years ago"
}];
const TestimonialsSection = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4 bg-primary-foreground">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonial</span>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-foreground">Enhance Tech</p>
                <div className="flex items-center gap-1">
                  <span className="text-foreground font-bold">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
            </div>
            <span className="text-muted-foreground text-sm">powered by Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="testimonial-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
                  <span className="text-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.timeAgo}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground text-sm">{testimonial.text}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;