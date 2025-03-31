import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css"; // Add styles

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header>
      <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
