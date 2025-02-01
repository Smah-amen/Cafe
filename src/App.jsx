import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Forms/Registeration";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import { NotFound } from "./components/NotFound";
import Contact from "./components/Contact/Contact";
import CoffeeDetails from "./components/Menu/CoffeeDetails";
import Transition from "./components/PageTransition/Transition";
import { revealTransition } from "./components/PageTransition/Animation";
import Cart from "./components/checkout/Cart";

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
    revealTransition().then(() => {
      gsap.set(".ptr-block", { visibility: "hidden" });
    });

    scrollTo(0, 0);
    setBold(
      routes.find((route) =>
        route.path === location.pathname ? route : route.path == "*"
      )?.noNavBar
    );
    // routes.map((route) => {
    //   route.path === location.pathname && route.noNavBar && setBold(true);
    // });
  }, [location.pathname]);

  const routes = [
    { noNavBar: false, path: "/", element: <Home /> },
    { noNavBar: false, path: "/menu", element: <Menu /> },
    { noNavBar: false, path: "/about", element: <About /> },
    { noNavBar: false, path: "/contact", element: <Contact /> },
    { noNavBar: false, path: "/cart/:id", element: <Cart /> },
    { noNavBar: false, path: "/CoffeeDetails/:id", element: <CoffeeDetails /> },
    { noNavBar: true, path: "/login", element: <Registration /> },
    { noNavBar: true, path: "/signup", element: <Registration /> },
    { noNavBar: true, path: "*", element: <NotFound /> },
  ];

  return (
    <>
      <Transition />
      {!bold && <Navbar />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Registration />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/CoffeeDetails/:id" element={<CoffeeDetails />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {!bold && <Footer />}
    </>
  );
};

export default App;
