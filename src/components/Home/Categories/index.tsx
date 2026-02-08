"use client";
import Link from "next/link";
import data from "./categoryData";

const Categories = () => {
  return (
    <section className="py-14">
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

        {/* Staggered horizontal strip */}
        <div className="flex items-end gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8 xl:mx-0 xl:px-0 pb-2">
          {data.map((item, index) => (
            <Link
              key={item.id}
              href="/shop-with-sidebar"
              className={`group relative flex-shrink-0 w-[150px] sm:w-[170px] xl:w-0 xl:flex-1 overflow-hidden rounded-2xl snap-start transition-transform duration-300 hover:-translate-y-2 ${
                index % 2 === 0
                  ? "h-[280px] sm:h-[320px]"
                  : "h-[240px] sm:h-[270px]"
              }`}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay - bottom only */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">
                  {item.count} Products
                </p>
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {item.title}
                </h3>

                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-white rounded-full mt-2.5 transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
