import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroImg } from "./components/HeroImg";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { CartContext } from "./contexts/CartContext";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isSelected, setIsSelected] = useState("home");
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoginShown, setLoginShown] = useState(false);
  const [isRegisterShown, setRegisterShown] = useState(false);

  const getData = () => {
    axios
      .get("/api/products")
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          isSelected,
          setIsSelected,
          total,
          setTotal,
          products,
          setLoginShown,
          setRegisterShown,
          user,
          setUser,
        }}
      >
        <Router>
          <Navbar />
          {isLoginShown && <Login />}
          {isRegisterShown && <Register />}
          <Routes>
            <Route
              index
              path="/"
              element={
                <>
                  <HeroImg />
                  <Products />
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
          <Footer />
        </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;
