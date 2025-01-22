/* eslint-disable react/prop-types */
import CustomLink from "./CustomLink";
export default function Hero({ name, prevRoute }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url('/bg-coffee.jpg')",
        minHeight: "400px",
      }}
      className="bg-top bg-no-repeat bg-cover overlay-bottom relative flex flex-col items-center justify-center"
    >
      <div className="">
        <div className="flex flex-col items-center justify-center tracking-widest">
          <h1
            data-aos="fade-up"
            className="md:text-6xl text-4xl font-bold leading-5 mb-4 mt-0 text-white uppercase"
          >
            {name}
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="inline-flex lg:mb-12 text-xl font-light"
          >
            {prevRoute ? (
              prevRoute.map((item, index) => (
                <div className="flex flex-wrap" key={index}>
                  <div className="m-0 text-white">
                    <CustomLink
                      className="capitalize text-slate-300/95 hover:text-white duration-300"
                      to={item.route}
                    >
                      {item.name}
                    </CustomLink>
                  </div>
                  <p className="m-0 text-white px-2">/</p>
                </div>
              ))
            ) : (
              <>
                <CustomLink
                  className="capitalize text-slate-300/95 hover:text-white duration-300"
                  to={"/"}
                >
                  home
                </CustomLink>
                <p className="m-0 text-white px-2">/</p>
              </>
            )}
            <p className="m-0 text-white capitalize">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
