import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, signupSchema } from "./validationSchemas.js";
import CustomLink from "../CustomLink";

export default function Forms({ type, items, design }) {
  const schema = type === "login" ? loginSchema : signupSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(handleSubmit);
  

  // const onSubmit = (data) => {
    
  //   console.log("Form data:", data);
  // };

  return (
    <design.formWrap type={type}>
      <form onSubmit={handleSubmit()}>
        {items.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={500 * (index + 1.8)}
            data-aos-duration={1100 + (index + 1)}
            className={design?.inputField?.container}
          >
            <input
              {...register(item.name)}
              type={item.type}
              className={design?.inputField?.input}
              placeholder={item.placeholder}
              style={design?.inputField?.inputStyle}
            />
            {errors[item.name] && (
              <p className="text-red-400 text-sm mt-1">{errors[item.name].message}</p>
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
          <div className={design?.navigation?.anotherOtion?.text}>
            {type === "login" ? (
              <>
                Don't have an account?
                <CustomLink
                  className={design?.navigation?.anotherOtion?.link}
                  to="/signup"
                >
                  Sign up
                </CustomLink>
              </>
            ) : (
              <>
                Already have an account?
                <CustomLink
                  className={design?.navigation?.anotherOtion?.link}
                  to="/login"
                >
                  Login
                </CustomLink>
              </>
            )}
          </div>
          {design.name === "default" && (
            <div className="mt-5">
              <CustomLink
                to="/"
                className="underline underline-offset-2 duration-300 text-white hover:text-[#DA9F5B] capitalize"
              >
                Back to home
              </CustomLink>
            </div>
          )}
        </div>
      </form>
    </design.formWrap>
  );
}
