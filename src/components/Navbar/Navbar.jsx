import React from "react";
import { FaCoffee } from "react-icons/fa";

const menues = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Menu",
    path: "/menu",
  },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <div className="">
            <a
              href=""
              className="font-bold text-xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src="logo.jpg" alt="" className="w-12 rounded-full" />
              Coffe Cafe{" "}
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden items-center sm:flex gap-4">
              {menues.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/100 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
