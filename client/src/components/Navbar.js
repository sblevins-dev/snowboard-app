import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import "../css/navbar.css";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";

export const Navbar = () => {
  const { cart, setIsSelected, user, setUser, setLoginShown } =
    useContext(CartContext);
  const [userMenu, setUserMenu] = useState(false);

  // Show user menu
  const handleMouseOver = () => {
    setUserMenu(true);
  };

  // Hide user menu
  const handleMouseLeave = () => {
    setUserMenu(false);
  };

  // Show login modal
  const handleClick = () => {
    setLoginShown(true);
  };

  // Handle Sign Out
  const onSignOut = () => {
    logout();
    setUser(null);
  };

  return (
    <div className="nav-wrapper">
      <div className="logo">SK</div>
      <ul className="nav-links-wrapper">
        <li onClick={() => setIsSelected("home")}>
          <NavLink activeclassname="active" className="home links" to="/">
            Home
          </NavLink>
        </li>

        <li className='cart-icon-position' onClick={() => setIsSelected("cart")}>
          <NavLink to="/cart" activeclassname="active" className="cart links">
            Cart
          </NavLink>
          {cart.length > 0 ? (
            <div className="cart-icon">{cart.length}</div>
          ) : (
            <></>
          )}
        </li>

        <li onClick={() => setIsSelected("about")}>
          <NavLink to="/about" activeclassname="active" className="about links">
            About
          </NavLink>
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
                <li>{user.name}</li>
                <li>Account</li>
                <li className="sign-out" onClick={onSignOut}>
                  <FaSignOutAlt /> Sign Out
                </li>
              </ul>
            ) : (
              <div className="no-user" onClick={handleClick}>
                <FaSignInAlt /> Sign In
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};
