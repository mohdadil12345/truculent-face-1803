import React from "react";
import styled from "styled-components";

export const Bottom1 = () => {
  return (
    <SECTION>
      <h2 className="heading">Why HelloFresh?</h2>
      <div className="main-div">
        <div className="card">
          <div className="body-div">
            <div className="img-div">
              <img src="./assets/logo1.png" alt="" />
            </div>
            <h3>No skimpin’ on the chicken!</h3>
            <p>
              Or steak, or fish, or plant <br />
              protein.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="body-div">
            <div>
              <img src="./assets/logo2.png" alt="" />
            </div>
            <h3>No commitment whatsoever</h3>
            <p>
              Skipping weeks or cancelling <br />
              is super easy.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="body-div">
            <div>
              <img src="./assets/logo3.png" alt="" />
            </div>
            <h3>The most 5-star reviews</h3>
            <p>
              Our huge recipe selection <br /> wows week after week.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="body-div">
            <div>
              <img src="./assets/logo4.png" alt="" />
            </div>
            <h3>Fresh and affordable</h3>
            <p>
              Chef-created deliciousness <br /> from $7.49 per meal.
            </p>
          </div>
        </div>
      </div>
      <div className="main-button-div">
        <a href="#content" className="anchor">
          <span>
            <button className="span-button">
              <span className="span">Get Started</span>
            </button>
          </span>
        </a>
      </div>
    </SECTION>
  );
};

const SECTION = styled.div`
  min-height: 64vh;
  margin-top: 3rem;
  background-color: #f8f8f8;
  padding-bottom: #f8f8f8;

  .main-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .heading {
    font-family: Agrandir, sans-serif;
    font-weight: 400;
    letter-spacing: -0.3px;
    color: #242424;
    padding: 40px 10px 30px 10px;
    text-align: center;
    padding-bottom: 2rem;
  }

  .card {
    height: 280px;
    width: 280px;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    letter-spacing: -0.3px;
    font-weight: 600;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-button-div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  .span-button {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 16px;
    border-style: none;
    line-height: 24px;
    background-color: rgb(3, 86, 36);
    color: rgb(255, 255, 255);
    -webkit-box-align: center;
    -webkit-box-pack: center;
    cursor: pointer;
  }
  .anchor {
    text-decoration: none;
  }
`;
