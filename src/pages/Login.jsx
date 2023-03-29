import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [err, setError] = useState();
  const navigate = useNavigate();
  const { signInWhitEmPass } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const passwrod = e.target[1].value;
    try {
      signInWhitEmPass(email, passwrod);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat whit Firebase</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>
          You don't have acount? <Link to={"/register"}> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
