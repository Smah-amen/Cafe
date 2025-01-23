import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
          {/* الرقم 4 الأول */}
          <h1 className="text-9xl sm:text-6xl lg:text-9xl font-bold px-20">4</h1>

          {/* الصورة */}
          <div
            data-aos="fade-left"
            className="relative w-[150px] sm:w-[200px] lg:w-[250px] flex justify-center items-center"
          >
            <img
              src="/coffe3.png"
              alt="Coffee"
              className="w-full rounded-full spin"
            />
          </div>

          {/* الرقم 4 الثاني */}
          <h1 className="text-5xl sm:text-6xl lg:text-9xl font-bold px-20">4</h1>
        </div>

        {/* النص التوضيحي */}
        <div
          data-aos="fade-up"
          className="mt-6 text-center text-xl sm:text-2xl lg:text-3xl"
        >
          <p>
            Oops! The page you're looking for isn't available. Enjoy a cup of{" "}
            <span className="text-primary font-cursive">Coffee</span> while
            browsing.
          </p>
        </div>
      </div>
    </div>
  );
};
