import { useLocation } from "react-router";
import Forms from "./Forms";
import Design from "./Design";
import { useEffect } from "react";
export default function Registeration({ setBold, noNavBar }) {
  const location = useLocation().pathname.split("/")[1];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e);

  // };
  useEffect(() => {
    setBold(noNavBar);
  });

  return (
    <div className="overflow-hidden">
      <div>
        <Forms
          type={location}
          design={Design().default}
          items={
            location === "signup"
              ? [
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
                ]
              : [
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
                ]
          }
        />
      </div>
    </div>
  );
}
