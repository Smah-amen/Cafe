import { FaCheck } from "react-icons/fa";
import InputField from "./InputField";

export default function ContactForm() {
  return (
    <div className="container my-12">
      <div className="container">
        <div
          style={{
            background:
              "linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url('/bg-coffee.jpg')",
          }}
          className="bg-top bg-no-repeat bg-cover relative overlay-top overlay-bottom w-full overflow-hidden"
        >
          <div className="flex flex-wrap -mx-4 items-center">
            <div
              className="relative px-4  my-12 lg:my-0"
              style={{ flex: "1 1 50%" }}
            >
              <div className="py-12 px-5 sm:px-12">
                <div className="mb-6">
                  <h1 className="text-5xl lg:text-7xl font-semibold leading-5 mb-7 text-[#DA9F5B]">
                    30% OFF
                  </h1>
                  <h1 className="text-white font-medium text-4xl">
                    For Online Reservation
                  </h1>
                </div>
                <p className="text-white mb-4 mt-7 w-11/12">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul className="ps-0 text-white m-0">
                  <li className="py-2 flex items-center">
                    <FaCheck className="text-[#DA9F5B] me-4" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2 flex items-center">
                    <FaCheck className="text-[#DA9F5B] me-4" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-2 flex items-center">
                    <FaCheck className="text-[#DA9F5B] me-4" />
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative px-4 w-full" style={{ flex: "1 1 50%" }}>
              <div
                className="text-center p-12"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 className="text-white mb-9 mt-12 font-medium text-4xl">
                  Book Your Table
                </h1>
                <form className="mb-12">
                  <InputField type={"text"} placeholder={"Name"} />
                  <div className="form-group">
                    <InputField type={"email"} placeholder={"Email"} />
                  </div>
                  <div className="form-group">
                    <InputField type={"date"} placeholder={"Date"} />
                  </div>
                  <div className="form-group">
                    <InputField type={"time"} placeholder={"Time"} />
                  </div>
                  <div className="form-group">
                    <InputField
                      type={"select"}
                      placeholder={"Person"}
                      options={["Person 1", "Person 2", "Person 3", "Person 4"]}
                    />
                  </div>

                  <div>
                    <button
                      className="inline-block font-medium text-center align-middle select-none px-5 py-4 text-base leading-6 w-full bg-[#DA9F5B]"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
