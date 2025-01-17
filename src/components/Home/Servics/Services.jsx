import { useState, useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";

const Services = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get("https://api.sampleapis.com/coffee/hot");
      setData(resp.data);
    } catch (err) {
      setData([{ title: "Error", image: "error-image.jpg" }]);
    }
  };

  useEffect(() => {
    getData();
    AOS.init();
  }, []);

  return (
    <div className="pt-20 pb-10  ">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-6xl pt-3 font-cursive font-bold text-center text-primary"
          >
            Best Coffee For You
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-yellow-700 w-[35%] h-1 container mx-auto"
          ></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {data.slice(0, 6).map((coffee, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              className="max-w-[420px] bg-white  overflow-hidden group"
            >
              <div className="absolute top-2 left-2 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                50% off - $2.50
              </div>

              <img
                src={coffee.image}
                alt={coffee.title}
                className="w-full h-[320px] border-4 border-slate-100 shadow-md rounded-xl  object-cover  group-hover:scale-105 duration-300"
              />

              <div className="p-4 text-center">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl text-primary font-bold mb-2">
                    {coffee.title}
                  </h2>
                  <p className="text-primary text-lg font-bold">$5.00</p>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3 ">
                  {coffee.description}
                </p>
                <div className="flex justify-start gap-3 items-start">
                  <button className="bg-primary text-white px-4 py-2 rounded-full">
                    Order Now
                  </button>
                  <button className="bg-primary text-white px-4 py-2 rounded-full">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
