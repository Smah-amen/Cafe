import React, { useState } from "react";

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

const CoffeeCup = () => {
  const [selectedCoffee, setSelectedCoffee] = useState("");

  const handleSelection = (id) => {
    setSelectedCoffee(id);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Coffee</h1>

      {/* Coffee Cup */}
      <div className="relative w-60 h-48 bg-slate-200 rounded-b-full flex justify-center items-end overflow-hidden">
        {/* Handle */}
        {/* <div className="absolute top-10 right-[-30%] w-32 h-20 border-4 border-gray-700 rounded-full"></div> */}

        {/* Coffee Filling */}
        <div
          className={`absolute bottom-0 w-full transition-all duration-500 ${
            selectedCoffee === "americano"
              ? "h-3/4 bg-gradient-to-r from-secondary to-secondary"
              : selectedCoffee === "espresso"
              ? "h-2/4 bg-[#2c1f1b] "
              : selectedCoffee === "latte"
              ? "h-3/4 bg-gradient-to-r from-secondary to-[#b89a93] "
              : selectedCoffee === "mocha"
              ? "h-full bg-chocolate"
              : "h-0"
          }`}
        ></div>

        {/* Plate */}
        {/* <div className="absolute bottom-[-8%] w-48 h-4 bg-gray-700 rounded-full"></div> */}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 lg:grid-cols-4">
        {coffeeTypes.map((coffee) => (
          <button
            key={coffee.id}
            onClick={() => handleSelection(coffee.id)}
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
