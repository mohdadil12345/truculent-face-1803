import React from "react";
import styled from "styled-components";
import { Bottom1 } from "./Bottom1";
import { Bottom2 } from "./Bottom2";
import { Footer } from "./Footer";

function Home() {
  return (
    <MAINSECTION>
      <SECTION className="no-reset">
        <div className="main-div">
          <div className="container-div">
            <div className="h1-content">
              <h1>
                Take the stress
                <br className="br-gap" />
                out of mealtime
              </h1>
            </div>
            <div className="span-div">
              <span className="span-heading">
                America's Most Popular Meal Kit
              </span>
            </div>
            <div className="main-button-div">
              <a href="#content" className="anchor">
                <span>
                  <button className="span-button">
                    <span className="span">View our plan</span>
                  </button>
                </span>
              </a>
            </div>
            {/* <div className="bottom-page"></div> */}
          </div>
        </div>
      </SECTION>
      {/* <Bottom1 /> */}
      <Bottom2 />
     
    </MAINSECTION>
  );
}

export default Home;

const SECTION = styled.div`
  margin: 0;
  padding: 0;
  min-height: 90vh;
  background-image: url("/assets/Home_Page.png");
  background-size: cover;
  background-repeat: no-repeat;

  scroll-behavior: smooth;

  .container-div {
    width: 100%;
    /* top: 0px; */
    bottom: auto;
    padding-top: 2rem;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    /* margin-top: 10rem; */
  }
  .h1-content {
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  h1 {
    color: black;
    font-weight: 500;
    /* font-size: 32px;
    line-height: 40px; */
    font-family: Agrandir, Verdana, Geneva, sans-serif;
    font-size: 40px;
    line-height: 48px;
    margin: 0px;

    margin-top: 10rem;
  }

  .span-div {
    display: flex;
    align-items: center;
    justify-content: center;
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
    background-color: rgb(6, 122, 70);
    color: rgb(255, 255, 255);
    -webkit-box-align: center;
    -webkit-box-pack: center;

    cursor: pointer;
  }
  .anchor {
    text-decoration: none;
  }
  .span-heading {
    color: rgb(52, 52, 52);
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    margin: 0px;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
  }
`;

const MAINSECTION = styled.div`
  margin: 0;
  padding: 0;
`;
