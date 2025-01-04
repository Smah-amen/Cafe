import React from "react";

const HeroDetails = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
    
      <div className="absolute top-0 left-0 w-full h-full">
   
        {/* <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/coffee-video.mp4"
        ></video> */}

       
        
        <img
          src="back2.jpg"
          alt="Coffee"
          className="w-full h-full object-cover"
          loading="lazy"
        /> 
       
        
       
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

   
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Discover the Perfect Coffee
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Explore the rich flavors freshly brewed coffee.
        </p>
        <button className="bg-primary  text-white py-2 px-6 rounded-full text-lg transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroDetails;

