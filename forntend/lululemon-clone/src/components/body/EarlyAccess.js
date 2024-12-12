import React from "react";

const EarlyAccess = () => {
  return (
    <div className="container w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://images.lululemon.com/is/image/lululemon/NA_DEC24_Membership_EA_Launch_Ecomm_1_1_Med_MediaAction_D?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Model Full"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="mt-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Aero Blue: feels good to be back.
        </h2>
        <p className="mt-3 text-sm sm:text-md md:text-lg text-gray-600 leading-relaxed">
          When a fan-favorite colour returns in styles you love, it’s all up
          from here. Members shop starting now—only on the lululemon App.
        </p>
        <div className="mt-4">
          <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-md border-2 border-gray-900 font-semibold rounded hover:bg-black hover:text-white transition-all">
            Shop on the App
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
