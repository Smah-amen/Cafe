import { FaCheck } from "react-icons/fa";

export default function Vision() {
  return (
    <div className="container py-12">
      <div className="">
        <div className="relative pt-28 pb-9 text-center after:absolute after:content-start after:w-[2px] after:h-[100px] after:top-0 after:left-[50%] after:ms[1px] after:bg-[#DA9F5B]">
          <h4
            className="text-primary uppercase text-2xl font-medium mb-2"
            style={{ letterSpacing: "5px" }}
          >
            About Us
          </h4>
          <h1 className="md:text-5xl text-3xl font-bold mb-4">
            Serving Since 1950
          </h1>
        </div>
        <div className="flex flex-wrap md:mx-4">
          <div className="relative min-w-fit lg:min-w-min w-full flex-grow-0 flex-shrink-0 basis-1/3 max-w-1/3 px-4 py-0 lg:py-12">
            <h1 className="mb-4 text-2xl leading-6 font-bold">Our Story</h1>
            <h5 className="mb-4 text-xl leading-6 font-normal">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </h5>
            <p className="text-slate-500 leading-7 mb-4">
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod
            </p>
            <a
              href="#"
              className="inline-block font-semibold text-center align-middle select-none py-2 text-base leading-6 text-white bg-secondary px-6 mt-2"
            >
              Learn More
            </a>
          </div>
          <div className=" min-w-fit lg:min-w-min w-full px-4 flex-grow-0 flex-shrink-0 basis-1/3 max-w-1/3 py-12 lg:py-0 min-h-[500px]">
            <div className=" w-full h-full">
              <img className=" w-min h-full object-cover" src="/about.png" />
            </div>
          </div>
          <div className="relative min-w-fit lg:min-w-min w-full px-4 flex-grow-0 flex-shrink-0 basis-1/3 max-w-1/3  col-lg-4 py-0 lg:py-12">
            <h1 className="mb-4 text-2xl leading-6 font-bold">Our Vision</h1>
            <p className="text-slate-500 mb-3">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <h5 className="mb-6 text-xl leading-6 font-normal flex items-center">
              <FaCheck className="text-primary me-4" />
              Lorem ipsum dolor sit amet
            </h5>
            <h5 className="mb-6 text-xl leading-6 font-normal flex items-center">
              <FaCheck className="text-primary me-4" />
              Lorem ipsum dolor sit amet
            </h5>
            <h5 className="mb-6 text-xl leading-6 font-normal flex items-center">
              <FaCheck className="text-primary me-4" />
              Lorem ipsum dolor sit amet
            </h5>
            <a
              href="#"
              className="inline-block font-semibold text-center align-middle select-none text-base leading-6 text-white bg-primary font-weight-bold py-2 px-4 mt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
