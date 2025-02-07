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
    props?.onClick && props.onClick();
    if (to && !to?.includes("#") && to !== location.pathname) {
      setCurser("default");
      animateTransition().then(() => {
        navigate(to);
        setCurser("pointer");
      });
    }
  }
  function handelClickSpecial(e) {
    e.preventDefault();
    props?.onClick && props.onClick();
    if (
      to &&
      !to?.pathname?.includes("#") &&
      to?.pathname !== location.pathname &&
      to?.state
    ) {
      setCurser("default");
      animateTransition().then(() => {
        navigate(to.pathname, {
          state: to.state,
        });
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
      onClick={(e) =>
        typeof to === "object" ? handelClickSpecial(e) : handelClick(e)
      }
      style={{ cursor: curser }}
    >
      {children}
    </div>
  );
}
