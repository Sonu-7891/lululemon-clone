import React, { useEffect, useState } from "react";
import { Api } from "../api/Api";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api
      .getProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  

  const navigate = useNavigate();

  let handleClick = () => {
    navigate("/products");
  };
  return (
    <div className="container w-[90%] ml-[5%] mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <div
          key={product._id}
          // className="hover:opacity-75"
          // onClick={handleClick}
        >
          <Link to={`/product/${product._id}`}>
            <img
              src={product.imageUrl[0]}
              alt={product.name}
              className="w-full cursor-pointer h-78 object-cover transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-1">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
