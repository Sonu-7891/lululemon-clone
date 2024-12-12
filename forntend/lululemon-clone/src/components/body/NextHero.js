import React from "react";

const NextHero = () => {
  return (
    <div className="flex w-[90%] flex-col md:flex-row justify-evenly md:ml-20 mt-24 bg-white h-auto md:h-[800px]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-auto md:h-[600px] flex flex-col items-center">
        <img
          className="w-[90%] md:w-[95%] cursor-pointer h-auto md:h-full object-cover"
          src="https://images.lululemon.com/is/image/lululemon/na_dec24_wk3_AG_HO24_1_2_Lg_MediaAction_D_CoatsJackets?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Women's Leggings"
        />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h1 className="font-bold text-2xl md:text-4xl mb-4">
            Every feeling is new.
          </h1>
          <p className="mb-4 px-4 md:px-0">
            The Soft Sueded collection’s cozy embrace amplifies all soothing
            sensations.
          </p>
          <button className="bg-white text-black px-6 py-3 text-lg border-2 border-gray-900 font-semibold rounded hover:bg-black hover:text-white">
            SHOP WOMEN'S LEGGINGS
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[90%] md:w-1/2 h-auto md:h-[600px] flex flex-col items-center mt-8 md:mt-0">
        <img
          className="w-[90%]  cursor-pointer h-auto md:h-full object-cover"
          src="https://images.lululemon.com/is/image/lululemon/na_dec24_wk2_AG_HO24_1_2_Lg_MediaAction_D_MensWorkoutGear?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Men's Workout Gear"
        />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h1 className="font-bold text-2xl md:text-4xl mb-4">
            Rep your best set.
          </h1>
          <p className="mb-4 px-4 md:px-0">
            Metal Vent Tech and Pace Breaker. Just add you, and the
            possibilities are endless.
          </p>
          <button className="bg-white text-black px-6 py-3 text-lg border-2 border-gray-900 font-semibold rounded hover:bg-black hover:text-white">
            SHOP MEN'S BEST WORKOUT GEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextHero;
