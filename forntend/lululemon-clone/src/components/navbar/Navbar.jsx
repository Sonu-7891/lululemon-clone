import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import FavoriteIcon from "./FavoriteIcon";
import ProfileMenu from "./ProfileMenu";
import { Api } from "../../api/Api";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (query) => {
    Api.searchProducts({ query })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Search error:", error));
  };

  return (
    <header className="shadow-md w-[90%] bg-white">
      {/* Topmost Navbar */}
      <div className="bg-white p-1">
        <marquee className="fixed top-0 bg-white text-gray-900 gap-2 p-0">
          Happening now: Cyber Monday finds. Get in on it.
          <span className="text-red-500 underline cursor-pointer pl-1">
            Shop Cyber Monday
          </span>
        </marquee>
      </div>

      {/* Secondary Navbar */}
      <div className="fixed top-6 w-full flex justify-between bg-blue-50 text-gray-500 border-b py-1 px-4">
        <div className="flex  gap-4">
          <Link
            to="/store-locator"
            className="flex items-center hover:underline"
          >
            <img
              className="h-5 pr-1"
              src="https://img.icons8.com/ios/50/order-delivered.png"
              alt="order-delivered"
            />
            Store Locator
          </Link>
          <Link to="/gift-cards" className="flex items-center hover:underline">
            <img
              className="h-5 pr-1"
              src="https://img.icons8.com/ios/50/gift-card.png"
              alt="gift-card"
            />
            Gift Cards
          </Link>
          <Link to="/help" className="flex items-center hover:underline">
            <img
              className="h-5 pr-1"
              src="https://img.icons8.com/ios/50/help--v1.png"
              alt="help"
            />
            Get Help
          </Link>
          <span className="hover:underline">🌐 USA</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="fixed top-14 w-[90%] w-full flex items-center justify-between bg-white py-4 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold flex items-center gap-2">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.FZhgStwXb2UJnW3TPRzupQHaHf&pid=Api&rs=1&c=1&qlt=95&h=100"
            alt="Logo"
            className="h-10 ml-16 "
          />
          lululemon
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <div
            className="relative hover:underline cursor-pointer"
            onMouseOver={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Women
            {showDropdown && <DropdownMenu />}
          </div>
          <Link to="/men" className="hover:underline">
            Men
          </Link>
          <Link to="/accessories" className="hover:underline">
            Accessories
          </Link>
          <Link to="/shoes" className="hover:underline">
            Shoes
          </Link>
          <Link to="/gifts" className="hover:underline">
            Gifts
          </Link>
          <Link
            to="/cyber-monday"
            className="text-red-600 font-bold hover:underline"
          >
            Cyber Monday
          </Link>
        </nav>
        <div className="relative">
          <input
            onClick={() => handleSearch}
            type="text"
            placeholder="Search"
            className="border border-gray-300  px-4 py-2 text-sm w-48"
          />
        </div>
        {/* Icons */}
        <div className="flex items-center gap-4 mr-20">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden"
          >
            <img
              src="https://img.icons8.com/ios/50/search.png"
              alt="Search"
              className="h-6"
            />
          </button>
          <ProfileMenu />
          <Link to="/wishlist">
            <FavoriteIcon />
          </Link>
          <Link to="/cart">
            <CartIcon />
          </Link>
          <button
            className="block md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <img
              src="https://img.icons8.com/ios/50/menu--v1.png"
              alt="Menu"
              className="h-6"
            />
          </button>
        </div>
      </div>

      {/* Fullscreen Search for Mobile */}
      {showSearch && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center p-4">
          <button
            onClick={() => setShowSearch(false)}
            className="self-end text-gray-500"
          >
            ✕
          </button>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 px-4 py-2 w-full"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white z-50 p-4 flex flex-col items-start">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="self-end text-gray-500"
          >
            ✕
          </button>
          <Link to="/women" className="py-2 hover:underline">
            Women
          </Link>
          <Link to="/men" className="py-2 hover:underline">
            Men
          </Link>
          <Link to="/accessories" className="py-2 hover:underline">
            Accessories
          </Link>
          <Link to="/shoes" className="py-2 hover:underline">
            Shoes
          </Link>
          <Link to="/gifts" className="py-2 hover:underline">
            Gifts
          </Link>
          <Link
            to="/cyber-monday"
            className="py-2 text-red-600 font-bold hover:underline"
          >
            Cyber Monday
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
