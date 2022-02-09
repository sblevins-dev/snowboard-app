import React, { useContext } from "react";
import "../css/navbar.css";
import { CartContext } from "../contexts/CartContext";

export const Navbar = () => {
  const { cart, isSelected, setIsSelected } = useContext(CartContext);

  return (
    <div className="nav-wrapper">
      <div className="logo">SK</div>
      <ul className="nav-links-wrapper">
        <li className="home links" onClick={() => setIsSelected('home')}>Home</li>
        <li className="cart links" onClick={() => setIsSelected('cart')}>
          Cart
          {cart.length > 0 ? <div className="cart-icon">{cart.length}</div> : <></>}
        </li>
        <li className="about links" onClick={() => setIsSelected('about')}>About</li>
      </ul>
    </div>
  );
};
