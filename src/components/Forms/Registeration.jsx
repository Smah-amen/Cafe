import { useLocation } from "react-router";
import Forms from "./Forms";
import Design from "./Design";
import { useEffect } from "react";
import {
  valConfermPassword,
  valEmail,
  valName,
  valPassword,
} from "./FormValidation";

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
      validationFunction: valName,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validationFunction: valEmail,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      validationFunction: valPassword,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      validationFunction: valConfermPassword,
    },
  ];

  const logInArray = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validationFunction: valEmail,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      validationFunction: valPassword,
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
