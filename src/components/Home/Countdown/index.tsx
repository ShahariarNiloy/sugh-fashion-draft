"use client";
import { useEffect, useState } from "react";

const CounDown = () => {
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
    // @ts-ignore
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden py-16 bg-gray-1">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-1 rounded-2xl bg-gradient-to-br from-blue-light-5 via-white to-blue-light-4 p-6 sm:p-10 lg:p-14 xl:p-16">
          <div className="max-w-[450px] w-full">
            <span className="inline-block font-semibold text-sm text-blue uppercase tracking-wider mb-3">
              Limited Time Offer!
            </span>

            <h2 className="font-bold text-dark text-2xl lg:text-3xl xl:text-4xl mb-4 leading-tight">
              Festive Season Sale
            </h2>

            <p className="text-dark-3 text-base leading-relaxed">
              Get ready for the celebrations with our exclusive designer
              collection at unbeatable prices.
            </p>

            {/* Countdown timer */}
            <div className="flex flex-wrap gap-4 mt-8">
              {/* Timer day */}
              <div className="text-center">
                <div className="min-w-[72px] h-[72px] font-bold text-2xl lg:text-3xl text-dark rounded-xl flex items-center justify-center bg-white shadow-lg border border-gray-2">
                  {days < 10 ? "0" + days : days}
                </div>
                <span className="block text-xs font-medium text-dark-4 uppercase tracking-wider mt-2">
                  Days
                </span>
              </div>

              {/* Separator */}
              <div className="flex items-center text-2xl font-bold text-dark-4 pb-6">
                :
              </div>

              {/* Timer hours */}
              <div className="text-center">
                <div className="min-w-[72px] h-[72px] font-bold text-2xl lg:text-3xl text-dark rounded-xl flex items-center justify-center bg-white shadow-lg border border-gray-2">
                  {hours < 10 ? "0" + hours : hours}
                </div>
                <span className="block text-xs font-medium text-dark-4 uppercase tracking-wider mt-2">
                  Hours
                </span>
              </div>

              {/* Separator */}
              <div className="flex items-center text-2xl font-bold text-dark-4 pb-6">
                :
              </div>

              {/* Timer minutes */}
              <div className="text-center">
                <div className="min-w-[72px] h-[72px] font-bold text-2xl lg:text-3xl text-dark rounded-xl flex items-center justify-center bg-white shadow-lg border border-gray-2">
                  {minutes < 10 ? "0" + minutes : minutes}
                </div>
                <span className="block text-xs font-medium text-dark-4 uppercase tracking-wider mt-2">
                  Minutes
                </span>
              </div>

              {/* Separator */}
              <div className="flex items-center text-2xl font-bold text-dark-4 pb-6">
                :
              </div>

              {/* Timer seconds */}
              <div className="text-center">
                <div className="min-w-[72px] h-[72px] font-bold text-2xl lg:text-3xl text-blue rounded-xl flex items-center justify-center bg-white shadow-lg border border-blue/20">
                  {seconds < 10 ? "0" + seconds : seconds}
                </div>
                <span className="block text-xs font-medium text-dark-4 uppercase tracking-wider mt-2">
                  Seconds
                </span>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-sm text-white bg-blue py-3.5 px-8 rounded-full shadow-lg hover:bg-blue-dark hover:shadow-xl transition-all duration-300 mt-8 group"
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

          {/* Decorative background */}
          <div className="hidden sm:block absolute -right-20 -top-20 w-96 h-96 bg-blue/5 rounded-full blur-3xl" />
          <div className="hidden lg:block absolute right-8 xl:right-24 bottom-8 xl:bottom-12 -z-1 w-[320px] h-[360px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1595621853511-e111057d93b2?w=500&h=600&fit=crop&q=80"
              alt="Festive collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounDown;
