import { useState, useEffect } from "react";
import axios from "axios";

const Services = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get("https://api.sampleapis.com/coffee/hot");
      console.log(resp.data);

      setData(resp.data);
    } catch (err) {
      setData([{ title: "Error", description: err.message }]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-10 pb-12 bg-gray-100">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-cursive font-bold text-center text-primary">
            Best Coffee For You
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {data.slice(0, 3).map((coffee, index) => (
            <div
              data-aos="fade-up"
              className="mb-8 md:mb-0"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-300 max-w-[300px] group relative p-5">
                <div className="w-32 h-32 mx-auto -mt-16 mb-5 rounded-full overflow-hidden">
                  <img
                    src={coffee.image}
                    alt={coffee.title}
                    className="w-full h-full rounded-full object-cover group-hover:scale-110 group-hover:rotate-12 duration-300"
                  />
                </div>

                <div className="text-center p-1">
                  <h2 className="font-bold text-xl mb-2">{coffee.title}</h2>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-4">
                    {coffee.description}
                  </p>
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
