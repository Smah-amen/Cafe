import { useState, useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";



const bgImage = {
  backgroundImage: `url('/back.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
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
    <div
    className="pt-20 pb-10 shadow-md  ">
      <div
      
    // style={bgImage}
       className="container">
     
        <div className="text-center mb-14">
          <h1 
          data-aos= "fade-right"
          data-aos-delay="200"
          className="text-6xl pt-3 font-cursive font-bold text-center text-primary">
            Best Coffee For You
          </h1>
          <p
          data-aos="fade-up"
          data-aos-delay="100"
         className=" bg-yellow-700 w-[35%] h-1 container mx-auto"></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {data.slice(0, 4).map((coffee, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relativ container mx-auto min-h-[300px] bg-white shadow-lg rounded-lg overflow-hidden max-w-[400px]  duration-300 hover:scale-105 group"
            >
              <div className="absolute top-3 left-3 bg-gold text-white text-lg font-bold px-3 py-1 rounded-md shadow-md">
                30% OFF
              </div>

              <div className="w-full h-65 py-2  overflow-hidden">
                <img
                  src={coffee.image}
                  alt={coffee.title}
                  className=" object-cover rounded-md group-hover:scale-110 duration-300"
                />
              </div>

              <div className="p-4 text-center">
                <h2 className="font-bold text-xl">{coffee.title}</h2>
                <p className="text-primary text-lg font-bold mt-2">$25</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
