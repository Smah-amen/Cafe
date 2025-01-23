import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomLink from "./CustomLink";
import { FaCoffee } from "react-icons/fa";

export const NotFound = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-brandDark flex justify-center items-center text-white overflow-hidden">
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center gap-6"
          data-aos="fade-zoom-in"
        >
          <h1 className="text-9xl sm:text-6xl lg:text-[250px] font-bold px-20">
            4
          </h1>

          <div
            data-aos="fade-left"
            className="relative w-[150px] sm:w-[200px] lg:w-[370px] flex justify-center items-center"
          >
            <img
              src="/coffe3.png"
              alt="Coffee"
              className="w-full rounded-full spin"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[250px] font-bold px-20">
            4
          </h1>
        </div>

        <div
          data-aos="fade-up"
          className="mt-20 text-center text-xl sm:text-2xl lg:text-3xl"
        >
          <p>Oops! The page you're looking for isn't available</p>
          <p>
            Enjoy a cup of
            <span className="text-primary font-cursive">Coffee</span> while
          </p>
        </div>
        <CustomLink to="/menu">
          <button className="bg-primary/100 px-4 py-2 mt-10 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
            Order Now
            <FaCoffee className="text-xl cursor-pointer" />
          </button>
        </CustomLink>
      </div>
    </div>
  );
};
