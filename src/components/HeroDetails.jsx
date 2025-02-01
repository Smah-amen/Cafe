import React from "react";
import vedio from "../assets/vadio.mp4";
import "aos/dist/aos.css";
import AOS from "aos";
import CustomLink from "./CustomLink";
import Menu from "./Menu/Menu";
const HeroDetails = () => {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src={vedio}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-[0.55]"></div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4"
      >
        <h1 className="text-4xl lg:text-5xl font-cursive font-bold mb-4">
          Discover the Perfect Coffee
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Explore the rich flavors freshly brewed coffee.
        </p>
        <CustomLink to= "Menu" > 
        <button
        data-aos="fade-up"
         className="bg-primary text-white py-2 px-6 rounded-full text-lg transition">
          Shop Now
        </button>
        </CustomLink>
      </div>
    </div>
  );
};

export default HeroDetails;
