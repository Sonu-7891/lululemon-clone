import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../api/Api";


const CartPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("accessToken");


  // Fetch user authentication status and cart items
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const authResponse = await Api.getCart(); // Fetch cart data
        setIsLoggedIn(true);
        setCartItems(authResponse.data.products);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setIsLoggedIn(false);
        } else {
          setError("Failed to load cart data. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, []);

  const handleRemoveItem = async (productId) => {
    try {
      await Api.removeFromCart(productId);
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product._id !== productId)
      );
    } catch (err) {
      setError("Failed to remove item from cart.");
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleLoginRedirect = () => {
    navigate("/login", { state: { from: "/cart" } });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}
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

      {isAuthenticated ? (
        cartItems.length > 0 ? (
          <div className="max-w-7xl mt-44 w-[100%]  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h1 className="text-2xl font-bold mb-4">
                My Bag ({cartItems.length} Item{cartItems.length > 1 ? "s" : ""}
                )
              </h1>
              {cartItems.map((item) => (
                <div
                  key={item.product._id}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4"
                >
                  <img
                    src={item.product.imageUrl[0]}
                    alt={item.product.name}
                    className="w-34 h-32 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-semibold">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Price: ${item.product.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.product._id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <p className="mb-2">
                Subtotal: $
                {cartItems
                  .reduce(
                    (sum, item) => sum + item.product.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <h2 className="text-center text-6xl px-auto pt-48 font-semibold mx-auto">
            Your cart is empty.
          </h2>
        )
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Give your bag some love!</h1>
          <button
            onClick={handleLoginRedirect}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Log In to Shop
          </button>
        </div>
      )}
      <div className="container mx-auto p-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* My Account Section */}
        <div className="pl-10 w-[100%] ">
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Privacy Policy{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                California Privacy Rights
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                California Transparency Act{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Your Privacy Choices
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Accessibility Statement
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Note */}
      <div className="">
        <div className="flex justify-evenly border-t text-center text-gray-600 ">
          <p className="pt-5 ml-20">
            © Lululemon Athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7
          </p>

          <div className="pt-5 ml-20">
            <a href="#" className="hover:underline hover:text-red-500">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-red-500">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
