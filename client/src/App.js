import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroImg } from "./components/HeroImg";
import { Products } from "./components/Products";
import { Cart } from './components/Cart'
import { CartContext } from "./contexts/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [isSelected, setIsSelected] = useState("home");

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, isSelected, setIsSelected }}
      >
        <Navbar />
        {isSelected === "home" && (
          <>
            <HeroImg />
            <Products />
          </>
        )}
        {isSelected === "cart" && (<><Cart /></>)}
      </CartContext.Provider>
    </>
  );
}

export default App;
