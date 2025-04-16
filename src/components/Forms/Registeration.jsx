/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
import Forms from "./Forms";
import Design from "./Design";
import { useEffect } from "react";
export default function Registeration({ setBold, noNavBar }) {
  const location = useLocation().pathname.split("/")[1];
  useEffect(() => {
    setBold(noNavBar);
  });

  const signUpArray = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

  const logInArray = [
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div>
        <Forms
          type={location}
          design={Design().default}
          items={location === "signup" ? signUpArray : logInArray}
        />
      </div>
    </div>
  );
}
