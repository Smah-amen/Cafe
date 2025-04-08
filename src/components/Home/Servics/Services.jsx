import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import jsonData from "../../Data/Data.json";
import CustomLink from "../../CustomLink";
import CoffeeDetails from "../../Menu/CoffeeDetails";
const Services = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setData(jsonData);
      setLoading(false);
    } catch (err) {
      setData([{ title: "Error", image: "error-image.jpg" }]);
    }
  };

  useEffect(() => {
    getData();
    // setLoading(true);
    AOS.init();
  }, []);

  return (
    <div className="pt-20 pb-10  ">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-6xl pt-3 font-cursive font-bold text-center text-primary "
          >
            Best Coffee For You
          </h1>
          {/* <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-yellow-700 w-[35%] h-1 container mx-auto"
          ></p> */}
        </div>

        {loading ? (
          <div className="flex justify-center items-center relative top-0 left-0 h-[50vh] w-fit mx-auto">
            <img
              loading="lazy"
              src="loading.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-8 justify-items-center">
            {data.slice(0, 6).map((coffee, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="max-w-[420px] border-4 border-slate-100 shadow-md rounded-xl bg-white overflow-hidden group"
              >
                <div className="absolute top-2 left-2 duration-300 z-10 bg-[#317048] text-white text-sm font-bold px-2 py-1 rounded-full">
                  50% off - $2.50
                </div>
                <div className="h-[350px] overflow-hidden">
                  <img
                    src={coffee.image}
                    alt={coffee.title}
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                  />
                </div>

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
                    <CustomLink to={{ pathname: `/cart`, state: coffee.id }}>
                    <button class="border-2 border-amber-700 text-amber-700 hover:text-base  font-semibold py-2 px-5 rounded-xl transition hover:scale-105 duration-300">
                    Order Now
                      </button>
                    </CustomLink>
                    <CustomLink to={`/coffeeDetails/${coffee.id} `}>
                      <button className="bg-primary border hover:border-amber-700 hover:text-amber-700 hover:bg-white text-white px-4 py-2 rounded-lg hover:scale-105 duration-200">
                        Details
                      </button>
                    </CustomLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
