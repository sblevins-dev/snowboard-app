import { useState, useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import "../css/login.css";

export const Login = () => {
  const { setLoginShown } = useContext(CartContext);
  const domNode = useRef();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    console.log(e.target);
    if (!domNode.current.contains(e.target)) {
      setLoginShown(false);
    }
  };

  return (
    <div className="login-container" onClick={handleClick}>
      <div ref={domNode} className="form-wrapper">
        <section className="heading">
          <h1>Login</h1>
          <p>Login and start shopping</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
                autoComplete="off"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
                required
              ></input>
            </div>
            <div className="form-group">
              <button type="submit" className="form-btn">
                Submit
              </button>
            </div>
            <div className="form-group">
              <p>No Account?</p>
              <p className="register-link">Register</p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
