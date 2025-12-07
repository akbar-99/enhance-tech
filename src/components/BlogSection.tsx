import { useState } from "react";

const blogPosts = [
  {
    title: "Tips to Protect Your Data on Public Wi-Fi",
    excerpt: "By following the right precautions, you can navigate the cyber frontier safely and protect your data on public Wi-Fi.",
    author: "Enhance Tech",
    date: "June 5, 2024",
    color: "from-blue-500/30 to-cyan-500/30"
  },
  {
    title: "How Cloud Solutions Shield Businesses During Crisis",
    excerpt: "Discover how cloud solutions shield businesses during emergencies, offering resilience, accessibility, and scalability.",
    author: "Enhance Tech",
    date: "April 25, 2024",
    color: "from-green-500/30 to-emerald-500/30"
  },
  {
    title: "Top 6 Antivirus Solutions for Cybersecurity Today",
    excerpt: "Let's explore why free antivirus software may not provide the protection a business needs and explore better options.",
    author: "Enhance Tech",
    date: "April 15, 2024",
    color: "from-purple-500/30 to-pink-500/30"
  },
  {
    title: "5 Powerful Benefits of IT Managed Services Plans",
    excerpt: "Discover the top 5 benefits of IT Managed Services Plans and how they can boost productivity, enhance security, and reduce costs.",
    author: "Enhance Tech",
    date: "April 3, 2024",
    color: "from-orange-500/30 to-amber-500/30"
  },
  {
    title: "Revolutionary Cloud Computing Trends to Watch",
    excerpt: "Discover the top cloud computing trends including edge computing, hybrid cloud, serverless technology, and enhanced security.",
    author: "Enhance Tech",
    date: "March 26, 2024",
    color: "from-red-500/30 to-rose-500/30"
  },
  {
    title: "Effective Financial Plan Strategies for IT Projects",
    excerpt: "Discover how to optimize IT project financial planning with strategies and risk management to maximize success.",
    author: "Enhance Tech",
    date: "February 20, 2024",
    color: "from-teal-500/30 to-cyan-500/30"
  }
];

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">our blog</span>
          <h2 className="section-title mt-4 mb-4">Stories, Ideas & Inspiration</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find inspirational content and expert advice on how to get the most out of your digital world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <article key={index} className="blog-card cursor-pointer group">
              <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                <svg className="w-16 h-16 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {visiblePosts < blogPosts.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="btn-primary text-primary-foreground"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
