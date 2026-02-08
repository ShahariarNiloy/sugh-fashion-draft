const Newsletter = () => {
  return (
    <section className="overflow-hidden py-16">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div
          className="relative z-1 overflow-hidden rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, #E11D48 0%, #F43F5E 50%, #FB7185 100%)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 px-8 sm:px-12 xl:px-20 py-14 xl:py-16">
            <div className="max-w-[480px] w-full">
              <span className="inline-flex items-center gap-2 text-white/90 text-sm font-medium tracking-wider uppercase mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Stay Connected
              </span>
              <h2 className="text-white font-bold text-2xl sm:text-3xl xl:text-4xl mb-4 leading-tight">
                Get Exclusive Offers & Style Updates
              </h2>
              <p className="text-white/85 text-base leading-relaxed">
                Subscribe to our newsletter and be the first to know about new
                arrivals, special discounts, and fashion tips.
              </p>
            </div>

            <div className="max-w-[480px] w-full">
              <form>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-white/15 border border-white/25 outline-none rounded-full text-white placeholder:text-white/60 py-4 px-6 focus:bg-white/25 focus:border-white/40 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 py-4 px-8 bg-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap group"
                    style={{ color: "#E11D48" }}
                  >
                    Subscribe
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-white/75 text-sm mt-4 flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Join 10,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
