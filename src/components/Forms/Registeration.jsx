import { useLocation } from "react-router";
import Forms from "./Forms";
import Design from "./Design";
export default function Registeration() {
  const location = useLocation().pathname.split("/")[1];

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
                ]
              : [
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
                ]
          }
        />
      </div>
    </div>
  );
}
