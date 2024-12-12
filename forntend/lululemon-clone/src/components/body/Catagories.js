import React, { useState } from "react";

const categoriesData = {
  women: [
    {
      label: "Hoodies & Sweatshirts",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_W_Hoodies?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Pants",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_W_Pants?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Shirts",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_W_Shirts?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Shoes",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_W_Shoes?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Bags",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_W_Bags?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Coats & Jackets",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_W_CoatsJackets?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
  ],
  men: [
    {
      label: "Hoodies & Sweatshirts",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_M_Hoodies?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Pants",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_M_Pants?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Shirts",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_M_Shirts?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Shoes",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_M_Shoes?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Bags",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_M_Bags?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      label: "Coats & Jackets",
      image:
        "https://images.lululemon.com/is/image/lululemon/na_nov24_wk4_AG_HO24_ShopCategories_M_CoatsJackets?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
  ],
};

const Categories = () => {
  const [selectedTab, setSelectedTab] = useState("women");

  return (
    <div className="container w-[90%] mx-auto mt-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Shop Popular Categories
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 border-b pb-2 mb-6">
        <button
          className={`${
            selectedTab === "women"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-700"
          } font-semibold text-lg px-4`}
          onClick={() => setSelectedTab("women")}
        >
          Women's
        </button>
        <button
          className={`${
            selectedTab === "men"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-700"
          } font-semibold text-lg px-4`}
          onClick={() => setSelectedTab("men")}
        >
          Men's
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categoriesData[selectedTab].map((category, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden cursor-pointer group"
          >
            <img
              src={`${category.image}`}
              alt={category.label}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-center font-semibold mt-2 text-sm sm:text-base">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
