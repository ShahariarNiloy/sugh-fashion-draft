import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "Style Guide",
    title: "How to Style Your Saree for Different Occasions",
    excerpt:
      "From casual day wear to grand celebrations, discover the art of draping and accessorizing your sarees to match every event.",
    image:
      "https://images.unsplash.com/photo-1769275061102-55435b2b0f71?w=600&h=500&fit=crop&q=80",
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
      "https://images.unsplash.com/photo-1763971922538-5802acdd48b8?w=400&h=300&fit=crop&q=80",
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
      "https://images.unsplash.com/photo-1756483510821-424b7f6e44b0?w=400&h=300&fit=crop&q=80",
    date: "Jan 28, 2026",
    readTime: "3 min read",
  },
];

const LatestBlog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="py-16 bg-gray-1">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
              From Our Blog
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              Latest Updates & Style Tips
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-dark hover:text-blue transition-colors duration-200 group"
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured Large Post */}
          <Link
            href="/blog-details"
            className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-dark/5 transition-all duration-300"
          >
            <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-body mb-3">
                <span>{featured.date}</span>
                <span className="w-1 h-1 bg-body/40 rounded-full" />
                <span>{featured.readTime}</span>
              </div>
              <h3 className="font-bold text-xl text-dark mb-2 group-hover:text-blue transition-colors duration-200 leading-snug">
                {featured.title}
              </h3>
              <p className="text-body text-sm leading-relaxed line-clamp-2">
                {featured.excerpt}
              </p>
            </div>
          </Link>

          {/* Two Stacked Posts */}
          <div className="flex flex-col gap-5">
            {rest.map((post) => (
              <Link
                key={post.id}
                href="/blog-details"
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-dark/5 transition-all duration-300 flex-1"
              >
                <div className="relative w-full sm:w-[200px] h-[180px] sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 sm:hidden bg-white/90 backdrop-blur-sm text-dark text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider text-blue mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-base text-dark mb-1.5 group-hover:text-blue transition-colors duration-200 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-body">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-body/40 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
