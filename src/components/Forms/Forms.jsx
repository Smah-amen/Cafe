/* eslint-disable react/prop-types */
import "./forms.css";
import CustomLink from "../CustomLink";
import { useEffect, useState } from "react";

export default function Forms({ type, items, design }) {
  const [errorObj, setErrorObj] = useState([]);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (type === "login") {
      const errors = {};

      items.forEach((item) => {
        const val = value[item.name];

        if (item.type === "email") {
          if (val.length === 0) {
            errors[item.name] = "Email is required";
        
          }
          if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(val)) {
            errors[item.name] = "Email is invalid";
          }
        }

        if (item.type === "password") {
          if (val.length === 0) {
            errors[item.name] = "Password is required";}}
         
      });

      setErrorObj(errors);
    }
  }, [value, type, items]);

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
            if (!/^[a-zA-Z_]+$/g.test(input.value)) {
              errorHandler({ [input.name]: "Name must contain only letters." });
              console.log("Name must contain only letters.");
            }
            if (!/^.{3,20}$/g.test(input.value)) {
              errorHandler({
                [input.name]:
                  "Name must be more than 3 characters long and less than 20 characters long.",
              });
              console.log(
                "Name must be more than 3 characters long and less than 20 characters long."
              );
            }
            break;
          case "email":
            if (
              !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(
                input.value
              )
            ) {
              errorHandler({ [input.name]: "Email is invalid." });
              console.log("Email is invalid.");
            }
            break;
          case "password":
            if (input.name === "password") {
              if (!/[a-z]/g.test(input.value)) {
                errorHandler({ [input.name]: "At least one lowercase letter" });
                console.log("At least one lowercase letter");
              }
              if (!/[A-Z]/g.test(input.value)) {
                errorHandler({ [input.name]: "At least one uppercase letter" });
                console.log("At least one uppercase letter");
              }
              if (!/\d/g.test(input.value)) {
                errorHandler({ [input.name]: "At least one digit" });
                console.log("At least one digit");
              }
              if (!/[@$!%*?&]/g.test(input.value)) {
                errorHandler({
                  [input.name]: "At least one special character (@$!%*?&)",
                });
                console.log("At least one special character (@$!%*?&)");
              }
              if (!/^.{8,}$/g.test(input.value)) {
                errorHandler({ [input.name]: "Minimum 8 characters" });
                console.log("Minimum 8 characters");
              }
            } else {
              if (input.value !== e.target.password.value) {
                errorHandler({ [input.name]: "Passwords do not match." });
                console.log("Passwords do not match.");
              }
            }
            break;
          default:
            // Handle default case if needed
            break;
        }
      });
    }
    // Login validation
    // if (type === "login") {
    //   inputs.forEach((input) => {
    //     switch (input.type) {
    //       case "email":
    //         if (
    //           !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(
    //             input.value
    //           )
    //         ) {
    //           console.log("Email is invalid.");
    //         }
    //         break;
    //       case "password":
    //         if (input.name === "password") {
    //           if (!/[a-z]/g.test(input.value)) {
    //             console.log("At least one lowercase letter");
    //           }
    //           if (!/[A-Z]/g.test(input.value)) {
    //             console.log("At least one uppercase letter");
    //           }
    //           if (!/\d/g.test(input.value)) {
    //             console.log("At least one digit");
    //           }
    //           if (!/[@$!%*?&]/g.test(input.value)) {
    //             console.log("At least one special character (@$!%*?&)");
    //           }
    //           if (!/^.{8,}$/g.test(input.value)) {
    //             console.log("Minimum 8 characters");
    //           }
    //         }
    //         break;
    //       default:
    //         // Handle default case if needed
    //         break;
    //     }
    //   });
    // }

    if (errorObj.length > 0) {
      console.log("SignUp or LogIn based on the type (LogIn or SignUp)");
    }
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
              />
              {errorObj[item.name] && (
                <div className="w-full text-start">
                  <span className="text-red-500">{errorObj[item.name]}</span>
                </div>
              )}

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
                  .filter((err) =>
                    Object.keys(err).includes(item.label.toLowerCase())
                  )
                  .map((err, index) => (
                    <div key={index} className="w-full text-start">
                      <span className="text-red-500">
                        {err[item.label.toLowerCase()]}
                      </span>
                    </div>
                  ))}
              <input
                placeholder={item?.placeholder}
                className={design?.inputField?.input}
                type={item?.type}
                style={design?.inputField?.inputStyle}
                name={item?.label.toLowerCase()}
                required
              />
              {design.name === "default" &&
                errorObj.length !== 0 &&
                errorObj
                  .filter((err) =>
                    Object.keys(err).includes(item.label.toLowerCase())
                  )
                  .map((err, index) => (
                    <div key={index} className="w-full text-start">
                      <span className="text-red-500">
                        {err[item.label.toLowerCase()]}
                      </span>
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

// return (
//   <>
//     {type === "login" ? (
//       <form className={design.form}>
//         <div className={design.header.container}>
//           <div className={design.header.title}>{type}</div>
//           <Link to={"/"}>
//             <IoHome className={design.header.link} />
//           </Link>
//         </div>
//         {items.map((item, index) => (
//           <div key={index} className={design.inputField.container}>
//             <input
//               placeholder={item.placeholder}
//               className={design.inputField.input}
//               type={item.type}
//             />
//             <span className={design.inputField.label}>{item.label}</span>
//           </div>
//         ))}
//         <div className={design.navigation.container}>
//           <button className={design.navigation.button}>Login</button>
//           <div className={design.navigation.anotherOtion.text}>
//             Don&apos;t have an account,{" "}
//             <Link
//               className={design.navigation.anotherOtion.link}
//               to={"/signup"}
//             >
//               Sign up
//             </Link>
//           </div>
//         </div>
//       </form>
//     ) : (
//       <form className={design.form}>
//         <div className={design.header.container}>
//           <div className={design.header.title}>create account</div>
//           <Link to={"/"}>
//             <IoHome className={design.header.link} />
//           </Link>
//         </div>
//         {items.map((item, index) => (
//           <div key={index} className={design.inputField.container}>
//             <input
//               placeholder={item.placeholder}
//               className={design.inputField.input}
//               type={item.type}
//             />
//             <span className={design.inputField.label}>{item.label}</span>
//           </div>
//         ))}
//         <div className={design.navigation.container}>
//           <button className={design.navigation.button}>sign up</button>
//           <div className={design.navigation.anotherOtion.text}>
//             Already have an account,{" "}
//             <Link className={design.navigation.anotherOtion.link} to={"/login"}>
//               login
//             </Link>
//           </div>
//         </div>
//       </form>
//     )}
//   </>
// );
