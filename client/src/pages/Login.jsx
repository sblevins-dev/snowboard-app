import { useState, useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import { login } from "../features/auth/authSlice";
import "../css/login.css";

export const Login = () => {
  const { setLoginShown, setRegisterShown, user, setUser } =
    useContext(CartContext);
  const [error, setError] = useState(null)

  // Create reference to form
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

  // Handle form submit
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null)

    const userData = {
      email,
      password,
    };

    try {
      const userInfo = await login(userData);
      if (!userInfo.token) {
        throw new Error(userInfo);
      } else {
        setUser(userInfo);
        setLoginShown(false);
      }
      console.log(userInfo);
    } catch (error) {
      setError(error.message)
    }
  };

  // Handle click outside form
  const handleClick = (e) => {
    if (!domNode.current.contains(e.target)) {
      setLoginShown(false);
    }
  };

  // Handle register link click
  const handleRegisterClick = () => {
    setLoginShown(false);
    setRegisterShown(true);
  };

  const handleDemo = () => {
    setFormData({
      email: "tim@gmail.com",
      password: "1234",
    });
  };

  return (
    <div className="login-container" onClick={handleClick}>
      <div ref={domNode} className="login-form-wrapper">
        <section className="login-heading">
          <h1>Login</h1>
          <p>Login and start shopping</p>
          {error != null && <p className="error-msg">{error}</p>}
        </section>

        <section className="login-form">
          <form onSubmit={onSubmit}>
            <div className="login-form-group">
              <label htmlFor="email">Email: </label>
              <input
                className="login-form-control"
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
            <div className="login-form-group">
              <label htmlFor="password">Password:</label>
              <input
                className="login-form-control"
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
                required
              ></input>
            </div>
            <div className="login-form-group">
              <button type="submit" className="login-form-btn">
                Submit
              </button>
            </div>
            <div className="login-form-group demo-group">
              <div className="register-message">
                <p>No Account?</p>
                <p className="register-link" onClick={handleRegisterClick}>
                  Register
                </p>
              </div>
              <div className="demo-login" onClick={handleDemo}>
                Demo Login
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
