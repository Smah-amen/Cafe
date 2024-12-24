import React from "react";
import HeaderPage from "./Header";
import Banner from "../Banner/Banner";
import CoffeeCup from "../CoffeeCup/CoffeeCup";
import Testimonials from "../Testimonials/Testimonials";
import AppSection from "../AppSection/AppSection";

const Home = () => {
  return (
    <>
 <HeaderPage/>
 <CoffeeCup />
      <Banner />
      <AppSection />
      <Testimonials />
    </>
   
  );
};

export default Home;
