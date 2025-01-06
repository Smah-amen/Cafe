import React from "react";

const bgImage = {
  backgroundImage: `url('/back.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const CoffeeSection = () => {
  return (
    <div style={bgImage} className="py-12">
      <div className="container mx-auto max-w-[70%] grid grid-cols-2 gap-6 px-6">
        <div className="text-center flex flex-col justify-center col-span-1">
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

        <div className="col-span-1">
          <img
            src="coffee-pct.jpg"
            alt="Coffee Beans"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CoffeeSection;
