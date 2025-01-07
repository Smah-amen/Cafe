import { GiCoffeePot } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import vedio from "../../../assets/vadio.mp4";

// const bgImage = {
//   backgroundImage: `url('/bg1.jpg')`,
//   backgroundSize: "cover",
//   // backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   //   height: '100%',
//   //   width: '100%',
// };

const Banner = () => {
  return (
    <div className="pt-8 pb-10 shadow-md">
      <div className="container mx-auto py-12 lg:py-0 overflow-hidden">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2"> */}
        <div className="flex justify-center md:justify-between flex-wrap">
          {/* Image */}
          <div className="flex  items-center w-[50%]">
            <div data-aos="zoom-in-up" className="md:px-20 flex justify-center  h-[500px] w-[550px]">
              <video
                src={vedio}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-2xl"
              ></video>
              {/* <img
                src="cup3.jpg"
                alt=""
                className="min-w-64 w-[50%] h-fit my-14 rounded-t-full drop-shadow-xl"
              /> */}
            </div>
          </div>
          {/* Text */}
          <div className="min-w-80 w-[100%] md:w-[50%] px-5 md:px-0 flex flex-col justify-center gap-6 sm:pt-8 lg:pt-10 xl:pt-0">
            <h1
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-3xl sm:text-5xl font-cursive font-bold text-primary"
            >
              Premium Coffee Cafe
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-lg text-gray-700 tracking-wide leading-4 "
            >
              Our mission is to provide quality coffee to our customers We are
              here to provide you with the best
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-7">
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="flex items-center gap-3"
                >
                  <GiCoffeePot className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Premium Coffee</span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="flex items-center gap-3"
                >
                  <FaCoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Hot Coffee</span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="flex items-center gap-3"
                >
                  <SiBuymeacoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Cold Coffee</span>
                </div>
              </div>
              <div className="border-l-4 border-primary/50 pl-12 space-y-3">
                <h1
                  data-aos="fade-left"
                  data-aos-duration="3000"
                  className="text-3xl font-semibold font-cursive text-primary "
                >
                  Coffee lover
                </h1>
                <p
                  data-aos-duration="3000"
                  data-aos="fade-left"
                  className="text-gray-500 text-sm"
                >
                  Coffee, the aromatic elixir that kickstarts our mornings,
                  fuels our creativity, and warms our hearts, has a way of
                  weaving itself into the fabric of our lives. It's not just a
                  beverage; it's a companion that accompanies us through life's
                  highs and lows. Coffee lovers understand that it's more than
                  just a cup of joe; it's a source of comfort, inspiration and
                  connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
