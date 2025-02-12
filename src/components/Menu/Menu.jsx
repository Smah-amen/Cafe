import CardComponent from "./CardComponent";
import Hero from "../Hero";
import { useEffect } from "react";
import CoffeeCup from "../Home/CoffeeCup/CoffeeCup.jsx";


const Menu = ({ setBold, noNavBar }) => {
  useEffect(() => {
    setBold(noNavBar);
  });
  return (
    <div>
      <Hero name={"Menu"} />
      <CardComponent />
        <CoffeeCup />
    </div>
  );
};

export default Menu;
