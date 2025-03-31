import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Add styles

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
