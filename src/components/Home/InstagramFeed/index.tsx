import Link from "next/link";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1769275061102-55435b2b0f71?w=500&h=600&fit=crop&q=80",
    username: "@priya_styles",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1763971922538-5802acdd48b8?w=500&h=500&fit=crop&q=80",
    username: "@ethnic_queen",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1756483510821-424b7f6e44b0?w=500&h=500&fit=crop&q=80",
    username: "@fashion_diva",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?w=500&h=600&fit=crop&q=80",
    username: "@sneha_looks",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1610048869271-66b358a503c6?w=500&h=500&fit=crop&q=80",
    username: "@style_with_mehak",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1713296008556-29c7fae52234?w=500&h=500&fit=crop&q=80",
    username: "@ananya_ethnic",
  },
];

const HoverOverlay = ({ username }: { username: string }) => (
  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-300 flex flex-col items-center justify-center">
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      <svg
        className="w-6 h-6 text-white mx-auto mb-1"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
      <span className="text-white text-xs font-medium">{username}</span>
    </div>
  </div>
);

const InstagramFeed = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
            #SughFashion
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark mb-3">
            Styled by You
          </h2>
          <p className="text-body max-w-md mx-auto text-sm">
            Tag us on Instagram for a chance to be featured
          </p>
        </div>

        {/* Full mosaic grid - no empty space */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2.5 h-[300px] sm:h-[360px] lg:h-[420px]">
          {/* Col 1: tall (spans 2 rows) */}
          <Link
            href="https://instagram.com/sughfashion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl row-span-2"
          >
            <img
              src={instagramPosts[0].image}
              alt={`Post by ${instagramPosts[0].username}`}
              className="w-full h-full object-cover"
            />
            <HoverOverlay username={instagramPosts[0].username} />
          </Link>

          {/* Col 2 top */}
          <Link
            href="https://instagram.com/sughfashion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={instagramPosts[1].image}
              alt={`Post by ${instagramPosts[1].username}`}
              className="w-full h-full object-cover"
            />
            <HoverOverlay username={instagramPosts[1].username} />
          </Link>

          {/* Col 3 top */}
          <Link
            href="https://instagram.com/sughfashion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={instagramPosts[2].image}
              alt={`Post by ${instagramPosts[2].username}`}
              className="w-full h-full object-cover"
            />
            <HoverOverlay username={instagramPosts[2].username} />
          </Link>

          {/* Col 4: tall (spans 2 rows) */}
          <Link
            href="https://instagram.com/sughfashion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl row-span-2"
          >
            <img
              src={instagramPosts[3].image}
              alt={`Post by ${instagramPosts[3].username}`}
              className="w-full h-full object-cover"
            />
            <HoverOverlay username={instagramPosts[3].username} />
          </Link>

          {/* Col 2 bottom */}
          <Link
            href="https://instagram.com/sughfashion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={instagramPosts[4].image}
              alt={`Post by ${instagramPosts[4].username}`}
              className="w-full h-full object-cover"
            />
            <HoverOverlay username={instagramPosts[4].username} />
          </Link>

          {/* Col 3 bottom */}
          <Link
            href="https://instagram.com/sughfashion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={instagramPosts[5].image}
              alt={`Post by ${instagramPosts[5].username}`}
              className="w-full h-full object-cover"
            />
            <HoverOverlay username={instagramPosts[5].username} />
          </Link>
        </div>

        {/* Follow Button */}
        <div className="text-center mt-10">
          <Link
            href="https://instagram.com/sughfashion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-dark text-white text-sm font-semibold rounded-full hover:bg-dark/90 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @sughfashion
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
