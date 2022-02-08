import React, { useState } from "react";
import "../css/cart.css";

export const CartItem = ({ prod, addTotal }) => {
  const [itemPrice, setItemPrice] = useState(prod.price);

  const updatePrice = (quantity, thisProdPrice) => {
    prod.quantity = quantity;
    let sum = 0;
    sum += quantity * thisProdPrice;
    setItemPrice(sum);
    addTotal();
  };

  return (
    <li className="prod-item">
      <img className="prod-img" alt={prod.desc} src={prod.img} />
      <h2 className="prod-title">{prod.name}</h2>
      <p className="prod-desc">{prod.desc}</p>
      <input
        type="number"
        defaultValue={prod.quantity}
        min="0"
        name="quantity"
        onChange={(e) => updatePrice(e.target.value, prod.price)}
      />
      <p className="prod-price">${itemPrice.toFixed(2)}</p>
    </li>
  );
};
