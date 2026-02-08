import Link from "next/link";

const occasions = [
  {
    id: 1,
    name: "Wedding Collection",
    description:
      "Stunning lehengas, sarees & bridal wear for your special moments",
    image:
      "https://images.unsplash.com/photo-1610048869271-66b358a503c6?w=600&h=500&fit=crop&q=80",
    href: "/shop-with-sidebar?occasion=wedding",
    itemCount: 86,
  },
  {
    id: 2,
    name: "Party & Festive",
    description: "Stand out at every celebration with statement ethnic pieces",
    image:
      "https://images.unsplash.com/photo-1713296008556-29c7fae52234?w=600&h=500&fit=crop&q=80",
    href: "/shop-with-sidebar?occasion=party",
    itemCount: 124,
  },
  {
    id: 3,
    name: "Everyday Elegance",
    description:
      "From office to casual outings, find your daily style essentials",
    image:
      "https://images.unsplash.com/photo-1668371459824-094a960a227d?w=600&h=500&fit=crop&q=80",
    href: "/shop-with-sidebar?occasion=casual",
    itemCount: 210,
  },
];

const ShopByOccasion = () => {
  return (
    <section className="py-16 bg-gray-1">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
            Find Your Style
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
            Shop by Occasion
          </h2>
        </div>

        {/* Split-panel cards */}
        <div className="flex flex-col gap-5">
          {occasions.map((occasion, index) => (
            <Link
              key={occasion.id}
              href={occasion.href}
              className={`group flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } bg-white rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl`}
            >
              {/* Image side */}
              <div className="relative w-full md:w-1/2 h-[240px] md:h-[300px] overflow-hidden">
                <img
                  src={occasion.image}
                  alt={occasion.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-7 sm:p-10">
                <span className="text-blue text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  {occasion.itemCount} Products
                </span>

                <h3 className="text-dark font-bold text-2xl sm:text-3xl leading-tight mb-3">
                  {occasion.name}
                </h3>

                <p className="text-dark-4 text-sm leading-relaxed mb-6 max-w-sm">
                  {occasion.description}
                </p>

                <span className="inline-flex items-center gap-2 text-dark font-semibold text-sm transition-all duration-300 group-hover:gap-3 group-hover:text-blue">
                  Explore Collection
                  <svg
                    className="w-4 h-4"
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByOccasion;
