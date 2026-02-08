import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Quality Assured",
    description: "Handpicked with care",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "100% Secure Payments",
    description: "All major cards accepted",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Support",
    description: "Dedicated customer care",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {featureData.map((item, key) => (
          <div
            className="flex items-center gap-4 p-4 lg:p-5 bg-white rounded-xl border border-gray-2 hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300 group"
            key={key}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-light-5 to-blue-light-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image src={item.img} alt="icons" width={24} height={24} />
            </div>

            <div>
              <h3 className="font-semibold text-sm lg:text-base text-dark leading-tight">
                {item.title}
              </h3>
              <p className="text-xs lg:text-sm text-dark-4 mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
