import { useState } from "react";
import "./CoffeeCup.css";

const coffeeTypes = [
  { id: "americano", name: "Americano" },
  { id: "au_lait", name: "Au Lait" },
  { id: "capuccino", name: "Cappuccino" },
  { id: "corretto", name: "Corretto" },
  { id: "espresso", name: "Espresso" },
  { id: "latte", name: "Latte" },
  { id: "lungo", name: "Lungo" },
  { id: "macchiato", name: "Macchiato" },
  { id: "mocha", name: "Mocha" },
  { id: "ristretto", name: "Ristretto" },
];

const coffeeComponents = [
  { id: "coffee", name: "Coffie" },
  { id: "water", name: "Water" },
  { id: "liquor", name: "Liquor" },
  { id: "milk", name: "Milk" },
  { id: "whipped_cream", name: "Whipped Cream" },
  { id: "milk_foam", name: "Milk Foam" },
  { id: "steamed_milk", name: "Steamed Milk" },
  { id: "chocolate", name: "Chocolate" },
];

const CoffeeCup = () => {
  const [selectedCoffee, setSelectedCoffee] = useState("");

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Choose Your Coffee
      </h1>

      {/* Coffee Cup */}
      <div
        className="cup relative bg-slate-200 flex justify-center items-end overflow-hidden"
        style={{ borderRadius: "0 0 10vw 10vw" }}
      >
        {/* Coffee Filling */}
        <div
          className={
            selectedCoffee ? selectedCoffee + " filling reset" : "filling reset"
          }
        >
          {coffeeComponents.map((item, index) => (
            <div key={index} className={item.id + " text-xl"}>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 my-8 sm:grid-cols-3 lg:grid-cols-5">
        {coffeeTypes.map((coffee) => (
          <button
            key={coffee.id}
            onClick={() => setSelectedCoffee(coffee.id)}
            className={`py-2 px-4 border-2 rounded-md text-sm font-medium transition-all duration-300 ${
              selectedCoffee === coffee.id
                ? "bg-white border-brown-500 text-brown-700"
                : "bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {coffee.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCup;
