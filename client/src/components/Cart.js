import React, { useEffect, useContext } from "react";
import "../css/cart.css";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const { total, setTotal } = useContext(CartContext);

  useEffect(() => {
    addTotal();
  })

  const addTotal = () => {
    let sum = 0;
    cart.map((prod) => {
      sum += prod.price * prod.quantity;
      setTotal(sum);
    });
  };

  return (
    <div className="cart-wrapper">
      <ul className="cart-list">
        <h1 className="cart-title">Shopping Cart</h1>
        <br></br>
        {cart.map((prod) => (
          <CartItem
            key={prod.id}
            prod={prod}
            addTotal={addTotal}
            total={total}
          />
        ))}
        <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
        <button className="check-out-btn">Check Out</button>
      </ul>
    </div>
  );
};
