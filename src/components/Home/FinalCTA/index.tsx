import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&h=600&fit=crop"
              alt="Fashion background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/60" />
          </div>

          {/* Content */}
          <div className="relative py-16 lg:py-24 px-8 lg:px-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-blue"></span>
                Start Your Journey
              </span>

              <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
                Ready to embrace{" "}
                <span className="italic font-serif text-blue-light-2">
                  timeless elegance?
                </span>
              </h2>

              <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
                Discover our curated collection of handcrafted ethnic wear. From
                traditional sarees to contemporary kurtis, find pieces that
                celebrate Indian craftsmanship.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop-with-sidebar"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-dark bg-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                >
                  Explore Collection
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

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-white border-2 border-white/30 py-4 px-8 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg
                    className="w-5 h-5 text-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free shipping above ₹999
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg
                    className="w-5 h-5 text-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  7-day easy returns
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg
                    className="w-5 h-5 text-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Authentic handcrafted pieces
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
