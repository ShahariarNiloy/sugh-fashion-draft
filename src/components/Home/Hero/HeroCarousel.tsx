"use client";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&h=900&fit=crop",
    subtitle: "New Collection 2026",
    title: "Elegance Redefined",
    description: "Discover our latest collection of handcrafted ethnic wear",
    cta: "Shop Collection",
    align: "center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&h=900&fit=crop",
    subtitle: "Festive Season",
    title: "Celebrate in Style",
    description: "Exquisite lehengas and sarees for every occasion",
    cta: "Explore Now",
    align: "left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=900&fit=crop",
    subtitle: "Limited Edition",
    title: "Designer Exclusives",
    description: "Curated pieces from India's finest artisans",
    cta: "View Collection",
    align: "right",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&h=900&fit=crop",
    subtitle: "Summer Essentials",
    title: "Light & Breezy",
    description: "Cotton kurtis perfect for everyday elegance",
    cta: "Shop Kurtis",
    align: "center",
  },
];

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="hero-carousel-modern"
      style={{ width: "100%", height: "600px" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px]">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  slide.align === "center"
                    ? "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)"
                    : slide.align === "left"
                      ? "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
                      : "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div
                className={`max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 ${
                  slide.align === "center"
                    ? "text-center"
                    : slide.align === "left"
                      ? "text-left"
                      : "text-right"
                }`}
              >
                <div
                  className={`max-w-xl ${
                    slide.align === "center"
                      ? "mx-auto"
                      : slide.align === "right"
                        ? "ml-auto"
                        : ""
                  }`}
                >
                  <span
                    className="inline-block text-white/90 text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 font-medium"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                  >
                    {slide.subtitle}
                  </span>

                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight"
                    style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="text-white/90 text-base sm:text-lg mb-8 max-w-md"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      marginLeft: slide.align === "center" ? "auto" : undefined,
                      marginRight:
                        slide.align === "center"
                          ? "auto"
                          : slide.align === "right"
                            ? "0"
                            : undefined,
                    }}
                  >
                    {slide.description}
                  </p>

                  <Link
                    href="/shop-with-sidebar"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-dark font-semibold text-sm tracking-wide uppercase rounded-full shadow-lg hover:shadow-xl hover:bg-dark hover:text-white transition-all duration-300 group"
                  >
                    {slide.cta}
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
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
