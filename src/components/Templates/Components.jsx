/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useScreenshot from "./Screenshot";
import Vision from "../About/Vision";
import ContactForm from "../Contact/ContactForm";
import HeaderPage from "../Home/Header";
import Hero from "../Hero";

export default function Components() {
  const { images, createScreenshot } = useScreenshot();

  const [temps, setTemps] = useState([
    { route: "/about", name: "about", content: <Vision shot={true} /> },
    {
      route: "/contact",
      name: "contact",
      content: <ContactForm shot={true} />,
    },
    {
      route: "/hero1",
      name: "hero section 1",
      content: <HeaderPage shot={true} />,
    },
    {
      route: "/hero2",
      name: "hero section 2",
      content: <Hero name={"templates"} shot={true} />,
    },
  ]);

  useEffect(() => {
    const captureScreenshots = async () => {
      temps.map(
        async (page) =>
          (page.screenShot = await createScreenshot(
            () => page.content,
            page.name
          ))
      );
    };
    captureScreenshots();
  }, []);

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
            <div key={index} className="bg-slate-100 rounded-lg p-7 pb-4">
              <div className="w-72 h-60 rounded-xl flex justify-center items-center overflow-hidden">
                <img
                  src={item?.screenShot}
                  className="w-fit h-fit"
                  loading="lazy"
                  alt={item.name}
                />
              </div>
              <p className="text-center mt-4 capitalize">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
