import { useState } from "react";
import { FaCoffee, FaTimes } from "react-icons/fa";
import { LuMenu, LuShoppingCart } from "react-icons/lu";

import CustomLink from "../CustomLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = {
    brand: {
      contentLg: (
        <CustomLink
          to="/"
          className="font-bold text-xl sm:text-2xl flex justify-center items-center gap-2 tracking-wider font-cursive"
        >
          <img
            loading="lazy"
            src="logo.jpg"
            alt=""
            className="w-12 rounded-full"
          />
          Coffe Cafe
        </CustomLink>
      ),
      contentSm: (
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
        </CustomLink>
      ),
    },
    pages: [
      {
        content: (
          <CustomLink
            onClick={() => setIsOpen(false)}
            to="/"
            className="inline-block text-xl font-medium py-4 px-4 duration-200"
            isActive="text-white/100"
            isNotActive="text-white/70"
          >
            Home
          </CustomLink>
        ),
      },
      {
        content: (
          <CustomLink
            onClick={() => setIsOpen(false)}
            to="/about"
            className="inline-block text-xl font-medium py-4 px-4 duration-200"
            isActive="text-white/100"
            isNotActive="text-white/70"
          >
            About
          </CustomLink>
        ),
      },
      {
        content: (
          <CustomLink
            onClick={() => setIsOpen(false)}
            to="/menu"
            className="inline-block text-xl font-medium py-4 px-4 duration-200"
            isActive="text-white/100"
            isNotActive="text-white/70"
          >
            Menu
          </CustomLink>
        ),
      },
      {
        content: (
          <CustomLink
            onClick={() => setIsOpen(false)}
            to="/contact"
            className="inline-block text-xl font-medium py-4 px-4 duration-200"
            isActive="text-white/100"
            isNotActive="text-white/70"
          >
            Contact
          </CustomLink>
        ),
      },
      {
        content: (
          <CustomLink
            onClick={() => setIsOpen(false)}
            to="/templates"
            className="inline-block text-xl font-medium py-4 px-4 duration-200"
            isActive="text-white/100"
            isNotActive="text-white/70"
          >
            Templates
          </CustomLink>
        ),
      },
      {
        content: (
          <CustomLink
            onClick={() => setIsOpen(false)}
            to="/cart"
            className="inline-block text-xl font-medium py-4 px-4 duration-200"
            isActive="text-white/100"
            isNotActive="text-white/70"
          >
            <LuShoppingCart />
          </CustomLink>
        ),
      },
      {
        content: (
          <CustomLink
            className={"ps-4 py-4 lg:py-0"}
            onClick={() => setIsOpen(false)}
            to="/login"
          >
            <button className=" bg-primary/100 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order <FaCoffee className="text-xl font-medium cursor-pointer" />
            </button>
          </CustomLink>
        ),
      },
    ],
  };

  return (
    <>
      <nav className="bg-secondary text-white">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="w-full flex justify-between items-center">
            <div>{navLinks.brand.contentLg}</div>
            <button
              className="lg:hidden text-2xl border-none outline-none"
              onClick={() => setIsOpen(true)}
            >
              <LuMenu />
            </button>
          </div>
          <ul className="hidden lg:flex space-x-6 items-center gap-4">
            {navLinks.pages.map((link, index) => (
              <li key={index}>{link.content}</li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible z-40" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 overflow-auto bg-secondary/90 text-white shadow-md transform transition-transform lg:hidden ${
          isOpen ? "translate-x-0 z-50" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          {navLinks.brand.contentSm}
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {navLinks.pages.map((link, index) => (
            <li key={index}>{link.content}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
