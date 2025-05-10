/* eslint-disable react/prop-types */
import "./forms.css";
import CustomLink from "../CustomLink";
import { useEffect, useState } from "react";
import {
  valConfermPassword,
  valEmail,
  valName,
  valPassword,
} from "./FormValidation";

export default function Forms({ type, items, design }) {
  const [errorObj, setErrorObj] = useState([]);
  // const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(() => {
  //   if (type === "login") {
  //     const errors = {};

  //     items.forEach((item) => {
  //       const val = value[item.name];

  //       if (item.type === "email") {
  //         if (val.length === 0) {
  //           errors[item.name] = "Email is required";
  //         } else if (
  //           !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(val)
  //         ) {
  //           errors[item.name] = "Email is invalid";
  //         }
  //       }

  //       if (item.type === "password") {
  //         if (val.length === 0) {
  //           errors[item.name] = "Password is required";
  //         } else if (val.length < 8) {
  //           errors[item.name] = "Password must be at least 8 characters";
  //         } else if (!/[a-z]/g.test(val)) {
  //           errors[item.name] = "At least one lowercase letter";
  //         } else if (!/[A-Z]/g.test(val)) {
  //           errors[item.name] = "At least one uppercase letter";
  //         } else if (!/\d/g.test(val)) {
  //           errors[item.name] = "At least one digit";
  //         } else if (!/[@$!%*?&]/g.test(val)) {
  //           errors[item.name] = "At least one special character (@$!%*?&)";
  //         }
  //       }
  //     });
  //     setErrorObj(errors);
  //   }
  // }, [value, type, items]);

  function removeErrors(errorName) {
    setErrorObj((prev) => [
      ...prev.filter((item) => Object.keys(item)[0] !== errorName),
    ]);
  }

  function errorHandler(error) {
    setErrorObj((prev) => [...prev, error]);
  }
  function validation(e) {
    e.preventDefault();
    setErrorObj([]);
    const inputs = Array.from(e.target).filter((item) =>
      items.map((input) => input.type).includes(item.type)
    );
    // Signup Validation
    if (type === "signup") {
      inputs.forEach((input) => {
        switch (input.type) {
          case "text":
            valName(input.value, input.name, errorHandler, removeErrors);
            break;
          case "email":
            valEmail(input.value, input.name, errorHandler, removeErrors);
            break;
          case "password":
            if (input.name === "password") {
              valPassword(input.value, input.name, errorHandler, removeErrors);
            } else {
              valConfermPassword(
                input.value,
                e.target.password.value,
                input.name,
                errorHandler,
                removeErrors
              );
            }
            break;
          default:
            // Handle default case if needed
            break;
        }
      });
    }
    // Login validation
    if (type === "login") {
      inputs.forEach((input) => {
        switch (input.type) {
          case "email":
            valEmail(input.value, input.name, errorHandler, removeErrors);
            break;
          case "password":
            valPassword(input.value, input.name, errorHandler, removeErrors);
            break;
          default:
            // Handle default case if needed
            break;
        }
      });
    }

    if (errorObj.length > 0) {
      console.log("SignUp or LogIn based on the type (LogIn or SignUp)");
    }
    console.log("Sending Data");
  }
  console.log(errorObj);

  return (
    <>
      {type === "login" ? (
        <design.formWrap type={type} validation={validation}>
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={500 * (index + 1.8)}
              data-aos-duration={1100 + (index + 1)}
              className={design?.inputField?.container}
            >
              {design.name === "modern" &&
                errorObj.length !== 0 &&
                errorObj
                  .filter((err) => Object.keys(err).includes(item.name))
                  .map((err, index) => (
                    <div key={index} className="w-full text-start">
                      <span className="text-red-500">{err[item.name]}</span>
                    </div>
                  ))}
              <input
                type={item?.type}
                className={design?.inputField?.input}
                placeholder={item?.placeholder}
                style={design?.inputField?.inputStyle}
                required
                name={item?.name}
                value={value[item.name]}
                onChange={(e) => {
                  setValue({ ...value, [item.name]: e.target.value });
                }}
                onBlur={(e) => {
                  item.validationFunction(
                    e.target.value,
                    item.name,
                    errorHandler,
                    removeErrors
                  );
                }}
              />
              {design.name === "default" &&
                errorObj.length !== 0 &&
                errorObj
                  .filter((err) => Object.keys(err).includes(item.name))
                  .map((err, index) => (
                    <div key={index} className="w-full text-start">
                      <span className="text-red-300 italic">
                        {err[item.name]}
                      </span>
                    </div>
                  ))}

              {design.name !== "default" && (
                <span className={design?.inputField?.label}>{item.label}</span>
              )}
            </div>
          ))}
          <div className={design?.navigation?.container}>
            <button
              data-aos="fade-up"
              data-aos-delay="1700"
              data-aos-duration="1000"
              className={design?.navigation?.button}
              type="submit"
            >
              {type}
            </button>
            <div
              data-aos="fade-up"
              data-aos-delay="1900"
              data-aos-duration="900"
              className={design?.navigation?.anotherOtion?.text}
            >
              Don&apos;t have an account,{" "}
              <CustomLink
                className={design?.navigation?.anotherOtion?.link}
                to={"/signup"}
              >
                sign up
              </CustomLink>
            </div>
            {design.name === "default" && (
              <div
                data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="800"
                className="mt-5"
              >
                <CustomLink
                  to={"/"}
                  className="underline underline-offset-2 duration-300 text-white hover:text-[#DA9F5B] capitalize"
                >
                  back to home
                </CustomLink>
              </div>
            )}
          </div>
        </design.formWrap>
      ) : (
        <design.formWrap type={type} validation={validation}>
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={500 * (index + 2)}
              data-aos-duration={1300 + (index + 1)}
              className={design?.inputField?.container}
            >
              {design.name === "modern" &&
                errorObj.length !== 0 &&
                errorObj
                  .filter((err) => Object.keys(err).includes(item.name))
                  .map((err, index) => (
                    <div key={index} className="w-full text-start">
                      <span className="text-red-500">{err[item.name]}</span>
                    </div>
                  ))}
              <input
                placeholder={item?.placeholder}
                className={design?.inputField?.input}
                type={item?.type}
                style={design?.inputField?.inputStyle}
                name={item?.label.toLowerCase()}
                required
                value={value[item.name]}
                onChange={(e) => {
                  setValue({ ...value, [item.name]: e.target.value });
                }}
                onBlur={(e) => {
                  item.validationFunction(
                    e.target.value,
                    item.name,
                    errorHandler,
                    removeErrors,
                    item.name == "confirmPassword" && value["password"]
                  );
                }}
              />
              {design.name === "default" &&
                errorObj.length !== 0 &&
                errorObj
                  .filter((err) => Object.keys(err).includes(item.name))
                  .map((err, index) => (
                    <div key={index} className="w-full text-start">
                      <span className="text-red-500">{err[item.name]}</span>
                    </div>
                  ))}
              {design.name !== "default" && (
                <span className={design?.inputField?.label}>{item.label}</span>
              )}
            </div>
          ))}
          <div
            data-aos="fade-up"
            data-aos-delay="2800"
            data-aos-duration="1300"
            className={design?.navigation?.container}
          >
            <button type="submit" className={design?.navigation?.button}>
              sign up
            </button>
            <div className={design?.navigation?.anotherOtion?.text}>
              Already have an account,{" "}
              <CustomLink
                className={design?.navigation?.anotherOtion?.link}
                to={"/login"}
              >
                login
              </CustomLink>
            </div>
            {design.name === "default" && (
              <div className="mt-5">
                <CustomLink
                  to={"/"}
                  className="underline underline-offset-2 duration-300 text-white hover:text-[#DA9F5B] capitalize"
                >
                  back to home
                </CustomLink>
              </div>
            )}
          </div>
        </design.formWrap>
      )}
    </>
  );
}
