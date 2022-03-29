import React, { useEffect, useContext, useRef } from "react";
import "../css/cart.css";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const {
    cart,
    setCart,
    total,
    setTotal,
    setLoginShown,
    user,
    success,
    setSuccess,
  } = useContext(CartContext);

  // set success modal ref
  const domNode = useRef();

  useEffect(() => {
    console.log(cart)
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
        return setTotal(sum);
      });
    }
  };

  // To check out, must be logged in
  const handleSignIn = () => {
    if (!user) {
      setLoginShown(true);
    }
  };

  const handleCheckout = () => {
    setCart([]);
    setSuccess(true);
  };

  // Handle click outside success modal
  const handleClick = (e) => {
    if (!domNode.current.contains(e.target)) {
      setSuccess(false);
    }
  };

  // Handle success exit btn
  const handleExit = () => {
    setSuccess(false);
  };

  if (cart.length > 0) {
    if (success) {
      setSuccess(false);
    }
  }

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
        <div className="cart-price">
          <h3 className="cart-subtotal">Subtotal: ${total.toFixed(2)}</h3>
          <h3 className="cart-tax">Tax: ${(total * 0.07).toFixed(2)}</h3>
          <h2 className="cart-total">
            Total: ${(total + total * 0.07).toFixed(2)}
          </h2>
        </div>

        {user ? (
          cart.length > 0 && (
            <button className="check-out-btn" onClick={handleCheckout}>
              Check Out
            </button>
          )
        ) : (
          <button className="check-out-btn" onClick={handleSignIn}>
            Sign In
          </button>
        )}
        {success && (
          <div className="success-container" onClick={handleClick}>
            <div className="success-modal" ref={domNode}>
              <div className="success-exit-btn" onClick={handleExit}>
                X
              </div>
              <h1>Success</h1>
              <p>Success {user && user.name}, your items are on there way!</p>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};
