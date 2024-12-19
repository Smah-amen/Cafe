import React from "react";
import { GiCoffeePot } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const bgImage = {
  backgroundImage: `url('/bg1.jpg')`,
  backgroundSize: "cover",
  //   backgroundPosition: 'center',
  backgroundRepeat: "no-repeat",
  //   height: '100%',
  //   width: '100%',
};

const Banner = () => {
  return (
    <div style={bgImage}>
      <div className="container  flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2  sm:grid-cols-2 gap-6 ">
          {/* Image */}
          <div>
            <img
              src="cup3.jpg"
              alt=""
              className=" w-[65%]  h-auto  my-14
             rounded-t-full mx-16 drop-shadow-xl
             "
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
            <h1 className="text-5xl font-cursive font-bold text-primary sm:text-3xl">
            Premium Coffee Cafe
            </h1>
            <p className="text-lg text-gray-700 tracking-wide leading-4 ">
              Our mission is to provide quality coffee to our customers
              We are here to provide you with the best
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-7">
                <div className="flex items-center gap-3">
                  <GiCoffeePot className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Premium Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Hot Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiBuymeacoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Cold Coffee</span>
                </div>
              </div>
              <div className="border-l-4 border-primary/50 pl-12 space-y-3">
                <h1 className="text-3xl font-semibold font-cursive text-primary ">Coffee lover </h1>
                <p className="text-gray-600 text-sm" >
                  Coffee, the aromatic elixir that kickstarts our mornings,
                  fuels our creativity, and warms our hearts, has a way of
                  weaving itself into the fabric of our lives. It's not just a
                  beverage; it's a companion that accompanies us through life's
                  highs and lows. Coffee lovers understand that it's more than
                  just a cup of joe; it's a source of comfort, inspiration and
                  connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
