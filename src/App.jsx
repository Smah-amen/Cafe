import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Footer from "./components/Footer/Footer";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      // once: true,
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
    
    
      <Footer />
    </div>
  );
};

export default App;
