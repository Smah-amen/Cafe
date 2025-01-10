/* eslint-disable react/prop-types */
import { Link } from "react-router";
import "./forms.css";

export default function Forms({ type, items, design }) {
  return (
    <>
      {type === "login" ? (
        <design.formWrap type={type}>
          {items.map((item, index) => (
            <div key={index} className={design?.inputField?.container}>
              <input
                type={item?.type}
                className={design?.inputField?.input}
                placeholder={item?.placeholder}
                style={design?.inputField?.inputStyle}
                required="required"
              />
              {design.name !== "default" && (
                <span className={design?.inputField?.label}>{item.label}</span>
              )}
            </div>
          ))}
          <div>
            <button className={design?.navigation?.button} type="submit">
              {type}
            </button>
            <div className={design?.navigation?.anotherOtion?.text}>
              Don&apos;t have an account,{" "}
              <Link
                className={design?.navigation?.anotherOtion?.link}
                to={"/signup"}
              >
                sign up
              </Link>
            </div>
            {design.name === "default" && (
              <div className="mt-5">
                <Link
                  to={"/"}
                  className="underline underline-offset-2 duration-300 text-white hover:text-[#DA9F5B] capitalize"
                >
                  back to home
                </Link>
              </div>
            )}
          </div>
        </design.formWrap>
      ) : (
        <design.formWrap type={type}>
          {items.map((item, index) => (
            <div key={index} className={design?.inputField?.container}>
              <input
                placeholder={item?.placeholder}
                className={design?.inputField?.input}
                type={item?.type}
                style={design?.inputField?.inputStyle}
              />
              {design.name !== "default" && (
                <span className={design?.inputField?.label}>{item.label}</span>
              )}
            </div>
          ))}
          <div className={design?.navigation?.container}>
            <button className={design?.navigation?.button}>sign up</button>
            <div className={design?.navigation?.anotherOtion?.text}>
              Already have an account,{" "}
              <Link
                className={design?.navigation?.anotherOtion?.link}
                to={"/login"}
              >
                login
              </Link>
            </div>
            {design.name === "default" && (
              <div className="mt-5">
                <Link
                  to={"/"}
                  className="underline underline-offset-2 duration-300 text-white hover:text-[#DA9F5B] capitalize"
                >
                  back to home
                </Link>
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
