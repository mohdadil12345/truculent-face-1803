import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

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

    <SECTION>
      <div className="form">
        <div className="signUp-form">
          <h2>
            Create a HelloFresh <br /> account
          </h2>
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input
            type="Submit"
            value="Continue"
            onClick={handleContinue}
            className="btn"
          />
          <br />
          <a href="/#">Go Back</a>
        </div>
        <div className="discription">
          <div className="main">
            <div className="div-1">
              <img src="/assets/phone.png" alt="" />
            </div>
            <div className="div-dis">
              <h3>
                <span>Freshness at your fingertips</span>
              </h3>
              <span className="main-span">
                <span>
                  Choose your meals, manage your plan, and view your recipes in
                  our app.
                </span>
              </span>

              {/* <---!!!---> */}
              <div className="footer-icon">
                <div className="icon-box1">
                  <a href="#/">
                    <img
                      src="/assets/footerIcon.png"
                      alt=""
                      style={{ height: "auto" }}
                      className="icon"
                    />
                  </a>
                </div>
                <div className="icon-box1">
                  <a href="#/">
                    <img
                      src="/assets/footerIcon2.avif"
                      alt=""
                      style={{ height: "auto" }}
                      className="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SECTION>

  );
}

export default Signup;

const SECTION = styled.div`
  .form {
    display: flex;
    margin-left: 60px;
    gap: 80px;
  }
  .signUp-form {
    text-align: center; /* Center-align elements within .form */
    min-width: 500px;
    height: auto;
    padding: 25px;
    border: 2px solid red;
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 1px;
    border-color: rgb(228, 228, 228);
    margin-top: 64px;
    margin-bottom: 48px;
  }
  input {
    width: 100%; /* Make the inputs take the full width of the container */
    padding: 10px; /* Add some padding for spacing */
    margin: 5px 0;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 16px;
    border-radius: 4px;
    text-align: left;
    border-color: rgb(228, 228, 228);
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    outline: none;
    border-style: 1px solid;
  }
  .btn {
    text-align: center;
    border-color: rgb(6, 122, 70);
    border-style: none;
    line-height: 24px;
    background-color: rgb(6, 122, 70);
    color: rgb(255, 255, 255);
    -webkit-box-align: center;
    -webkit-box-pack: center;
    cursor: pointer;
  }
  a {
    color: rgb(6, 122, 70);
  }
  .discription {
    background-image: url("/assets/login-background.png");
    background-repeat: no-repeat;
    background-position: right center;
    width: 700px;
    background-size: 319px 366px;
  }
  .div-1 {
    margin: 12px;
    height: 233px;
    width: 161px;
    display: flex;
    position: relative;
    top: -55px;
  }

  img {
    /* position: absolute; */
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: transparent;
  }
  .main {
    display: flex;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px 0px;
    max-width: 560px;
    height: 195px;
    z-index: 2;
    position: relative;
    margin-top: 190px;
  }
  .div-dis {
    display: flex;

    padding: 32px 32px 32px 40px;

    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 32px 32px 40px;
  }
  .main-span {
    color: rgb(36, 36, 36);
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    margin: 8px 0px 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .footer-icon {
    display: flex;
    margin-top: 8px;
    gap: 1rem;
  }
  .icon-box1 {
    width: 30%;
  }
  a {
    color: rgb(3, 86, 36);
  }
`;

