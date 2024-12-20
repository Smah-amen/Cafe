import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="zoom-in" className="container mx-auto mb-10">
      <h1 className="text-center text-4xl font-bold text-primary font-cursive mt-6 mb-7">
        Testimonials
      </h1>
      <div className="slider-container w-full">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="px-4 pb-4">
              <div>
                <div className="rounded-xl bg-gray-100 p-5">
                  <div className="flex justify-between">
                    <div className="p-3">
                      <img
                        className="size-24 rounded-full"
                        src="https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-black/20 text-9xl font-serif pb-5 h-36">
                        ,,
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat alias maxime modi odio deserunt, reprehenderit
                      corrupti laborum similique reiciendis ad
                    </p>
                    <p className="text-xl font-bold text-black/60 font-cursive">
                      Lorem ipsum
                    </p>
                  </div>
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
