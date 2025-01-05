import React from "react";
import Services from "./Servics/Services";
import Banner from "./Banner/Banner";
import CoffeeCup from "./CoffeeCup/CoffeeCup";
import Testimonials from "./Testimonials/Testimonials";
import AppSection from "./AppSection/AppSection";
import HeroDetails from "../HeroDetails";
// import HeaderPage from "./Header";

const Home = () => {
  return (
    <>
      <HeroDetails />
{/* <HeaderPage/> */}
      <Services />
      <CoffeeCup />
      <Banner />
      <AppSection />
      <Testimonials />
    </>
  );
};

export default Home;
