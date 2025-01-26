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
    <div className="min-h-screen bg-brandDark flex justify-center items-center text-white overflow-hidden px-4">
  <div className="flex flex-col items-center">
    <div
      className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap"
      data-aos="fade-zoom-in"
    >
      <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold px-4 md:px-10">
        4
      </h1>

      <div
        data-aos="fade-left"
        className="relative w-[100px] md:w-[120px] lg:w-[150px] flex justify-center items-center"
      >
        <img
          src="/coffe3.png"
          alt="Coffee"
          className="w-full rounded-full spin max-w-full h-auto"
        />
      </div>

      <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold px-4 md:px-10">
        4
      </h1>
    </div>

    <div
      data-aos="fade-up"
      className="mt-10 md:mt-16 text-center text-base sm:text-lg md:text-xl lg:text-2xl"
    >
      <p>Oops! The page you're looking for isn't available</p>
      <p>
        Enjoy a cup of
        <span className="text-primary font-cursive"> Coffee</span> while
      </p>
    </div>

    <CustomLink to="/menu">
      <button className="bg-primary/100 px-4 py-2 mt-6 md:mt-10 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
        Order Now
        <FaCoffee className="text-lg md:text-xl cursor-pointer" />
      </button>
    </CustomLink>
  </div>
</div>

  );
};
