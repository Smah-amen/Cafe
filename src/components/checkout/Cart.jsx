import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { BsDash } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import Responsive from "../Home/Testimonials/Testimonials";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Cart = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setCount(count);
  }, []);

  return (
    <div>
      <section class="bg-white py-8  md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-orange-800/100 font-mono  sm:text-2xl">
            Shopping Cart
          </h2>

          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div class="space-y-6">
                <div className="rounded-lg p-4 shadow-sm bg-brandDark md:p-6">
                  <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" class="shrink-0 md:order-1">
                      {/* <img class="h-20 w-20 dark:hidden" src="coffe1" alt="imac image" /> */}
                      <img
                        className=" h-36 w-36 object-cover  rounded-full"
                        src="/coffe3.png"
                        alt="imac image"
                      />
                    </a>

                    <div class="flex items-center justify-between md:order-3 md:justify-end">
                      <div class="flex items-center">
                        <button
                          onClick={increment}
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-2 focus:ring-gray-100"
                        >
                          <LuPlus size={15} />
                        </button>

                        <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 ">
                          {count}
                        </span>
                        <button
                          onClick={decrement}
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                        >
                          <BsDash size={20} />
                        </button>
                      </div>
                      <div class="text-end md:order-4 md:w-32">
                        <p class="text-base font-bold text-gray-900 ">$1,499</p>
                      </div>
                    </div>

                    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        class="text-base font-medium text-gray-900 hover:underline "
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Earum quo enim, tempora quis amet ducimus
                        distinctio. Deserunt quidem rem eius laudantium facere
                      </a>

                      <div class="flex items-center gap-4">
                        <button
                          type="button"
                          class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          <IoCloseSharp size={20} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden xl:mt-8 xl:block">
                <h3 class="text-2xl font-semibold text-gray-900 ">
                  People also bought
                </h3>
                <Responsive />
              </div>
            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200  p-4 shadow-sm  bg-[#9d8979] sm:p-6">
                <p class="text-xl font-semibold text-white">Order summary</p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-white">
                        Original price
                      </dt>
                      <dd class="text-base font-medium text-white">
                        $7,592.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-white">Savings</dt>
                      <dd class="text-base font-medium text-green-400">
                        -$299.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-white">
                        Store Pickup
                      </dt>
                      <dd class="text-base font-medium text-white">$99</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-600 ">Tax</dt>
                      <dd class="text-base font-medium text-gray-600">$799</dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-white">Total</dt>
                    <dd class="text-base font-bold text-white">$8,191.00</dd>
                  </dl>
                </div>
                <div>
                  <a
                    href="#"
                    class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </a>
                  <p class="text-sm flex items-center justify-center font-normal text-gray-700">
                    or
                  </p>

                  <div class="flex items-center justify-center gap-2 ">
                    <a
                      href="#"
                      title=""
                      class="inline-flex items-center  text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <span className="m-2  mb-0">
                        <HiOutlineArrowNarrowRight size={25} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
