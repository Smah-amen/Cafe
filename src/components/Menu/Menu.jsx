import CardComponent from "./CardComponent";
import Hero from "../Hero";
import { useEffect } from "react";

const Menu = ({ setBold, noNavBar }) => {
  useEffect(() => {
    setBold(noNavBar);
  });
  return (
    <div>
      <Hero name={"Menu"} />
      <CardComponent />
    </div>
  );
};

export default Menu;
