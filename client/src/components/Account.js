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
          .then((res) => setAccountInfo(res.data));
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  return (
    <div className="account-wrapper">
      {accountInfo && (
        <div className="account-info">
          <h1 className="name">{Object.entries(accountInfo)[0][1]}</h1>
          <h2>{Object.entries(accountInfo)[1][1]}</h2>
        </div>
      )}
    </div>
  );
};
