"use client";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import shopData from "@/components/Shop/shopData";
import { addItemToCart } from "@/redux/features/cart-slice";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { AppDispatch } from "@/redux/store";
import { Product } from "@/types/product";
import Link from "next/link";
import { useDispatch } from "react-redux";

const BentoCard = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="relative overflow-hidden rounded-2xl group h-full cursor-pointer">
      {/* Image */}
      <img
        src={item.imgs?.previews[0]}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Action buttons - appear on hover */}
      <div className="absolute top-4 right-4 flex gap-2 z-10 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(updateQuickView({ ...item }));
            openModal();
          }}
          aria-label="Quick view"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-dark shadow-md ease-out duration-200 hover:bg-dark hover:text-white"
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99992 5.49996C6.61921 5.49996 5.49992 6.61925 5.49992 7.99996C5.49992 9.38067 6.61921 10.5 7.99992 10.5C9.38063 10.5 10.4999 9.38067 10.4999 7.99996C10.4999 6.61925 9.38063 5.49996 7.99992 5.49996ZM6.49992 7.99996C6.49992 7.17153 7.17149 6.49996 7.99992 6.49996C8.82835 6.49996 9.49992 7.17153 9.49992 7.99996C9.49992 8.82839 8.82835 9.49996 7.99992 9.49996C7.17149 9.49996 6.49992 8.82839 6.49992 7.99996Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99992 2.16663C4.9905 2.16663 2.96345 3.96942 1.78696 5.49787L1.76575 5.52543C1.49968 5.87098 1.25463 6.18924 1.08838 6.56556C0.910348 6.96854 0.833252 7.40775 0.833252 7.99996C0.833252 8.59217 0.910348 9.03138 1.08838 9.43436C1.25463 9.81068 1.49968 10.1289 1.76575 10.4745L1.78696 10.5021C2.96345 12.0305 4.9905 13.8333 7.99992 13.8333C11.0093 13.8333 13.0364 12.0305 14.2129 10.5021L14.2341 10.4745C14.5002 10.1289 14.7452 9.81069 14.9115 9.43436C15.0895 9.03138 15.1666 8.59217 15.1666 7.99996C15.1666 7.40775 15.0895 6.96854 14.9115 6.56556C14.7452 6.18923 14.5002 5.87097 14.2341 5.52541L14.2129 5.49787C13.0364 3.96942 11.0093 2.16663 7.99992 2.16663ZM2.5794 6.10783C3.66568 4.69657 5.43349 3.16663 7.99992 3.16663C10.5663 3.16663 12.3342 4.69657 13.4204 6.10783C13.7128 6.48769 13.8841 6.71466 13.9967 6.96966C14.102 7.20797 14.1666 7.49925 14.1666 7.99996C14.1666 8.50067 14.102 8.79195 13.9967 9.03026C13.8841 9.28526 13.7128 9.51223 13.4204 9.89209C12.3342 11.3033 10.5663 12.8333 7.99992 12.8333C5.43349 12.8333 3.66568 11.3033 2.5794 9.89209C2.28701 9.51223 2.11574 9.28525 2.00309 9.03026C1.89781 8.79195 1.83325 8.50067 1.83325 7.99996C1.83325 7.49925 1.89781 7.20797 2.00309 6.96966C2.11574 6.71466 2.28701 6.48769 2.5794 6.10783Z"
            />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              addItemToWishlist({ ...item, status: "available", quantity: 1 })
            );
          }}
          aria-label="Add to wishlist"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-dark shadow-md ease-out duration-200 hover:bg-dark hover:text-white"
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99992 2.97255C6.45855 1.5935 4.73256 1.40058 3.33376 2.03998C1.85639 2.71528 0.833252 4.28336 0.833252 6.0914C0.833252 7.86842 1.57358 9.22404 2.5444 10.3172C3.32183 11.1926 4.2734 11.9253 5.1138 12.5724C5.30431 12.7191 5.48911 12.8614 5.66486 12.9999C6.00636 13.2691 6.37295 13.5562 6.74447 13.7733C7.11582 13.9903 7.53965 14.1667 7.99992 14.1667C8.46018 14.1667 8.88401 13.9903 9.25537 13.7733C9.62689 13.5562 9.99348 13.2691 10.335 12.9999C10.5107 12.8614 10.6955 12.7191 10.886 12.5724C11.7264 11.9253 12.678 11.1926 13.4554 10.3172C14.4263 9.22404 15.1666 7.86842 15.1666 6.0914C15.1666 4.28336 14.1434 2.71528 12.6661 2.03998C11.2673 1.40058 9.54129 1.5935 7.99992 2.97255Z"
            />
          </svg>
        </button>
      </div>

      {/* Minimal bottom info - always visible */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-white font-medium text-base drop-shadow-md line-clamp-1">
              <Link href="/shop-details" className="hover:underline">
                {item.title}
              </Link>
            </h3>
            <span className="font-semibold text-white text-sm drop-shadow-md">
              ₹{item.discountedPrice}
            </span>
          </div>

          {/* Add to Cart - appears on hover */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addItemToCart({ ...item, quantity: 1 }));
            }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark shadow-md opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-dark hover:text-white"
            aria-label="Add to cart"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 1.5C8.27614 1.5 8.5 1.72386 8.5 2V7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H8.5V14C8.5 14.2761 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.2761 7.5 14V8.5H2C1.72386 8.5 1.5 8.27614 1.5 8C1.5 7.72386 1.72386 7.5 2 7.5H7.5V2C7.5 1.72386 7.72386 1.5 8 1.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const NewArrival = () => {
  const items = shopData;

  return (
    <section className="overflow-hidden py-16 bg-gray-1">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="inline-block text-custom-xs font-medium uppercase tracking-wider text-blue mb-2">
              This Week&apos;s
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              New Arrivals
            </h2>
          </div>

          <Link
            href="/shop-with-sidebar"
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

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[260px] gap-4">
          {/* Featured large item - 2 cols, 2 rows */}
          {items[0] && (
            <div className="col-span-2 row-span-2">
              <BentoCard item={items[0]} />
            </div>
          )}

          {/* Top right pair */}
          {items[1] && (
            <div className="col-span-1">
              <BentoCard item={items[1]} />
            </div>
          )}
          {items[2] && (
            <div className="col-span-1">
              <BentoCard item={items[2]} />
            </div>
          )}

          {/* Bottom right pair */}
          {items[3] && (
            <div className="col-span-1">
              <BentoCard item={items[3]} />
            </div>
          )}
          {items[4] && (
            <div className="col-span-1">
              <BentoCard item={items[4]} />
            </div>
          )}

          {/* Bottom row */}
          {items[5] && (
            <div className="col-span-1">
              <BentoCard item={items[5]} />
            </div>
          )}
          {items[6] && (
            <div className="col-span-1">
              <BentoCard item={items[6]} />
            </div>
          )}

          {/* Wide bottom item - 2 cols */}
          {items[7] && (
            <div className="col-span-2">
              <BentoCard item={items[7]} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
