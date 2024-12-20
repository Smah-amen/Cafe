import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Servics/Services";
import Banner from "./components/Banner/Banner";
import CoffeeCup from "./components/CoffeeCup/CoffeeCup";
import Testimonials from "./components/Testimonials/Testimonials";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      // mirror: true,
      // easing: 'ease-in-out',
      // delay: 100,
      // anchorPlacement: 'top-left',
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Home />
      <Services />
      {/* <CoffeeCup/> */}
      <Banner />
      <Testimonials />
    </div>
  );
};

export default App;
