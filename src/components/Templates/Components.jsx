/* eslint-disable no-unused-vars */
import { useContext } from "react";
import CustomLink from "../CustomLink";
import { TempsData } from "../../contexts/Temps";

export default function Components() {
  const temps = useContext(TempsData);
  return (
    <div className="container mx-auto py-16 overflow-hidden">
      <div className="">
        <div
          data-aos="fade-zoom-in"
          data-aos-delay="200"
          className="relative pt-28 pb-9 text-center after:absolute after:content-start after:w-[2px] after:h-[100px] after:top-0 after:left-[50%] after:ms[1px] after:bg-[#DA9F5B]"
        >
          <h4
            className="text-primary uppercase text-2xl font-medium mb-2"
            style={{ letterSpacing: "5px" }}
          >
            Components
          </h4>
        </div>
        <div className="flex justify-evenly flex-wrap gap-y-9 gap-5 my-3">
          {temps.map((item, index) => (
            <CustomLink
              key={index}
              to={{
                pathname: `/components/${item.route}`,
                state: { component: item.route, props: item?.props },
              }}
              className="bg-slate-100 rounded-lg p-7 pb-4"
            >
              <div className="w-72 h-60 rounded-xl flex justify-center items-center overflow-hidden">
                <img
                  src={item?.screenShot}
                  className="w-fit h-fit"
                  loading="lazy"
                  alt={item.name}
                />
              </div>
              <p className="text-center mt-4 capitalize">{item.name}</p>
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
}
