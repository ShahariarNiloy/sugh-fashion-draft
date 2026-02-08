import React from "react";

const Newsletter = () => {
  return (
    <section className="overflow-hidden py-10">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div
          className="relative z-1 overflow-hidden rounded-2xl"
          style={{ background: "linear-gradient(135deg, #E11D48 0%, #F43F5E 50%, #FB7185 100%)" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-6 sm:px-10 xl:px-16 py-12 xl:py-14">
            <div className="max-w-[500px] w-full">
              <span className="inline-block text-white opacity-90 text-sm font-medium tracking-wider uppercase mb-3">
                Stay Connected
              </span>
              <h2 className="text-white font-bold text-2xl sm:text-3xl xl:text-4xl mb-4 leading-tight">
                Get Exclusive Offers & Style Updates
              </h2>
              <p className="text-white opacity-90 text-base">
                Subscribe to our newsletter and be the first to know about new arrivals,
                special discounts, and fashion tips.
              </p>
            </div>

            <div className="max-w-[450px] w-full">
              <form>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-white bg-opacity-20 border border-white border-opacity-30 outline-none rounded-full text-white placeholder:text-white placeholder:opacity-70 py-4 px-6 focus:bg-opacity-30 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 py-4 px-8 bg-white font-semibold rounded-full ease-out duration-300 hover:shadow-lg whitespace-nowrap"
                    style={{ color: "#E11D48" }}
                  >
                    Subscribe
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-white opacity-80 text-sm mt-4">
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
