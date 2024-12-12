import React from "react";

const GiftBanner = () => {
  return (
    <div className="bg-gray-200 w-[90%] mx-auto mb-10 py-4 px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Presence, right on time.
        </h1>
      </div>

      {/* Middle Content */}
      <p className="text-sm sm:text-md text-gray-900 text-center md:text-left">
        Order gifts by Dec. 22, get them by Dec. 24.{" "}
        <i className="italic">*Exclusions apply.</i>
      </p>

      {/* Button */}
      <button className="border border-black text-black bg-white px-6 sm:px-10 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-lg hover:bg-black hover:text-white transition duration-300">
        SHOP GIFTS FOR ALL
      </button>
    </div>
  );
};

export default GiftBanner;
