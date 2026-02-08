"use client";
import { useEffect, useState } from "react";

const PromoBanner = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2026";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerUnits = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec" },
  ];

  return (
    <section className="overflow-hidden py-16">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Main banner - Festive Sale with Countdown */}
        <div className="relative overflow-hidden rounded-2xl min-h-[480px] sm:min-h-[460px] mb-6">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1768289222345-64b6b53bf78b?w=1200&h=600&fit=crop&q=80"
            alt="Festive collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/40" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <span className="inline-block font-semibold text-xs text-blue-light uppercase tracking-[0.2em] mb-3">
              Limited Time Offer
            </span>

            <h2 className="font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-3 leading-tight max-w-lg">
              Festive Season Sale
            </h2>

            <p className="text-white/70 text-base leading-relaxed max-w-md mb-6">
              Get ready for the celebrations with our exclusive designer
              collection at unbeatable prices.
            </p>

            {/* Countdown timer */}
            <div className="flex gap-3 sm:gap-4 mb-6">
              {timerUnits.map((unit, i) => (
                <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="w-[60px] sm:w-[72px] h-[60px] sm:h-[72px] font-bold text-xl sm:text-2xl text-white rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/15">
                      {unit.value < 10 ? "0" + unit.value : unit.value}
                    </div>
                    <span className="block text-[10px] font-medium text-white/50 uppercase tracking-wider mt-1.5">
                      {unit.label}
                    </span>
                  </div>
                  {i < timerUnits.length - 1 && (
                    <span className="text-xl font-bold text-white/30 pb-5">:</span>
                  )}
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-sm text-dark bg-white py-3.5 px-8 rounded-full hover:bg-gray-1 transition-all duration-300 w-fit group"
            >
              Shop Collection
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
        </div>

        {/* Two smaller promo banners */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* Banarasi Silk */}
          <div className="relative overflow-hidden rounded-2xl h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1595621853511-e111057d93b2?w=600&h=400&fit=crop&q=80"
              alt="Banarasi Silk"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent" />

            <div className="relative h-full flex flex-col justify-center p-6 sm:p-8">
              <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                Banarasi Silk Collection
              </span>
              <h3 className="text-white font-bold text-2xl mb-1">
                Up to 30% Off
              </h3>
              <p className="text-white/60 text-sm mb-5 max-w-[240px]">
                Pure handwoven silk by master artisans
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-white/40 pb-0.5 w-fit transition-all duration-300 hover:border-white hover:gap-3"
              >
                Shop Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bridal Lehenga */}
          <div className="relative overflow-hidden rounded-2xl h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1668371459824-094a960a227d?w=600&h=400&fit=crop&q=80"
              alt="Bridal Lehenga"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-dark/80 via-dark/50 to-transparent" />

            <div className="relative h-full flex flex-col justify-center items-end text-right p-6 sm:p-8">
              <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                Bridal Lehenga
              </span>
              <h3 className="text-white font-bold text-2xl mb-1">
                Up to 40% Off
              </h3>
              <p className="text-white/60 text-sm mb-5 max-w-[240px]">
                Handcrafted bridal wear with intricate embroidery
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-white/40 pb-0.5 w-fit transition-all duration-300 hover:border-white hover:gap-3"
              >
                Shop Bridal
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
