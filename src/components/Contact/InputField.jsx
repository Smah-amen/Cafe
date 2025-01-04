/* eslint-disable react/prop-types */
import "./inputs.css";
export default function InputField({
  type = ["select", ""],
  placeholder,
  options,
}) {
  return (
    <div className="mb-4 text-white">
      {type == "select" ? (
        <select
          className="block w-full text-lg font-normal leading-6 bg-clip-padding bg-transparent border-solid border-[#DA9F5B] outline-none px-5 py-4"
          style={{
            borderWidth: "1px",
          }}
          defaultValue={placeholder}
          required="required"
        >
          <option className="text-slate-600" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              className="text-black"
              key={option}
              defaultValue={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="date-picker block w-full text-lg font-normal leading-6 text-white bg-clip-padding bg-transparent border-solid border-[#DA9F5B] outline-none px-5 py-4"
          placeholder={placeholder}
          style={{
            borderWidth: "1px",
          }}
          required="required"
        />
      )}
    </div>
  );
}
