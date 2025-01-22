/* eslint-disable react/prop-types */
import { Link } from "react-router";
import "./forms.css";
import CustomLink from "../CustomLink";

export default function Forms({ type, items, design }) {
  return (
    <>
      {type === "login" ? (
        <design.formWrap type={type}>
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
                required="required"
              />
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
        <design.formWrap type={type}>
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={500 * (index + 2)}
              data-aos-duration={1300 + (index + 1)}
              className={design?.inputField?.container}
            >
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
          <div
            data-aos="fade-up"
            data-aos-delay="2800"
            data-aos-duration="1300"
            className={design?.navigation?.container}
          >
            <button className={design?.navigation?.button}>sign up</button>
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
