import "../css/account.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { getUser } from "../features/auth/userSlice";
import axios from "axios";

export const Account = () => {
  const { user } = useContext(CartContext);
  const [accountInfo, setAccountInfo] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/");
    } else {
      try {
        axios
          .get("/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setAccountInfo(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  const addTotal = (cart) => {
    let sum = 0;
    cart.map((item) => {
      sum += item.price * item.quantity;
    });

    return (sum + sum * 0.07).toFixed(2);
  };

  const getDate = (dateToConvert) => {
    const date = dateToConvert.split("T");
    const reArrange = date[0].split("-");
    const newDate = reArrange[1] + "-" + reArrange[2] + "-" + reArrange[0];

    return newDate;
  };

  return (
    <div className="account-wrapper">
      {accountInfo && (
        <div className="account-info">
          <div className="user-info">
            <div className="name">
              <div>Username:</div>
              <div>{Object.entries(accountInfo)[0][1]}</div>
            </div>
            <div className="email">
              <div>Email:</div>
              <div>{Object.entries(accountInfo)[1][1]}</div>
            </div>
          </div>

          <div className="purchases-wrapper">
            <h1 className="purchases-header">Purchases</h1>
            {accountInfo.purchases &&
              accountInfo.purchases.map((cart, i) => (
                <div key={i} className="each-purchase">
                  <div>{getDate(cart[0])}</div>
                  {cart[1].map((item) => (
                    <div key={item.id} className="items-in-each-purchase">
                      <div className="item-name">{item.name}</div>
                      <div className="item-quantity">{item.quantity}</div>
                      <div className="item-price">${item.price}</div>
                    </div>
                  ))}
                  <div className="purchase-total">
                    Total: ${addTotal(cart[1])}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
