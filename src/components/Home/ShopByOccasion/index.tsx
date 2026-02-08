import Link from "next/link";

const occasions = [
  {
    id: 1,
    name: "Wedding Collection",
    description:
      "Stunning lehengas, sarees & bridal wear for your special moments",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop&q=80",
    ],
    href: "/shop-with-sidebar?occasion=wedding",
  },
  {
    id: 2,
    name: "Party & Festive",
    description: "Stand out at every celebration with statement ethnic pieces",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=400&fit=crop&q=80",
    ],
    href: "/shop-with-sidebar?occasion=party",
  },
  {
    id: 3,
    name: "Everyday Elegance",
    description:
      "From office to casual outings, find your daily style essentials",
    images: [
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=300&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391733981-8b530c8a39d7?w=300&h=400&fit=crop&q=80",
    ],
    href: "/shop-with-sidebar?occasion=casual",
  },
];

const ShopByOccasion = () => {
  return (
    <section className="py-16 bg-gray-1">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
            Find Your Style
          </span>
          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark mb-3">
            Shop by Occasion
          </h2>
          <p className="text-dark-4 max-w-lg">
            Find the perfect outfit for every moment, from grand celebrations to
            everyday elegance
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {occasions.map((occasion) => (
            <Link
              key={occasion.id}
              href={occasion.href}
              className="group bg-white border border-gray-3 rounded-2xl p-6 hover:border-gray-4 hover:shadow-lg transition-all duration-300"
            >
              {/* Title & Description */}
              <h3 className="text-dark font-semibold text-lg mb-2">
                {occasion.name}
              </h3>
              <p className="text-dark-4 text-sm mb-6 leading-relaxed">
                {occasion.description}
              </p>

              {/* Images Grid */}
              <div className="flex gap-3">
                {occasion.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-xl ${
                      idx === 0 ? "w-1/2" : "w-1/2"
                    } aspect-[3/4]`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle border overlay */}
                    <div className="absolute inset-0 border border-gray-3 rounded-xl" />
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByOccasion;
