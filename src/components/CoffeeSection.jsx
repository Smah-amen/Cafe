import { GiCoffeePot } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

import React from "react";

const bgImage = {
  backgroundImage: `url('/back.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const CoffeeSection = () => {
  return (
    <div style={bgImage} className=" pt-10 pb-16 ">
      <div className="container mx-auto max-w-[70%] grid lg:grid-cols-2 md:grid-cols-1 gap-6 px-6">
        <div
        data-aos="fade-right"
        data-aos-delay="200"
         className="text-center flex flex-col justify-center col-span-1">
          <h1 className="text-yellow-600 uppercase text-3xl tracking-wide font-semibold mb-4">
            Who We Are
          </h1>
          <h2 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
            Great Coffee Farming
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Risus commodo viverra maecenas accumsan lacus vel facilisis labore
            et dolore magna aliqua. Quis
          </p>
          <a
            href="#"
            className="text-gold font-medium underline hover:text-gold-dark transition"
          >
            Read More
          </a>
        </div>

        <div
        data-aos= "fade-left"
        data-aos-delay="200"
         className="col-span-1 relative">
          <img
            src="coffee-pct.jpg"
            alt="Coffee Beans"
            className="rounded-lg shadow-lg w-full h-full object-cover"

          />

          <div
          data-aos = "fade-up"
          data-aos-delay="200"
           className="lg:absolute lg:bottom-[-5%] lg:left-[-35%] md:grid-cols-1 sm:grid-cols-1 p-3  bg-primary lg:w-[70%] lg:h-36 ">
            <h3 className="text-2xl text-center font-semibold text-white mb-4">
              The Best Coffee Services
            </h3>
            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                  <GiCoffeePot className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-50" />
                </div>
                <p className="text-white text-sm">Coffee Maker</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                  <FaCoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-50" />
                </div>
                <p className="text-white text-sm">Coffee Cup</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                  <SiBuymeacoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-50" />
                </div>
                <p className="text-white text-sm">Coffee Grinder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSection;
