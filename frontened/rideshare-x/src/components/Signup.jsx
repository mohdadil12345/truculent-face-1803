import axios from "axios";
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleContinue = () => {
    // e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    // console.log(newUser);
    axios
      .post(
        "https://ride-share-backend-pw1v.onrender.com/users/register",
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("You are now registered");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
  <div>
  <h2>Create a HelloFresh account</h2>
  <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <input type="Submit" value="Continue" onClick={handleContinue} />
</div>
  );
}

export default Signup;

