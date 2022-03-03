import React, { useEffect, useContext } from "react";
import "../css/cart.css";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, total, setTotal, setLoginShown } = useContext(CartContext);

  useEffect(() => {
    addTotal();
  })

  const addTotal = () => {
    let sum = 0;
    if (cart.length === 0) {
      setTotal(0)
    } else {
      cart.map((prod) => {
      sum += prod.price * prod.quantity;
      setTotal(sum);
    });
    }
    
  };

  const handleClick = () => {
    setLoginShown(true)
  }

  return (
    <div className="cart-wrapper">
      <ul className="cart-list">
        <h1 className="cart-title">Shopping Cart</h1>
        <br></br>
        {cart.length !== 0 ? cart.map((prod) => (
          <CartItem
            key={prod._id}
            prod={prod}
            addTotal={addTotal}
            total={total}
          />
        ))
        : <>Nothing in your cart yet!</>}
        
        <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
        <button className="check-out-btn" onClick={handleClick} >Check Out</button>
      </ul>
    </div>
  );
};
