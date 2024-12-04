import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { useToast } from "@chakra-ui/react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const toast = useToast();

  const navigate = useNavigate();

  const { signup } = useContext(AuthContext);

  const handleContinue = () => {
    // e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };

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
   
        toast({
          title: "Resgistration Sucessful!",
          position: "top",
          status: "success",
          duration: 1200,
          isClosable: true,
        });
        signup(newUser.username);
        navigate("/login");
      })
      .catch((err) => {
        toast({
          title: "Some thing wrong Try again!",
          position: "top",
          status: "error",
          duration: 1200,
          isClosable: true,
        });
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
    text-align: center;
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
    width: 100%;
    padding: 10px;
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
    border: 0.2px solid gray;
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

  /*Large screen */
  @media screen and (max-width: 1024px) {
    .form {
      display: flex;
      margin-left: 60px;
      gap: 90px;
    }
    .signUp-form {
      text-align: center;
      min-width: 400px;
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
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
      font-size: 16px;
      border-radius: 4px;
      text-align: left;
      border-color: rgb(228, 228, 228);
      background-color: rgb(255, 255, 255);
      border: 0.2px solid gray;
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
      width: 430px;
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
      height: 83%;
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
      max-width: 420px;
      height: 155px;
      z-index: 2;
      position: relative;
      margin-top: 130px;
      transform: translateX(-5rem);
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
      font-size: 14px;
      line-height: 20px;
    }

    .footer-icon {
      display: flex;
      margin-top: 8px;
      gap: 1rem;
    }
    .icon-box1 {
      width: 20%;
    }
    a {
      color: rgb(3, 86, 36);
    }
  }

  /**Medium screen  */

  @media screen and (max-width: 790px) {
    .form {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(1fr);
    }
    .signUp-form {
      text-align: center;
      width: 600px;
      height: auto;
      padding: 25px;

      align-items: center;
      background-color: rgb(255, 255, 255);
      border-style: solid;
      border-width: 1px;
      border-color: rgb(228, 228, 228);
      margin-top: 64px;
      margin-bottom: 48px;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
      font-size: 16px;
      border-radius: 4px;
      text-align: left;
      border-color: rgb(228, 228, 228);
      background-color: rgb(255, 255, 255);
      border: 0.2px solid gray;
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
      width: 630px;
      height: auto;
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
      height: 83%;
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
      max-width: 420px;
      height: 160px;
      z-index: 2;
      position: relative;
      margin-top: 130px;
      margin-left: 5rem;
      transform: translateY(-3rem);
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
      font-size: 14px;
      line-height: 20px;
    }

    .footer-icon {
      display: flex;
      margin-top: 8px;
      gap: 1rem;
    }
    .icon-box1 {
      width: 20%;
    }
    a {
      color: rgb(3, 86, 36);
    }
  }

  @media screen and (min-width: 425px) and (max-width: 642px) {
    .form {
      gap: 20px;
      margin-left: 20px;
    }

    .signUp-form {
      max-width: 400px;
      width: 100%;
      padding: 15px;
      margin-top: 32px;
      margin-bottom: 24px;
    }

    input {
      font-size: 14px;
    }

    .discription {
      width: 100%;
      background-size: cover;
    }
    h2 {
      width: 200px;
    }
    .main {
      margin-top: 100px;
      transform: translateX(0);
    }

    .main-span {
      font-size: 14px;
    }

    .footer-icon {
      gap: 0.5rem;
    }

    .icon-box1 {
      width: 25%;
    }
  }

  /* Screen size between 375px and 642px */
  @media screen and (min-width: 375px) and (max-width: 642px) {
    .form {
      gap: 20px;

      margin-left: 0px;
      margin-right: 0px;
    }

    .signUp-form {
      max-width: 375px;

      margin-left: 0px;
    }

    input {
      font-size: 14px;
      width: 94%;
    }

    .discription {
      width: 375px;
      background-size: cover;
    }

    h2 {
      width: 200px;
      display: none;
    }
    img {
      height: 138px;
    }
    .main {
      height: 100px;
      margin-top: 120px;
      transform: translateX(-0.1);
      margin-right: 3rem;
    }

    .main-span {
      font-size: 14px;
      display: none;
    }

    .footer-icon {
      gap: 0.5rem;
    }

    .icon-box1 {
      width: 25%;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 642px) {
    .form {
      /* gap: 20px;  */
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(1fr);
      margin-left: 0px;
      margin-right: 0px;
    }

    .signUp-form {
      width: 300px;
    }

    input {
      font-size: 14px;
      width: 94%;
    }

    .discription {
      width: 300px;
      background-size: cover;
    }

    h2 {
      width: 200px;
      display: none;
    }
    img {
      height: 138px;
    }
    .main {
      height: 100px;
      margin-top: 120px;
      transform: translateX(-0.1);
      margin-right: 3rem;
    }

    .main-span {
      font-size: 14px;
      display: none;
    }

    .footer-icon {
      gap: 0.5rem;
    }

    .icon-box1 {
      width: 25%;
    }
  }
`;
