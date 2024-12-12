import React, { useState } from "react";

const HomePageHero = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" bg-white">
      {/* Left Section */}
      <div className="absolute top-[35%] left-[3%] z-10 hidden md:flex flex-col bg-white px-8 py-6">
        <h1 className="text-4xl font-bold mb-6">lululemon</h1>
        <ul className="space-y-4 text-lg">
          <li>
            <a href="/gifts-for-all" className="text-gray-700 hover:text-black">
              Gifts for All
            </a>
          </li>
          <li>
            <a href="/womens-new" className="text-gray-700 hover:text-black">
              Women's What's New
            </a>
          </li>
          <li>
            <a href="/all-womens" className="text-gray-700 hover:text-black">
              All Women's
            </a>
          </li>
          <li>
            <a href="/all-mens" className="text-gray-700 hover:text-black">
              All Men's
            </a>
          </li>
          <li>
            <a
              href="/all-accessories"
              className="text-gray-700 hover:text-black"
            >
              All Accessories
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="relative top-28 left-4 z-20 md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 bg-gray-800 text-white rounded"
        >
          {showMenu ? "✕" : "☰"}
        </button>
      </div>

      {showMenu && (
        <div className=" mt-24 w-3/4 h-full bg-white z-30 flex flex-col p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-6">lululemon</h1>
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="/gifts-for-all"
                className="text-gray-700 hover:text-black"
              >
                Gifts for All
              </a>
            </li>
            <li>
              <a href="/womens-new" className="text-gray-700 hover:text-black">
                Women's What's New
              </a>
            </li>
            <li>
              <a href="/all-womens" className="text-gray-700 hover:text-black">
                All Women's
              </a>
            </li>
            <li>
              <a href="/all-mens" className="text-gray-700 hover:text-black">
                All Men's
              </a>
            </li>
            <li>
              <a
                href="/all-accessories"
                className="text-gray-700 hover:text-black"
              >
                All Accessories
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Right Section with Image and Content */}
      <div className=" mt-5 md:ml-[13%] w-full h-[600px]">
        <img
          className="w-full md:w-[80%] h-full object-cover cursor-pointer"
          src="https://images.lululemon.com/is/image/lululemon/na_dec24_wk2_AG_HO24_3_1_D_HP?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Hero"
        />

        {/* Button */}
        <div className="absolute bottom-20 right-32">
          <button className="bg-white text-black px-6 py-3 text-lg font-semibold border-gray-900 rounded hover:bg-gray-200">
            Shop What's New
          </button>
        </div>

        {/* Content Section */}
        <div className="ml-5 bottom-4 left-8 w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full md:w-2/4">
            <h1 className="font-bold text-3xl md:text-4xl">
              The Soft Sueded collection, just settled in.
            </h1>
          </div>
          <div className="w-full md:w-1/3 text-gray-700">
            This new gear is so luxuriously cozy and stretchy, it makes every
            move feel like an exhale.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
