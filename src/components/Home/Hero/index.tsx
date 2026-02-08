"use client";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    <section className="pt-[160px]">
      {/* Full Width Hero Carousel */}
      <div className="w-full">
        <HeroCarousel />
      </div>

      {/* Features */}
      <div className="mt-10 mb-6">
        <HeroFeature />
      </div>
    </section>
  );
};

export default Hero;
