const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-16">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Promo banner big */}
        <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-light-5 via-blue-light-4 to-blue-light-5 py-12 lg:py-16 xl:py-20 px-6 sm:px-10 lg:px-16 xl:px-20 mb-6">
          <div className="max-w-[520px] w-full">
            <span className="inline-block font-medium text-blue text-sm uppercase tracking-wider mb-3">
              Banarasi Silk Collection
            </span>

            <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-dark mb-4 leading-tight">
              UP TO 30% OFF
            </h2>

            <p className="text-dark-3 text-base leading-relaxed">
              Experience the luxury of pure Banarasi silk, handwoven by master
              artisans. Each piece tells a story of tradition and elegance.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-sm text-white bg-blue py-3.5 px-8 rounded-full shadow-lg hover:bg-blue-dark hover:shadow-xl transition-all duration-300 mt-8 group"
            >
              Shop Now
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
            </a>
          </div>

          <div className="absolute bottom-0 right-6 lg:right-20 -z-1 w-[250px] lg:w-[300px] h-[320px] lg:h-[380px] overflow-hidden rounded-t-2xl">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop"
              alt="Ethnic wear promo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* Promo banner small - left */}
          <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-light-4 to-blue-light-5 py-10 xl:py-14 px-6 sm:px-10">
            <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 -z-1 w-[160px] h-[160px] rounded-full overflow-hidden ring-4 ring-white/50">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=300&fit=crop"
                alt="Kurti collection"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-right">
              <span className="block text-sm font-medium text-dark-3 uppercase tracking-wider mb-2">
                Designer Kurti Collection
              </span>

              <h2 className="font-bold text-xl lg:text-2xl text-dark mb-2">
                Everyday Elegance
              </h2>

              <p className="font-semibold text-lg text-blue">Flat 20% off</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white bg-blue py-3 px-6 rounded-full hover:bg-blue-dark transition-all duration-300 mt-6 group"
              >
                Explore Now
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
              </a>
            </div>
          </div>

          {/* Promo banner small - right */}
          <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-l from-yellow-light-2 to-yellow-light-4 py-10 xl:py-14 px-6 sm:px-10">
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 -z-1 w-[160px] h-[160px] rounded-full overflow-hidden ring-4 ring-white/50">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=300&fit=crop"
                alt="Bridal collection"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="block text-sm font-medium text-dark-3 uppercase tracking-wider mb-2">
                Bridal Lehenga
              </span>

              <h2 className="font-bold text-xl lg:text-2xl text-dark mb-2">
                Up to <span className="text-yellow-dark-2">40%</span> off
              </h2>

              <p className="max-w-[260px] text-dark-3 text-sm leading-relaxed">
                Make your special day unforgettable with our handcrafted bridal
                lehengas featuring intricate embroidery.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white bg-yellow-dark-2 py-3 px-6 rounded-full hover:bg-yellow-dark transition-all duration-300 mt-6 group"
              >
                Shop Bridal
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
