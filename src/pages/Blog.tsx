import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const posts = [
    {
      id: 1,
      title: "The Future of Cloud Computing in 2024",
      excerpt: "Explore the latest trends and innovations shaping the cloud computing landscape this year.",
      image: "https://images.unsplash.com/photo-451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
      author: "Tech Team",
      date: "Dec 5, 2024",
      readTime: "5 min read",
      category: "Cloud"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for SMBs",
      excerpt: "Essential security measures every small and medium business should implement today.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
      author: "Security Expert",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Security"
    },
    {
      id: 3,
      title: "Maximizing ROI with Managed IT Services",
      excerpt: "How outsourcing your IT can lead to significant cost savings and improved efficiency.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      author: "Business Analyst",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      category: "Business"
    },
    {
      id: 4,
      title: "AI and Machine Learning in IT Operations",
      excerpt: "Discover how AI is revolutionizing IT operations and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
      author: "AI Specialist",
      date: "Nov 25, 2024",
      readTime: "8 min read",
      category: "AI"
    },
    {
      id: 5,
      title: "Network Infrastructure Planning Guide",
      excerpt: "A comprehensive guide to designing and implementing modern network infrastructure.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
      author: "Network Engineer",
      date: "Nov 20, 2024",
      readTime: "10 min read",
      category: "Network"
    },
    {
      id: 6,
      title: "Microsoft 365 Migration Strategies",
      excerpt: "Best practices for a smooth transition to Microsoft 365 for your organization.",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&auto=format&fit=crop&q=60",
      author: "Cloud Architect",
      date: "Nov 15, 2024",
      readTime: "6 min read",
      category: "Cloud"
    },
    {
      id: 7,
      title: "Remote Work Security Challenges",
      excerpt: "Addressing the unique security challenges posed by remote and hybrid work environments.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&auto=format&fit=crop&q=60",
      author: "Security Team",
      date: "Nov 10, 2024",
      readTime: "5 min read",
      category: "Security"
    },
    {
      id: 8,
      title: "Data Backup and Disaster Recovery",
      excerpt: "Why every business needs a robust backup and disaster recovery strategy.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60",
      author: "IT Director",
      date: "Nov 5, 2024",
      readTime: "7 min read",
      category: "Infrastructure"
    }
  ];

  const categories = ["All", "Cloud", "Security", "Business", "AI", "Network", "Infrastructure"];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] blob opacity-25"
            style={{ background: 'hsl(280 80% 55% / 0.3)' }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] blob opacity-20"
            style={{ background: 'hsl(300 100% 65% / 0.3)', animationDelay: '-4s' }}
          />
        </div>
        
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Tech </span>
              <span className="gradient-text neon-text">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Stay updated with the latest trends, tips, and insights in IT and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full glass-card text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary/20 text-primary neon-glow' 
                    : 'text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <article 
                key={post.id} 
                className="blog-card shine fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" 
                    style={{ background: 'hsl(var(--primary) / 0.2)', color: 'hsl(var(--primary))' }}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setVisiblePosts(prev => prev + 3)}
                className="btn-primary inline-flex items-center gap-2 text-primary-foreground"
              >
                Load More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingNav />
    </div>
  );
};

export default Blog;
