import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../css/card.css";

export const Card = () => {
  const { cart, setCart, products } = useContext(CartContext);

  const itemsInCart = (itemToFind) => {
    return cart.findIndex((item) => item._id === itemToFind) === -1;
  };

  const addToCart = (item) => {
    item.quantity = 1;
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const filteredCart = cart.filter((item) => id !== item._id);
    setCart(filteredCart);
  };

  return (
    <>
      {products.map((prod) => (
        <div className="card-wrapper" key={prod._id}>
          <div className="item-img">
            <img src={prod.img} alt="cardImg" />
          </div>

          <h2 className="item-name">{prod.name}</h2>
          <p className="item-desc">{prod.desc}</p>
          <p className="item-price">${prod.price}</p>
          {!itemsInCart(prod._id) ? (
            <button
              className="remove-from-cart"
              onClick={() => removeFromCart(prod._id)}
            >
              Remove
            </button>
          ) : (
            <button className="add-to-cart" onClick={() => addToCart(prod)}>
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </>
  );
};
