import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"; // Use the default export for jwt-decode
import { useNavigate } from "react-router-dom";

const SessionManager = ({ accessToken }) => {
  const [tokenExpirationTime, setTokenExpirationTime] = useState(null);
  const [alertShown, setAlertShown] = useState(false); // State to track if alert has been shown
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      setTokenExpirationTime(decodedToken.exp * 1000); // Expiration time in milliseconds
    }

    const checkSession = () => {
      const now = Date.now();
      if (tokenExpirationTime && now >= tokenExpirationTime && !alertShown) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("accessToken"); // Clear token
        setAlertShown(true); // Mark alert as shown
        navigate("/login"); // Redirect to login
      }
    };

    const interval = setInterval(checkSession, 1000); // Check every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [accessToken, tokenExpirationTime, alertShown, navigate]);

  return null; // No visible UI; just background session management
};

export default SessionManager;
