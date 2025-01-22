/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router";
import { animateTransition } from "./PageTransition/Animation";
import { useState } from "react";
export default function CustomLink({
  to,
  className,
  isActive,
  children,
  isNotActive,
  ...props
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [curser, setCurser] = useState("pointer");
  const Active = location.pathname === to;

  function handelClick(e) {
    e.preventDefault();
    if (to && !to.startsWith("#") && to !== location.pathname) {
      setCurser("default");
      animateTransition().then(() => {
        navigate(to);
        setCurser("pointer");
      });
    }
  }
  return (
    <div
      {...props}
      className={
        Active ? className + " " + isActive : className + " " + isNotActive
      }
      onClick={(e) => handelClick(e)}
      style={{ cursor: curser }}
    >
      {children}
    </div>
  );
}
