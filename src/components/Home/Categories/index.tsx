"use client";
import Link from "next/link";
import data from "./categoryData";
const Categories = () => {
  return (
    <section className="overflow-hidden py-16 border-t border-gray-2">
      \n{" "}
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section title */}
        <div className="text-center mb-10">
          <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
            Explore
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.map((item) => (
            <Link
              key={item.id}
              href="/shop-with-sidebar"
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-5">
                <span className="text-white text-base font-semibold tracking-wide drop-shadow-md">
                  {item.title}
                </span>
                <span className="flex items-center gap-1 text-white/80 text-xs uppercase tracking-widest mt-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Shop
                  <svg
                    className="w-3 h-3"
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
