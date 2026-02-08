"use client";
import React, { useEffect } from "react";

import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import {
  removeItemFromCart,
  selectTotalPrice,
} from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";
import Link from "next/link";
import EmptyCart from "./EmptyCart";

const CartSidebarModal = () => {
  const { isCartModalOpen, closeCartModal } = useCartModalContext();
  const cartItems = useAppSelector((state) => state.cartReducer.items);

  const totalPrice = useSelector(selectTotalPrice);

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (!event.target || !(event.target as Element).closest(".modal-content")) {
        closeCartModal();
      }
    }

    if (isCartModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isCartModalOpen, closeCartModal]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-99999 bg-dark/70 transition-opacity duration-300 ${
          isCartModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeCartModal}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-99999 h-screen w-full max-w-[500px] bg-white shadow-1 transform transition-transform duration-300 ease-out modal-content ${
          isCartModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-4 sm:px-7.5 lg:px-11">
          {/* Header */}
          <div className="flex items-center justify-between py-4 sm:py-7.5 lg:py-11 border-b border-gray-3">
            <h2 className="font-medium text-dark text-lg sm:text-2xl">
              Cart View
            </h2>
            <button
              onClick={() => closeCartModal()}
              aria-label="button for close modal"
              className="flex items-center justify-center ease-in duration-150 text-dark-5 hover:text-dark"
            >
              <svg
                className="fill-current"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5379 11.2121C12.1718 10.846 11.5782 10.846 11.212 11.2121C10.8459 11.5782 10.8459 12.1718 11.212 12.5379L13.6741 15L11.2121 17.4621C10.846 17.8282 10.846 18.4218 11.2121 18.7879C11.5782 19.154 12.1718 19.154 12.5379 18.7879L15 16.3258L17.462 18.7879C17.8281 19.154 18.4217 19.154 18.7878 18.7879C19.154 18.4218 19.154 17.8282 18.7878 17.462L16.3258 15L18.7879 12.5379C19.154 12.1718 19.154 11.5782 18.7879 11.2121C18.4218 10.846 17.8282 10.846 17.462 11.2121L15 13.6742L12.5379 11.2121Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 1.5625C7.57867 1.5625 1.5625 7.57867 1.5625 15C1.5625 22.4213 7.57867 28.4375 15 28.4375C22.4213 28.4375 28.4375 22.4213 28.4375 15C28.4375 7.57867 22.4213 1.5625 15 1.5625ZM3.4375 15C3.4375 8.61421 8.61421 3.4375 15 3.4375C21.3858 3.4375 26.5625 8.61421 26.5625 15C26.5625 21.3858 21.3858 26.5625 15 26.5625C8.61421 26.5625 3.4375 21.3858 3.4375 15Z"
                  fill=""
                />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto no-scrollbar py-7.5">
            <div className="flex flex-col gap-6">
              {cartItems.length > 0 ? (
                cartItems.map((item, key) => (
                  <SingleItem
                    key={key}
                    item={item}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-3 bg-white py-5 sm:py-7.5 lg:py-11">
            <div className="flex items-center justify-between gap-5 mb-6">
              <p className="font-medium text-xl text-dark">Subtotal:</p>
              <p className="font-medium text-xl text-dark">₹{totalPrice}</p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                onClick={() => closeCartModal()}
                href="/cart"
                className="w-full flex justify-center font-medium text-white bg-blue py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
              >
                View Cart
              </Link>

              <Link
                href="/checkout"
                onClick={() => closeCartModal()}
                className="w-full flex justify-center font-medium text-white bg-dark py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-opacity-95"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebarModal;
