import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { BiSolidQuoteRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 630,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get("https://api.sampleapis.com/coffee/hot");
      setData(resp.data);
    } catch (err) {
      setData([{ title: "Error", description: err.message }]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div data-aos="zoom-in" className="container mx-auto mb-10">
      <h1 className="text-center text-4xl font-bold text-primary font-cursive mt-6 mb-7">
        Testimonials
      </h1>
      <div className="slider-container w-full">
        <Slider {...settings}>
          {data.slice(0, 7).map((item, index) => (
            <div key={item.id || index} className="px-4 pb-4">
              <div className="rounded-xl bg-gray-100 p-5 relative">
                <div className="absolute top-0 right-0 text-black/5 text-[200px] font-serif">
                  <BiSolidQuoteRight />
                </div>
                <div className="flex justify-start items-center mb-4">
                  <img
                    src={item.image}
                    className="w-24 h-24 rounded-full  "
                    alt={item.title}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-4 h-12">
                    {item.description}
                  </p>
                  <p className="text-xl font-bold text-black/60 font-cursive">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
