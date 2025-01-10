export default function Design() {
  return {
    default: {},
    modern: {
      form: "modern-login mx-auto my-20 overflow-hidden bg-slate-200 p-[30px] rounded-xl pt-7 relative transform w-full lg:w-2/3 transition-all duration-300 before:content-[''] before:absolute before:-z-10 after:bg-primary/65 before:bg-[#DA9F5B] before:w-[750px] before:h-[700px] before:left-[55%] before:-top-[10px] after:w-[750px] after:h-[700px] after:left-[45%] after:-top-[5px] after:content-[''] after:absolute after:animate-[spin_7s_infinite] before:animate-[spin_6s_infinite_linear] after:-z-10",
      header: {
        container: "flex items-center justify-between",
        title: "text-4xl mb-3 capitalize",
        link: "cursor-pointer text-lg",
      },
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
          link: "border-b-[1px] border-b-black duration-300 hover:border-b-white capitalize",
        },
      },
    },
  };
}
