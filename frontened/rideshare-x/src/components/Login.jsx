import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const newObj = {
    email,
    password,
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://ride-share-backend-pw1v.onrender.com/users/login",
        newObj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        alert("Login sucessful!");
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        alert("Try Again!");
      });
  };
  return (
    <div className="login-page">
      <div>
        <img src="/assets/food1.jpg" alt="" />
      </div>
      <div className="login-info">
        <div className="log-bg">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Login;
