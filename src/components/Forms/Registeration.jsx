import { useLocation } from "react-router";
import Forms from "./Forms";
import Design from "./Design";
import { useEffect } from "react";

export default function Registeration({ setBold, noNavBar }) {
  const location = useLocation().pathname.split("/")[1];

  useEffect(() => {
    setBold(noNavBar);
  }, [noNavBar, setBold]);

  const signUpArray = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
    },
  ];

  const logInArray = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Forms
        type={location}
        design={Design().default}
        items={location === "signup" ? signUpArray : logInArray}
      />
    </div>
  );
}
