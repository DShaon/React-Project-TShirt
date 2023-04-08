import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/review">Order</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/review">Order</Link>
    </nav>
  );
};

export default Header;
