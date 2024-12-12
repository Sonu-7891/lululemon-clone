import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Api } from "../api/Api";
import Footer from "../components/footer/Footer";

const WishListPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch wishlist items
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await Api.getWishlist();
        setWishlist(response.data.items || []);
        setLoading(false);
        // console.log(response)
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login"); // Redirect if not authenticated
        } else {
          setError("Failed to load wishlist");
        }
        setLoading(false);
      }
    };
    fetchWishlist();
  }, [navigate]);

  const handleRemove = async (productId) => {
    try {
      await Api.removeFromWishlist(productId);
      setWishlist((prev) =>
        prev.filter((item) => item.product._id !== productId)
      );
    } catch (err) {
      console.error("Error removing product", err);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="bg-blue max-w-10xl mx-auto p-5">
      <div className="  bg-white p-1">
        <marquee className=" fixed top-0 bg-white text-gray-900 gap-2  p-0">
          Happening now: Cyber Monday finds. Get in on it.{" "}
          <span className="text-red-500 underline cursor-pointer pl-1">
            Shop Cyber Monday
          </span>
        </marquee>
      </div>

      <div className=" fixed top-6 w-screen flex bg-blue-50 justify-between gap-4 text-gray-500 border-b p-1 w-100%">
        <div className="w-5"></div>
        <div className=" flex gap-4 w-30 pr-10">
          <Link
            to="/store-locator"
            className="flex p-right hover:underline 1px decoration-red-600 text-black "
          >
            <img
              className="h-5 pr-1 pt-1 "
              src="https://img.icons8.com/ios/50/order-delivered.png"
              alt="order-delivered"
            />
            Store Locator
          </Link>
          <Link
            to="/gift-cards"
            className="flex hover:underline 1px decoration-red-600 text-black "
          >
            <img
              className="h-5 pr-1 pt-1"
              src="https://img.icons8.com/ios/50/gift-card.png"
              alt="gift-card"
            />
            Gift Cards
          </Link>
          <Link
            to="/help"
            className=" flex hover:underline 1px decoration-red-600 text-black "
          >
            <img
              className="h-5 pr-1 pt-1"
              src="https://img.icons8.com/ios/50/help--v1.png"
              alt="help--v1"
            />
            Get Help
          </Link>
          <span className=" flex hover:underline 1px decoration-red-600 text-black ">
            🌐 USA
          </span>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-5">Wish List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item.product._id}
              className="border rounded-lg p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="font-medium">{item.product.name}</h2>
                <p className="text-gray-500">
                  Added on {new Date(item.addedAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className=" bg-blue mt-20 text-center col-span-1 md:col-span-2">
            <p className="text-gray-500">Your wishlist is empty!</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishListPage;
