import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GiCoffeeBeans } from "react-icons/gi";

import Hero from "../Hero.jsx";
import { animateTransition } from "../PageTransition/Animation.jsx";
// import HeroDetails from "./HeroDetails";
// import HeaderPage from "./Home/Header";

const bgImage = {
  backgroundImage: `url('/back.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const CoffeeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.sampleapis.com/coffee/hot/${id}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      setTimeout(() => {
        animateTransition().finally(() => {
          navigate("/oops!");
        });
      }, 3000);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center relative top-0 left-0 h-[50vh] w-fit mx-auto">
          <img
            loading="lazy"
            src="/loading.jpg"
            alt="Loading"
            className="w-full h-full"
          />
        </div>
      ) : (
        <>
          <Hero
            name={data?.title}
            prevRoute={[
              { name: "home", route: "/" },
              { name: "menu", route: "/menu" },
            ]}
          />
          <div>
            {/* <HeaderPage/> */}
            {/* <HeroDetails /> */}
            <div style={bgImage} className="container mx-auto py-4 px-4">
              <div className="grid grid-cols-1 shadow-2xl lg:grid-cols-2 overflow-hidden max-w-7xl mx-auto">
                <div className="p-2">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="rounded-md w-[500px] h-[500px]"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="bg-primary text-white py-1 px-4 rounded-full text-base tracking-wide">
                      Coffee Bag
                    </span>
                    <h1 className="text-4xl font-bold mt-4 text-gray-800">
                      {data.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="line-through text-gray-400 text-sm">
                        $49.00 USD
                      </span>
                      <span className="text-xl font-bold text-teal-600">
                        $39.00 USD
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <button className="ml-4 bg-primary  text-white px-6 py-2 text-sm rounded-md flex items-center gap-2">
                      Add to Cart
                      <span className="material-icons">
                        <GiCoffeeBeans />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CoffeeDetails;
