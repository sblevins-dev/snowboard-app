import { useState, useEffect } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
      }))
  };

  const onSubmit = (e) => {
      e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>Register</h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit} >
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
              <button type='submit' className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
