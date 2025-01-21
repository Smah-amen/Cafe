import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Registration from "./components/Forms/Registeration";
import Menu from "./components/Menu";
import About from "./components/About/About";
import { NotFound } from "./components/NotFound";
import Contact from "./components/Contact/Contact";
import CoffeeDetails from "./components/CoffeeDetails";

const App = () => {
  const location = useLocation();
  const [bold, setBold] = useState(false);
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    scrollTo(0, 0);
    location.pathname === "/login" || location.pathname === "/signup"
      ? setBold(false)
      : setBold(true);
  }, [location.pathname]);
  return (
    <div className="">
      {bold && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Registration />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/CoffeeDetails/:id" element={<CoffeeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {bold && <Footer />}
    </div>
  );
};

export default App;
