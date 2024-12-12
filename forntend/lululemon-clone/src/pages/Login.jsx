import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async () => {
   try {
     const response = await Api.signin({ email, password });

     if (response?.data?.accessToken) {
       localStorage.setItem("accessToken", response.data.accessToken); // Save token to localStorage
       alert("Login successful!");

       navigate("/"); // Redirect user to the homepage or dashboard
     } else {
       alert("Unexpected response.");
     }
   } catch (error) {
     if (error.response?.status === 404) {
       alert("User not found! Redirecting to signup...");
       navigate("/signup");
     } else if (error.response?.status === 403) {
       alert("Invalid credentials. Please try again.");
     } else {
       console.error("Login failed:", error);
       alert("Login failed, try again later.");
     }
   }
 };
  const handleClick =()=>{
    navigate('/')
  }

  return (
    <div className="container mx-auto mt-6 max-w-md">
      {/* Left Side */}
      <div
        className="fixed top-0 w-[50%] left-0 right-10 bg-cover bg-center"
        style={{
          height: "100%",
          backgroundImage:
            "url('https://images.lululemon.com/is/image/lululemon/NA_Jul24_Membership_Partner-Perks_LogInScreen_Main_Sign-in_D_Membership?q=100&w=1920')", // Replace with the actual image URL
        }}
      >
        {/* Back Button */}
        <button
          className="absolute top-6 left-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-gray-700" />
        </button>

        {/* Text Content */}
        <div className="absolute bottom-12 left-6 text-white max-w-xs">
          <h1 className="text-3xl font-bold mb-2">Wellbeing made easier.</h1>
          <p className="mb-4">
            Discover lululemon Membership, and enjoy benefits like exchanges or
            credit on sale items, early access to product drops, and partner
            perks.
          </p>
          <a
            href="#"
            className="text-white underline hover:text-gray-300 font-semibold"
          >
            Explore Membership →
          </a>
        </div>
      </div>
      {/* [right] */}
      <div className=" fixed top-0 right-0 w-[50%] h-[100%] bg-white mx-auto ">
        <div className="h-[50%] w-[50%] mx-auto bg-white  mt-48 ">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button
            onClick={handleLogin}
            className="bg-red-600 text-white px-4 py-2 rounded-lg w-full"
          >
            Login
          </button>
          <p className="text-sm mt-4">
            New user?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="bg-red-600 text-white px-4 py-2 pl-2 rounded-lg w-full"
            >
              Sign up here
            </button>
          </p>
          <p className="text-sm text-gray-400 pt-1">
            Buy signing in or creating a member account, you agree to the{" "}
            Terms of Use and acknowledge the Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
