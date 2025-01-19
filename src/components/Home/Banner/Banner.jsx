import { GiCoffeePot } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const Banner = () => {
  return (
    <div className="">
      <div className="container mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center ">
          <div
            data-aos="zoom-in-up"
            className="w-[80%] lg:w-[60%] h-auto relative"
          >
            <img
              src="coffee_bag2.png"
              alt="Coffee Bag"
              className="rounded-t-full  w-full"
            />
          </div>
        </div>

        <div className="space-y-8">
            <h1
              data-aos="fade-right"
              className="text-4xl sm:text-5xl font-cursive font-bold text-primary text-center lg:text-left"
            >
              Experience the Art of Coffee
            </h1>
            <p
              data-aos="fade-right"
              className="text-gray-700 text-lg leading-relaxed text-center lg:text-left"
            >
              Indulge in the rich flavors and aroma of premium coffee crafted
              with passion. Whether you prefer it hot, cold, or brewed to
              perfection, we have something to satisfy every coffee lover.
            </p>

            <div
              data-aos="fade-up"
              className="bg-[#f8f4f2] p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Coffee for Every Mood
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Coffee isn't just a drink; it's an experience. Explore the
                comforting embrace of a warm cup, the energizing kick of a cold
                brew, or the joy of sharing a coffee moment with loved ones.
              </p>
            </div>

            {/* <div
              data-aos="fade-up"
              className="bg-[#f8f4f2] p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Coffee for Every Mood
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Coffee isn't just a drink; it's an experience. Explore the
                comforting embrace of a warm cup, the energizing kick of a cold
                brew, or the joy of sharing a coffee moment with loved ones.
              </p>
            </div> */}

            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90">
                Learn More
              </button>
              <button className="bg-gray-200 text-primary px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300">
                Explore Menu
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;

