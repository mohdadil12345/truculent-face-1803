import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newObj = {
    email,
    password,
  };

  const handleSubmit = () => {
    axios
      .post("https://ride-share-backend-pw1v.onrender.com/users/login",
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
      })
      .catch((err) => {
        console.log(err);
        alert("Try Again!");
      });
  };
  return (
    <div>
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
  );
}

export default Login;
