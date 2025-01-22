import { IoHome } from "react-icons/io5";
import CustomLink from "../CustomLink";

export default function Design() {
  return {
    default: {
      name: "default",
      formWrap: (props) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="lg:w-2/3 mx-auto my-11"
        >
          <div
            style={{
              background:
                "linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url('/bg-coffee.jpg')",
            }}
            className="bg-top bg-no-repeat bg-cover relative overlay-top overlay-bottom w-full overflow-hidden"
          >
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="relative px-4 w-full" style={{ flex: "1 1 50%" }}>
                <div className="text-center p-12">
                  <form className="mb-12">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1300"
                      className="text-white mb-9 mt-12 font-medium text-4xl capitalize"
                    >
                      {props.type}
                    </h1>
                    {props.children}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      inputField: {
        container: "mb-4 text-white",
        input:
          "block w-full text-lg font-normal leading-6 text-white bg-clip-padding bg-transparent border-solid border-[#DA9F5B] outline-none px-5 py-4",
        inputStyle: { borderWidth: "1px" },
      },
      navigation: {
        button:
          "inline-block font-medium text-center align-middle select-none px-5 py-4 text-base leading-6 w-full bg-[#DA9F5B] capitalize",
        anotherOtion: {
          text: "text-white mt-4",
          link: "inline-block underline underline-offset-2 duration-300 hover:text-[#DA9F5B] capitalize",
        },
      },
    },
    modern: {
      name: "modern",
      formWrap: (props) => (
        <form
          data-aos="fade-up"
          data-aos-duration="1300"
          className="modern-login mx-auto my-16 overflow-hidden bg-slate-200 p-[30px] rounded-xl pt-7 relative transform w-full lg:w-2/3 transition-all duration-300 before:content-[''] before:absolute before:-z-10 after:bg-primary/65 before:bg-[#DA9F5B] before:w-[750px] before:h-[700px] before:left-[55%] before:-top-[10px] after:w-[750px] after:h-[700px] after:left-[45%] after:-top-[5px] after:content-[''] after:absolute after:animate-[spin_7s_infinite] before:animate-[spin_6s_infinite_linear] after:-z-10"
        >
          <div className="flex items-center justify-between">
            <div className="text-4xl mb-3 capitalize">
              {props.type === "login" ? props.type : "create account"}
            </div>
            <CustomLink to={"/"}>
              <IoHome className="cursor-pointer text-lg" />
            </CustomLink>
          </div>
          {props.children}
        </form>
      ),
      inputField: {
        container: "flex flex-col-reverse",
        input:
          "peer z-20 outline-none border-0 p-[10px] text-lg rounded-md duration-500 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10",
        label:
          "pl-2 z-10 text-lg duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0",
      },
      navigation: {
        container: "flex justify-between items-center flex-wrap gap-x-4",
        button:
          "cursor-pointer text-white text-lg uppercase w-fit px-5 border-0 py-[10px] mt-[30px] rounded-md bg-secondary transition-all duration-300 hover:bg-primary",
        anotherOtion: {
          text: "text-black text-end text-pretty mt-[30px]",
          link: "inline-block border-b-[1px] border-b-black duration-300 hover:border-b-white capitalize",
        },
      },
    },
  };
}
