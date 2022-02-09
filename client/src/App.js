import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroImg } from "./components/HeroImg";
import { Products } from "./components/Products";
import { Cart } from './components/Cart';
import { CartContext } from "./contexts/CartContext";
import { About } from "./components/About";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isSelected, setIsSelected] = useState("home");

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, isSelected, setIsSelected, total, setTotal }}
      >
        <Navbar />
        {isSelected === "home" && (
          <>
            <HeroImg />
            <Products />
          </>
        )}
        {isSelected === "cart" && (<><Cart /></>)}
        {isSelected === "about" && <About />}
      </CartContext.Provider>
    </>
  );
}

export default App;
