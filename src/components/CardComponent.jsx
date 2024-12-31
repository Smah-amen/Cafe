import React, { useEffect, useState } from "react";
import axios from "axios";

const CardComponent = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.sampleapis.com/coffee/hot");
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <div className="p-3">
      <div className="container py-10  overflow-hidden">
        <div
          data-aos="fade-zoom-in"
          data-aos-delay="200"
          className="relative pt-28 pb-9 text-center after:absolute after:content-start after:w-[2px] after:h-[100px] after:top-0 after:left-[50%] after:ms[1px] after:bg-[#DA9F5B]"
        >
          <h4
            className="text-primary uppercase text-2xl font-medium mb-2"
            style={{ letterSpacing: "3px" }}
          >
            Our Menu & Pricing
          </h4>
          <h1 className="md:text-5xl text-5xl font-bold mb-4">
            Competitive Pricing
          </h1>
        </div>
      </div>
      {loading ? (
        <div className=" flex justify-center items-center relative top-0 left-0 h-[50vh] w-fit  mx-auto">
          <img src="loading.jpg" alt="" className="w-full h-full" />
        </div>
      ) : (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 hover:drop-shadow-2xl rounded-lg w-full max-w-[90%] sm:max-w-full md:max-w-[70%] mx-auto"
              >
                <div data-aos="fade-right">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>

                <div data-aos="fade-left" className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div data-aos="fade-left">
                  <span className="text-orange-500 font-bold text-3xl mx-4">
                    30$
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
