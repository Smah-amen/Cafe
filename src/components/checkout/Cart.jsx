/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { BsDash } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { useNavigate, useParams } from "react-router";
import Hero from "../Hero";
import CustomLink from "../CustomLink";
import Responsive from "../Home/Testimonials/Testimonials";
import jsonData from "../Data/Data.json";
import { useLocation } from "react-router";
import TestimonialsCoffee from "../Home/Testimonials/TestimonialsCoffee";

const Cart = ({ setBold, noNavBar }) => {
  const location = useLocation();
  // const { id } = useParams();
  // const navigate = useNavigate();
  const totalPrice = jsonData
    .filter((item) =>
      location.state == null
        ? [1, 2, 3].includes(item.id)
        : item.id == location.state
    )
    .map((item) => item.price)
    .reduce((prev, total) => prev + total, 0);
  const discount = 0.1;
  const tax = 0.14;
  const pickup = 15;
  const [original, setOriginal] = useState(totalPrice);
  const [saving, setSaving] = useState(totalPrice * discount);
  const [totalTax, setTotalTax] = useState(totalPrice * tax);
  // let totalSummary = 0;
  const [totalSummary, setTotalSummary] = useState(0);
  useEffect(() => {
    setTotalSummary(original - saving + totalTax + pickup);
  }, [original, tax, saving, totalTax]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const increment = (count, setCount, newValue) => {
    setCount(count + 1);
    setOriginal(original + newValue);
    setSaving((original + newValue) * discount);
    setTotalTax((original + newValue) * tax);
  };
  const decrement = (count, setCount, newValue) => {
    count > 1 && setCount(count - 1);
    count > 1 && setOriginal(original - newValue);
    count > 1 && setSaving((original - newValue) * discount);
    count > 1 && setTotalTax((original - newValue) * tax);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = jsonData.filter((item) =>
          location.state == null
            ? [1, 2, 3].includes(item.id)
            : item.id == location.state
        );
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
        // setTimeout(() => navigate("/oops!"), 3000);
      }
    };
    setLoading(true);
    fetchData();
  }, []);

  return (
    <div>
      <Hero name={"Your Order"} />
      <section className="bg-white py-8 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {loading ? (
                  <div className="flex justify-center items-center relative top-0 left-0 h-[50vh] w-fit mx-auto">
                    <img
                      loading="lazy"
                      src="/loading.jpg"
                      alt="Loading"
                      className="w-full h-full"
                    />
                  </div>
                ) : data.length > 0 ? (
                  data.map((coffe, index) => (
                    <CartItem
                      key={index}
                      coffe={coffe}
                      increment={increment}
                      decrement={decrement}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center relative top-0 left-0 h-[50vh] w-fit mx-auto">
                    <img
                      loading="lazy"
                      src="/home1.jpg"
                      alt="Loading"
                      className="w-full h-full"
                    />
                    <p className="text-center text-sm text-gray-400">
                      No coffee selected
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm bg-[#9d8979] sm:p-6">
                <p className="text-xl font-semibold text-white">
                  Order Summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-white">
                        Original Price
                      </dt>
                      <dd className="text-base font-medium text-white">
                        ${original.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-white">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-400">
                        -${saving.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-white">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-white">
                        ${pickup.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-white">Tax</dt>
                      <dd className="text-base font-medium text-white">
                        ${totalTax.toFixed(2)}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-white">Total</dt>
                    <dd className="text-base font-bold text-white">
                      ${totalSummary.toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800"
                  >
                    Proceed to Checkout
                  </a>
                  <p className="text-sm flex items-center justify-center font-normal text-gray-700">
                    or
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CustomLink to="/menu">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary-700 underline hover:no-underline"
                      >
                        Continue Shopping
                        <span className="m-2 mb-0">
                          <HiOutlineArrowNarrowRight size={25} />
                        </span>
                      </a>
                    </CustomLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            {/* <Responsive /> */}
            <TestimonialsCoffee />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;

function CartItem({ coffe, increment, decrement }) {
  const [count, setCount] = useState(1);
  return (
    <div className="rounded-lg p-4 shadow-sm md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6">
        <a href="#" className="shrink-0">
          <img
            className="h-36 w-36 object-cover rounded-full"
            src={coffe.image}
            alt="coffee"
          />
        </a>
        <div className="w-full md:max-w-md">
          <h2 className="text-xl text-primary font-bold mb-2">{coffe.title}</h2>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline"
          >
            {coffe.description}
          </a>
          <div className="flex items-center gap-4 mt-2">
            <button
              type="button"
              className="text-sm flex gap-2 font-medium text-red-600 hover:underline"
            >
              <IoCloseSharp size={20} />
              Remove
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => increment(count, setCount, coffe.price)}
            className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            <LuPlus size={15} />
          </button>
          <span className="w-10 text-center text-sm font-medium text-gray-900">
            {count}
          </span>
          <button
            onClick={() => decrement(count, setCount, coffe.price)}
            className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            <BsDash size={20} />
          </button>
        </div>
        <div className="text-end md:w-32">
          <p className="text-base font-bold text-gray-900">
            ${coffe.price * count}
          </p>
        </div>
      </div>
    </div>
  );
}
