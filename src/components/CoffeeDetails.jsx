import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GiCoffeeBeans } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url('/back.png')`,
  backgroundSize: "cover",
  // backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
    // height: '100%',
    // width: '100%',
};
const CoffeeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.sampleapis.com/coffee/hot/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!data) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div style={bgImage} className=" container mx-auto  py-4 px-4">
      <div className=" grid grid-cols-1 shadow-2xl lg:grid-cols-2 overflow-hidden max-w-7xl mx-auto">
      {/* Image Section */}
        <div className="   p-2 ">
          <img
            src={data.image}
            alt={data.title}
            className="rounded-md  w-[500px] h-[500px] "
          />
        </div>

        {/* Details Section */}
        <div className="p-8  flex flex-col justify-between">
          <div>
            <span className="bg-primary text-white py-1 px-4 rounded-full text-base  tracking-wide">
              Coffee Bag
            </span>
            <h1 className="text-4xl font-bold mt-4 text-gray-800">{data.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="line-through text-gray-400 text-sm">$49.00 USD</span>
              <span className="text-xl font-bold text-teal-600">$39.00 USD</span>
            </div>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">{data.description}</p>
          </div>
          <div className=" flex items-center">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <button className="ml-4 bg-primary hover:bg-teal-700 text-white px-6 py-2 text-sm rounded-md flex items-center gap-2">
              Add to Cart
              <span className="material-icons"><GiCoffeeBeans /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
