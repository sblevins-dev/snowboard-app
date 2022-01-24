import React from "react";
import "../css/card.css";
import { Products } from "./Products";

export const Card = () => {
  const data = [
    {
      id: 1,
      img: require("../images/heroImg.jpg"),
      name: "item1",
      desc: "description",
    },
    {
      id: 2,
      img: require("../images/heroImg.jpg"),
      name: "item2",
      desc: "description",
    },
    {
      id: 3,
      img: require("../images/heroImg.jpg"),
      name: "item3",
      desc: "description",
    },
  ];

  return (
    <>
      {data.map((prod) => (
        <div className="card-wrapper" key={prod.id}>
          <div className="item-img">
            <img src={prod.img} alt="cardImg" />
          </div>

          <h2 className="item-name">{prod.name}</h2>
          <p className="item-desc">{prod.desc}</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      ))}
    </>
  );
};
