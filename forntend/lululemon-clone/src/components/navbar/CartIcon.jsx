import React, { useEffect, useState } from "react";
// import { Api } from "../../api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   Api.getCart()
  //     .then((response) => {
  //       setCartCount(response.data.cartItems.length);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.error("Error fetching cart data:", error));
  // }, []);

  return (
    <div className="relative">
      <span>
        <FontAwesomeIcon icon={faShoppingCart} title="Cart" />
      </span>
      {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
        {cartCount}
      </span> */}
    </div>
  );
};

export default CartIcon;
