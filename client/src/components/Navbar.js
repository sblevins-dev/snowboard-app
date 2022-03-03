import React, { useContext, useState } from "react";
import "../css/navbar.css";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";

export const Navbar = () => {
  const { cart, isSelected, setIsSelected, user } = useContext(CartContext);
  const [userMenu, setUserMenu] = useState(false);

  const handleMouseOver = () => {
    setUserMenu(true);
  };

  const handleMouseLeave = () => {
    setUserMenu(false);
  };

  console.log(user)

  return (
    <div className="nav-wrapper">
      <div className="logo">SK</div>
      <ul className="nav-links-wrapper">
        <li className="home links" onClick={() => setIsSelected("home")}>
          Home
        </li>

        <li className="cart links" onClick={() => setIsSelected("cart")}>
          Cart
          {cart.length > 0 ? (
            <div className="cart-icon">{cart.length}</div>
          ) : (
            <></>
          )}
        </li>

        <li className="about links" onClick={() => setIsSelected("about")}>
          About
        </li>
        <li
          className="user-icon links"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser />
          <div
            className={!userMenu ? "hidden" : "shown"}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {user ? (
              <ul className="user-menu">
                <li>Username</li>
                <li>Account</li>
                <li className="sign-out">
                  <FaSignOutAlt /> Sign Out
                </li>
              </ul>
            ) : (
              <div className="no-user">
                <FaSignInAlt /> Sign In
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};
