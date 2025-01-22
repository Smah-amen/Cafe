import { Link, NavLink } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import CustomLink from "../CustomLink";

const Navbar = () => {
  return (
    // <div className="bg-secondary/30  text-white  shadow-md rounded-full  absolute top-1 left-1/2 transform -translate-x-1/2 w-[90%] z-10 ">
    <div className="bg-secondary text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <div>
            <CustomLink
              to="/"
              className="font-bold text-xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img
                loading="lazy"
                src="logo.jpg"
                alt=""
                className="w-12 rounded-full"
              />
              Coffe Cafe
            </CustomLink>
          </div>

          <div className="flex justify-between items-center gap-4">
            <ul className="hidden items-center sm:flex gap-4">
              <li>
                <CustomLink
                  to="/"
                  className="inline-block text-xl py-4 px-4 duration-200"
                  isActive="text-white/100"
                  isNotActive="text-white/70"
                >
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/about"
                  className="inline-block text-xl py-4 px-4 duration-200"
                  isActive="text-white/100"
                  isNotActive="text-white/70"
                >
                  About
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/menu"
                  className="inline-block text-xl py-4 px-4 duration-200"
                  isActive="text-white/100"
                  isNotActive="text-white/70"
                >
                  Menu
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/contact"
                  className="inline-block text-xl py-4 px-4 duration-200"
                  isActive="text-white/100"
                  isNotActive="text-white/70"
                >
                  Contact Us
                </CustomLink>
              </li>
            </ul>
            {/* Check on the local storage to find tokin */}
            <CustomLink to="/login">
              <button className="bg-primary/100 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
                Order
                <FaCoffee className="text-xl cursor-pointer" />
              </button>
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
