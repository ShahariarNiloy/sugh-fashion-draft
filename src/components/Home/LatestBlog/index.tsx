import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "Style Guide",
    title: "How to Style Your Saree for Different Occasions",
    excerpt:
      "From casual day wear to grand celebrations, discover the art of draping...",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop",
    date: "Feb 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Trends",
    title: "Top Ethnic Wear Trends for 2026",
    excerpt:
      "Explore the latest fashion trends in Indian ethnic wear this season...",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop",
    date: "Feb 3, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Care Tips",
    title: "How to Care for Your Silk Garments",
    excerpt:
      "Keep your precious silk sarees and suits looking new with these tips...",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    date: "Jan 28, 2026",
    readTime: "3 min read",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-16 bg-gray-1">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
            From Our Blog
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark mb-3">
            Latest Updates & Style Tips
          </h2>
          <p className="text-dark-4 max-w-lg mx-auto">
            Discover fashion insights, styling guides, and the latest trends in
            ethnic wear
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-gray-1 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-dark-4 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-dark-4 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-semibold text-lg text-dark mb-2 group-hover:text-blue transition-colors duration-200 line-clamp-2">
                  <Link href="/blog-details">{post.title}</Link>
                </h3>

                <p className="text-dark-4 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href="/blog-details"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:gap-3 transition-all duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-semibold text-sm text-dark border-2 border-gray-3 py-3.5 px-8 rounded-full hover:border-dark hover:bg-dark hover:text-white transition-all duration-300 group"
          >
            View All Articles
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
