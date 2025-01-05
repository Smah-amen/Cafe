import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const HeaderPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white overflow-hidden">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text */}
          <div
            data-aos="fade-zoom-in"
            className="order-1 sm:order-0 flex flex-col justify-center gap-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
              {/* We are here to provide you with the best */}
              We serve the richest{" "}
              <span className="text-primary text-5xl font-bold px-2 font-cursive">
                Coffe
              </span>
              in the City
            </h1>
            <button className="bg-gradient-to-r w-60  from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
              Coffe now
            </button>
          </div>
          {/* image */}
          <div
            data-aos="fade-left"
            className=" min-h-[450px] px-5 overflow-hidden flex justify-center items-center order-0 sm:order-1 relative"
          >
            <img
              src="coffe3.png"
              // src="coffe3.jpg"
              alt=""
              className="w-[400px] rounded-full sm:w-[450px] sm:scale-110 
            mx-auto spin  "
            />
            <div className="text-primary font-semibold text-2xl font-cursive  absolute py-2 top-10 left-14 p-3 px-1 rounded-xl ">
              <h1> Welcome </h1>
            </div>
            <div
              className=" text-primary font-semibold text-2xl
          absolute bottom-10 right-0  py-2 px-0 font-cursive "
            >
              <h1> Enjoy your Coffee </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderPage;
