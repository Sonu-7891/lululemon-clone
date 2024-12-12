import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Api } from "../api/Api";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const SingleProductPage = () => {
  const { id } = useParams(); // Extract product ID from the URL
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details on page load
  useEffect(() => {
    Api.getProductDetails(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    Api.addToCart(product._id, 1)
      .then(() => alert("Added to cart!"))
      .catch(() => alert("Failed to add to cart."));
  };

  const handleAddToWishlist = () => {
    Api.addToWishlist(product._id)
      .then(() => alert("Added to wishlist!"))
      .catch(() => alert("Failed to add to wishlist."));
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-red-600">{error}</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.imageUrl[1]}
            alt={product.name}
            className="w-full max-w-md rounded-lg shadow-lg cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Add to Bag
            </button>
            <button
              onClick={handleAddToWishlist}
              className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600 transition duration-300"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
