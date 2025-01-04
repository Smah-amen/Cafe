/* eslint-disable react/prop-types */
import "./inputs.css";
export default function InputField({ type, placeholder, options }) {
  if (type === "select") {
    return (
      <div className="mb-4 text-white">
        <select
          className="block w-full text-lg font-normal leading-6 bg-clip-padding bg-transparent border-solid border-[#DA9F5B] outline-none px-5 py-4"
          style={{
            // height: "calc(1.5em + 0.75rem + 2px)",
            borderWidth: "1px",
          }}
          required="required"
        >
          <option className="text-black" selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option className="text-black" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className="mb-4 text-white">
        <input
          type={type}
          className="date-picker block w-full text-lg font-normal leading-6 text-white bg-clip-padding bg-transparent border-solid border-[#DA9F5B] outline-none px-5 py-4"
          placeholder={placeholder}
          style={{
            // height: "calc(1.5em + 0.75rem + 2px)",
            borderWidth: "1px",
          }}
          required="required"
        />
      </div>
    );
  }
}
