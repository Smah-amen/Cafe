import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <div>
            <NavLink
              to="/"
              className="font-bold text-xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src="logo.jpg" alt="Logo" className="w-12 rounded-full" />
              Coffe Cafe
            </NavLink>
          </div>

          <div className="flex justify-between items-center gap-4">
            <ul className="hidden items-center sm:flex gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `inline-block text-xl py-4 px-4 ${
                      isActive ? "text-white/100" : "text-white/70"
                    } duration-200`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `inline-block text-xl py-4 px-4 ${
                      isActive ? "text-white/100" : "text-white/70"
                    }  duration-200`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `inline-block text-xl py-4 px-4 ${
                      isActive ? "text-white/100" : "text-white/70"
                    }  duration-200`
                  }
                >
                  Menu
                </NavLink>
              </li>
            </ul>
            <Link to="/order">
              <button className="bg-primary/100 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
                order
                <FaCoffee className="text-xl cursor-pointer" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
