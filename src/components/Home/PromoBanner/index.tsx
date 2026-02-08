import React from "react";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFF1F2] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Banarasi Silk Collection
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              UP TO 30% OFF
            </h2>

            <p>
              Experience the luxury of pure Banarasi silk, handwoven by master artisans.
              Each piece tells a story of tradition and elegance.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Shop Now
            </a>
          </div>

          <div className="absolute bottom-0 right-4 lg:right-26 -z-1 w-[274px] h-[350px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop"
              alt="Ethnic wear promo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FECDD3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1 w-[200px] h-[200px] rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=300&fit=crop"
                alt="Kurti collection"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Designer Kurti Collection
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Everyday Elegance
              </h2>

              <p className="font-semibold text-custom-1 text-blue">
                Flat 20% off
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-blue py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-9"
              >
                Explore Now
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FEF3C7] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1 w-[200px] h-[200px] rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=300&fit=crop"
                alt="Bridal collection"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Bridal Lehenga
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Up to <span className="text-orange">40%</span> off
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                Make your special day unforgettable with our handcrafted bridal
                lehengas featuring intricate embroidery.
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Shop Bridal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
