import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import HeaderPage from "./components/Home/Header";
import Menu from "./components/Menu";
import About from "./components/About";
import { NotFound } from "./components/NotFound";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderPage />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
