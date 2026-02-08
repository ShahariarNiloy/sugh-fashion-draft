"use client";
import React from "react";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    <section className="pt-[160px]">
      {/* Full Width Hero Carousel */}
      <div className="w-full">
        <HeroCarousel />
      </div>

      {/* Category Cards */}
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Sarees", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop" },
            { name: "Lehengas", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop" },
            { name: "Kurtis", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop" },
            { name: "Suits", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop" },
          ].map((item, index) => (
            <Link
              key={index}
              href="/shop-with-sidebar"
              className="group relative h-[200px] sm:h-[280px] overflow-hidden"
              style={{ borderRadius: '8px' }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
                <span className="text-white text-lg sm:text-xl font-semibold tracking-wide">{item.name}</span>
                <span className="text-white/70 text-xs uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-12">
        <HeroFeature />
      </div>
    </section>
  );
};

export default Hero;
