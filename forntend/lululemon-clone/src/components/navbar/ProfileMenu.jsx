import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../../api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";


const ProfileMenu = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated =localStorage.getItem("accessToken");


  // Check if user is logged in
  // useEffect(() => {
  //   api
  //     .getProfile()
  //     .then(() => setIsLoggedIn(true))
  //     .catch(() => setIsLoggedIn(false));
  // }, []);

  // Handle logout
  const handleLogout = () => {
    Api
      .logout()
      .then(() => {
        // setIsLoggedIn(false);
        navigate("/signup");
      })
      .catch((error) => console.error("Logout failed:", error));
  };

  // Handle profile icon click
  const handleProfileClick = () => {
    navigate("/signup");
  };

  return (
    <>
      {/* Profile Icon */}
      <div
        onClick={handleProfileClick}
        className="relative"
        onMouseOver={() => isAuthenticated && setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <FontAwesomeIcon icon={faUser} title="Profile" />
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-14 pt-8 bg-white shadow-lg  p-6 z-1 w-50">
          <Link
            to="/signup"
            className="block text-gray-800 hover:text-gray-600 mb-2"
          >
            My Profile
          </Link>
          <Link
            to="/orders"
            className="block text-gray-800 hover:text-gray-600 mb-2"
          >
            My Orders
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
