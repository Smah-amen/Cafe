import React, { useState } from "react";
import { FaCoffee, FaTimes } from "react-icons/fa";
import { CgMenuOreos } from "react-icons/cg";

import CustomLink from "../CustomLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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

          <ul className="hidden sm:flex items-center gap-4">
            <li>
              <CustomLink
                to="/"
                className="inline-block text-2xl py-4 px-4 duration-200 font-cursive"
                isActive="text-white/100"
                isNotActive="text-white/70"
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/about"
                className="inline-block text-2xl py-4 px-4 duration-200 font-cursive"
                isActive="text-white/100"
                isNotActive="text-white/70"
              >
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/menu"
                className="inline-block text-2xl py-4 px-4 duration-200 font-cursive"
                isActive="text-white/100"
                isNotActive="text-white/70"
              >
                Menu
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/contact"
                className="inline-block text-2xl py-4 px-4 duration-200 font-cursive"
                isActive="text-white/100"
                isNotActive="text-white/70"
              >
                Contact Us
              </CustomLink>
            </li>
          </ul>

          <CustomLink to="/login">
            <button className=" bg-primary/100 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3 font-cursive ">
              Order
              <FaCoffee className="text-2xl cursor-pointer" />
            </button>
          </CustomLink>

          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <CgMenuOreos />}
            </button>
          </div>

        </div>

        {isMenuOpen && (
          <ul className="sm:hidden flex flex-col items-center mt-4 gap-4 bg-secondary/90 p-4 rounded-lg shadow-md">
            <li>
              <CustomLink
                to="/"
                className="inline-block text-xl py-4 px-4 duration-200 font-cursive "
                isActive="text-white/100"
                isNotActive="text-white/70"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/about"
                className="inline-block text-xl py-4 px-4 duration-200 font-cursive "
                isActive="text-white/100"
                isNotActive="text-white/70"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/menu"
                className="inline-block text-xl py-4 px-4 duration-200b font-cursive "
                isActive="text-white/100"
                isNotActive="text-white/70"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/contact"
                className="inline-block text-xl py-4 px-4 duration-200 fo"
                isActive="text-white/100"
                isNotActive="text-white/70"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </CustomLink>
            </li>
          </ul>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
