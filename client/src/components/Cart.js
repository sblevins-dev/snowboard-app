import React, { useEffect, useContext, useState } from "react";
import "../css/cart.css";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, total, setTotal, setLoginShown, user } =
    useContext(CartContext);
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    addTotal();
  });

  // Total of cart
  const addTotal = () => {
    let sum = 0;
    if (cart.length === 0) {
      setTotal(0);
    } else {
      cart.map((prod) => {
        sum += prod.price * prod.quantity;
        setTotal(sum);
      });
    }
  };

  // To check out, must be logged in
  const handleClick = () => {
    if (user) {
      setUserInfo(true);
    } else {
      setLoginShown(true);
    }
  };

  return (
    <div className="cart-wrapper">
      <ul className="cart-list">
        <h1 className="cart-title">Shopping Cart</h1>
        <br></br>
        {cart.length !== 0 ? (
          cart.map((prod) => (
            <CartItem
              key={prod._id}
              prod={prod}
              addTotal={addTotal}
              total={total}
            />
          ))
        ) : (
          <div className="empty-cart">Nothing in your cart yet!</div>
        )}
        {userInfo && userInfo !== null ? <>{user.name}, Thank you for shopping with us.</> : <></>}
        <div className="cart-price">
          <h3 className="cart-subtotal">Subtotal: ${total.toFixed(2)}</h3>
          <h3 className="cart-tax">Tax: ${(total * 0.07).toFixed(2)}</h3>
          <h2 className="cart-total">
            Total: ${(total + total * 0.07).toFixed(2)}
          </h2>
        </div>

        {cart.length > 0 && (
          <button className="check-out-btn" onClick={handleClick}>
            Check Out
          </button>
        )}
      </ul>
    </div>
  );
};
