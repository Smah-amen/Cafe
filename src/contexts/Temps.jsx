/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Vision from "../components/About/Vision";
import ContactForm from "../components/Contact/ContactForm";
import HeaderPage from "../components/Home/Header";
import Hero from "../components/Hero";
import CuffeeCup from "../components/Home/CoffeeCup/CoffeeCup";
import useScreenshot from "../components/Templates/Screenshot";

export const TempsData = createContext();
export default function TempsProvider({ children }) {
  const { images, createScreenshot } = useScreenshot();
  const [temps, setTemps] = useState([
    { route: "about", name: "about", screenShot: "", content: Vision },
    {
      route: "contact",
      name: "contact",
      screenShot: "",
      content: ContactForm,
    },
    {
      route: "hero1",
      name: "hero section 1",
      screenShot: "",
      content: HeaderPage,
    },
    {
      route: "hero2",
      name: "hero section 2",
      screenShot: "",
      content: Hero,
      props: { name: "templates" },
    },
    {
      route: "cup",
      name: "coffee components",
      screenShot: "",
      content: CuffeeCup,
    },
  ]);
  useEffect(() => {
    const captureScreenshots = async () => {
      const updatedTemps = await Promise.all(
        temps.map(async (page) => {
          page.screenShot = await createScreenshot(
            () => <page.content name={"templates"} shot={true} />,
            page.name
          );
          return page;
        })
      );
      return updatedTemps;
    };
    async function testcall() {
      const storedTemps = localStorage.getItem("temps");
      if (
        !storedTemps ||
        JSON.parse(storedTemps).some((temp) => temp.screenShot.length === 0)
      ) {
        const newTemps = await captureScreenshots();
        setTemps(newTemps);
        localStorage.setItem("temps", JSON.stringify(newTemps));
      } else {
        setTemps(JSON.parse(storedTemps));
      }
    }
    testcall();
  }, []);
  return <TempsData.Provider value={temps}>{children}</TempsData.Provider>;
}
