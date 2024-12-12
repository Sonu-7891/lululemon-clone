import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const womenCategories = [
    "Bras & Underwear",
    "Bodysuits",
    "Coats & Jackets",
    "Dresses",
    "Hoodies & Sweatshirts",
    "Joggers",
    "Leggings",
    "Long Sleeve Shirts",
    "Pants",
    "Polo Shirts",
    "Shirts",
    "Shoes",
    "Shorts",
    "Skirts",
    "Sports Bras",
    "Sweaters",
    "T-Shirts",
    "Tank Tops",
  ];

  const accessories = [
    "Backpacks",
    "Bags",
    "Belt Bags",
    "Crossbody Bags",
    "Hair Accessories",
    "Hats",
    "Socks",
    "Water Bottles",
    "Yoga Mats",
  ];

  return (
    <div className="absolute top-9 w-screen bg-white shadow-lg py-6 ">
      <div className="container mx-auto flex px-8">
        {/* Left: Women's Clothes */}
        <div className="w-1/4">
          <h3 className="font-bold text-sm text-gray-800 mb-4">
            Women's Clothes →
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {womenCategories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace("-")}`}
                className="block text-sm font-sans text-gray-500 hover:text-black"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Middle: Accessories */}
        <div className="w-0/4 px-8">
          <h3 className="font-bold text-lg text-gray-800 mb-4">
            Accessories →
          </h3>
          <div className="grid gap-2">
            {accessories.map((item) => (
              <Link
                key={item}
                to={`/category/${item.toLowerCase().replace(/ /g, "-")}`}
                className="block text-sm font-sans text-gray-600 hover:text-black"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Promotional Section */}
        <div className="w-1/3 flex justify-end">
          <div className="w-54 pr-5">
            <img
              src="https://images.lululemon.com/is/image/lululemon/NA_DEC24_Membership_EA_Launch_Ecomm_MegaNav_D?$promoBlock$&wid=768&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Promotional"
              className="rounded-lg h-[50%] w-[50%] shadow-md mb-4"
            />
            <p className="text-gray-800 text-sm">
              Early access: Aero Blue is back. Styles you love on the Lululemon
              App.
            </p>
            <Link
              to="/app-promo"
              className="block text-blue-600 mt-2 font-semibold"
            >
              Shop on the App →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
