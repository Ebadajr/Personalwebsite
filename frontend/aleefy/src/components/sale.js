import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import im2 from "../img/khayalpic.jpg";
import logo from "../img/logo2.png";
import "./splash.css";
const SplashScreen = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      navigate("/home"); // Navigate to the home page after 3 seconds
    }, 30000000);
    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    showSplash && (
      <div
       className="splash-screen"
      >
        {/* Overlay Content */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <img
            src={logo} // Replace with the path to your logo
            alt="Khayalergy Logo"
            style={{ width: "100px", marginBottom: "20px" }}
          />
          <h1 style={{ fontSize: "4rem" }}>25% OFF</h1>
          <p style={{ fontSize: "1.5rem" }}>
            FOR THE FIRST <span style={{ color: "yellow" }}>5</span> NEW
            MEMBERS!
          </p>
          <h2 style={{ marginTop: "20px" }}>
            START <span style={{ color: "black" }}>NOW</span>
          </h2>
        </div>
      </div>
    )
  );
};

export default SplashScreen;
