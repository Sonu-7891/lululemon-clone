import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!name || !email || !password) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError(""); // Clear any previous error
    return true;
  };

  const handleSignup = () => {
    if (!validateInputs()) return;

    setIsLoading(true);
    Api
      .signup({ name, email, password })
      .then(() => {
        alert("Signup successful!");
        navigate("/login"); // Redirect to login page after signup
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          setError("Invalid signup data. Please check your inputs.");
        } else if (error.response?.status === 409) {
          setError(
            "Email is already in use. Please log in or use a different email."
          );
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
        console.error("Signup failed:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const checkExistingUser = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) return; // Skip if email is invalid or empty

    Api
      .signin({ email, password: "placeholder" }) // Use the email to check for user existence
      .then(() => {
        alert("User already exists! Redirecting to login...");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("New user! Please complete signup.");
        } else {
          console.error("Error checking user existence:", error);
        }
      });
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
      {/* right */}
      <div className="fixed top-0 right-0 w-[50%] h-[700px] bg-white ">
        <div className="h-[100%] w-[50%] mx-auto pt-48 bg-white  ">
          <h1 className="text-2xl font-bold mb-4">Signup</h1>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            onBlur={checkExistingUser} // Trigger user check on email input blur
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button
            onClick={handleSignup}
            className={`${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600"
            } text-white px-4 py-2 rounded-lg w-full`}
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Signup"}
          </button>
          <p className="text-sm mt-4">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className={`${
                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600"
              } text-white px-4 py-2 rounded-lg w-full`}
              disabled={isLoading}
            >
              Log in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
