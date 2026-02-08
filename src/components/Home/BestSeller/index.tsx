import shopData from "@/components/Shop/shopData";
import Link from "next/link";
import SingleItem from "./SingleItem";

const BestSeller = () => {
  return (
    <section className="overflow-hidden py-16">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* section title */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
              This Month
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              Best Sellers
            </h2>
          </div>

          <Link
            href="/shop-without-sidebar"
            className="inline-flex items-center gap-2 font-medium text-sm text-dark hover:text-blue transition-colors duration-200 group"
          >
            View All
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-10">
          {shopData.slice(1, 7).map((item, key) => (
            <SingleItem item={item} rank={key + 1} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
