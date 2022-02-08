import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../css/card.css";
import { Products } from "./Products";

export const Card = () => {
  const { cart, setCart } = useContext(CartContext);

  const data = [
    {
      id: 1,
      img: require("../images/heroImg.jpg"),
      name: "item1",
      desc: "description",
      price: 14.99,
    },
    {
      id: 2,
      img: require("../images/heroImg.jpg"),
      name: "item2",
      desc: "description",
      price: 14.99,
    },
    {
      id: 3,
      img: require("../images/heroImg.jpg"),
      name: "item3",
      desc: "description",
      price: 14.99,
    },
  ];

  const itemsInCart = (itemToFind) => {
    return cart.findIndex((item) => item.id === itemToFind) === -1;
  };

  const addToCart = (item) => {
    item.quantity = 1;
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const filteredCart = cart.filter((item) => id !== item.id);
    setCart(filteredCart);
  };

  return (
    <>
      {data.map((prod) => (
        <div className="card-wrapper" key={prod.id}>
          <div className="item-img">
            <img src={prod.img} alt="cardImg" />
          </div>

          <h2 className="item-name">{prod.name}</h2>
          <p className="item-desc">{prod.desc}</p>
          <p className="item-price">${prod.price}</p>
          {!itemsInCart(prod.id) ? (
            <button
              className="remove-from-cart"
              onClick={() => removeFromCart(prod.id)}
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
