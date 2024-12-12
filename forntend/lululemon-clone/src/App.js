import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Help from "./pages/Help";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
import SessionManager from "./api/SessionManger";
import SingleProductPage from "./pages/SingleProductPage";



const App = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  });
  const isAuthenticated = localStorage.getItem("accessToken");
  return (
    <Router>
      {accessToken && <SessionManager accessToken={accessToken} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/wishlist"
          // element={<WishListPage />}
          element={
            isAuthenticated ? <WishListPage /> : <Navigate to="/signup" />
          }
        />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
