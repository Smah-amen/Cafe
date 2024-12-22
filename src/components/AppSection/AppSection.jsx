import React from "react";

const bgImage = {
  backgroundImage: `url('/coffee-beans.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppSection = () => {
  return (
    <>
      <div style={bgImage} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 ">
            <div>
              <h1 className="text-6xl font-bold text-white/90 ">Our App</h1>
              <p className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90">
                Coffee Cafe is available for Android and IOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSection;
