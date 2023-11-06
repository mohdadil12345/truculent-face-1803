import React from "react";
import styled from "styled-components";

export const Bottom2 = () => {
  return (
    <SECTION>
      <div className="main">
        <div className="main-div">
          <div className="div-1">
            <img src="/assets/BottomImg.png" alt="" />
          </div>
          <>
            <div className="div-2">
              <div className="content-div">
                <h2>What’s inside each box?</h2>
                <div className="checklist">
                  <p>
                    ✓ Easy-to-follow recipes with clear nutritional info <br />
                    <br />
                  </p>
                  <p>
                    ✓ High-quality ingredients sourced straight from the farm{" "}
                    <br />
                    <br />
                  </p>
                  <p>
                    ✓ Convenient meal kits that fit perfectly in the fridge{" "}
                    <br /> <br />
                  </p>
                  <p>
                    ✓ A fun cooking experience that makes you feel unstoppable{" "}
                    <br />
                    <br />
                  </p>
                  <p>
                    ✓
                    <a href="https://www.hellofresh.com/about/sustainability/packaging">
                      Innovative packaging designed to reduce waste
                    </a>
                  </p>

                  <div className="main-button-div">
                    <a href="#content" className="anchor">
                      <span>
                        <button className="span-button">
                          <span className="span">View our plans</span>
                        </button>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </SECTION>
  );
};

const SECTION = styled.div`
  max-height: 80vh;
  background-color: rgb(255, 255, 255);

  .main-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 32px 16px;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    position: relative;
  }
  .div-1 {
    /* border: 2px solid blue; */
    width: 42%;
    margin-right: 2rem;
  }
  img {
    width: 100%;
    height: auto;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  h2 {
    color: rgb(36, 36, 36);
    margin: 16px 0px;
    font-family: Agrandir, Verdana, Geneva, sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
  .checklist {
    color: rgb(36, 36, 36);
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    margin: 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  a {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
  .checklist a {
    color: rgb(6, 122, 70);
  }

  //

  .main-button-div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    border-radius: 4px;
    background-color: rgb(3, 86, 36);
    color: rgb(255, 255, 255);
    cursor: pointer;
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
