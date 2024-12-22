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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold text-white/90">Our App</h1>
              <p className="text-xl sm:text-2xl text-center sm:text-left font-semibold text-white/90">
                Coffee Cafe is available for Android and IOS
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.coffeecafe.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full"
                >
                  <img
                    src="play_store.png"
                    alt="Google Play Store"
                    className="w-36 sm:w-44 md:w-48"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/coffeecafe/id1583409898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full"
                >
                  <img
                    src="app_store.png"
                    alt="Apple App Store"
                    className="w-36 sm:w-44 md:w-48"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSection;
