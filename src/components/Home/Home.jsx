import React, { useEffect } from "react";
import Services from "./Servics/Services";
import Banner from "./Banner/Banner";
// import CoffeeCup from "./CoffeeCup/CoffeeCup";
import Testimonials from "./Testimonials/Testimonials";
import AppSection from "./AppSection/AppSection";
import HeroDetails from "../HeroDetails";
import CoffeeSection from "../CoffeeSection";
import HeaderPage from "./Header";
import Services2 from "./Servics/Services2";

const Home = ({ setBold, noNavBar }) => {
  useEffect(() => {
    setBold(noNavBar);
  });
  return (
    <>
      <HeroDetails />
      <CoffeeSection />
      <HeaderPage />
      {/* <CoffeeCup /> */}

      <Banner />
      <Services />
      <AppSection />
      <Testimonials />
    </>
  );
};

export default Home;
