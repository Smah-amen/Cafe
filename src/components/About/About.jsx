import { useEffect } from "react";
import Hero from "../Hero";
import Vision from "./Vision";

const About = ({ setBold, noNavBar }) => {
  useEffect(() => {
    setBold(noNavBar);
  });
  return (
    <div className="">
      <Hero name={"about us"} />
      <Vision />
    </div>
  );
};

export default About;
