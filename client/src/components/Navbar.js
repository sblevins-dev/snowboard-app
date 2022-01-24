import React from "react";
import "../css/navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">SK</div>
      <ul className="nav-links-wrapper">
        <li className="home links">Home</li>
        <li className="cart links">Cart</li>
        <li className="about links">About</li>
      </ul>
    </div>
  );
};
