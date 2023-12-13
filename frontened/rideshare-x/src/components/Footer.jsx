import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <SECTION>
      <hr />
      <div className="main-div">
        <div className="inner-container">
          <div className="section-1">
            <div className="A">
              <div className="heading">
                <span className="h">HelloFresh</span>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Students</span>
                </a>
              </div>
              <div className="blog">
                <a href="#/">
                  <span className="v">Blog</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Recipe</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Hero Discounts</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Recipe Directory</span>
                </a>
              </div>

              <div>
                <a href="#/">
                  <span className="v">
                    California Supply <br /> Chains Act
                  </span>
                </a>
              </div>

              <div>
                <a href="#/">
                  <span className="v">Delivery Options</span>
                </a>
              </div>
            </div>
            {/* <---!!!!----> */}

            <div className="A">
              <div className="heading">
                <span className="h">Our Company</span>
              </div>
              <div>
                <a href="#/">
                  <span className="v">HellowFresh Group</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Careers</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Press</span>
                </a>
              </div>
            </div>
            {/* <---!!!!----> */}

            <div className="A">
              <div className="heading">
                <span className="h">Work with us</span>
              </div>
              <div>
                <a href="#/">
                  <span className="v">partner</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">influencer</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Affiliates</span>
                </a>
              </div>
            </div>
            {/* <---!!!!----> */}
            <div className="A">
              <div className="heading">
                <span className="h">Contact us</span>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Health Center & FAQ</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Partnership</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">Corporate Sales</span>
                </a>
              </div>
              <div>
                <a href="#/">
                  <span className="v">
                    Do Not Sell or Share <br /> My Personal <br /> information
                  </span>
                </a>
              </div>
            </div>

            {/* <---!!!!----> */}
            <div className="A">
              <div className="heading">
                <span className="h">Payments methods</span>
              </div>
              <div>
                <img src="/assets/footer.svg" alt="" />
              </div>
              <div>
                <img src="/assets/footer1.svg" alt="" />
              </div>
              <div>
                <img src="/assets/footer2.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="section-2">
            <p className="p-heading">
              <span className="h">Download our app</span>
            </p>
            <p className="p2-heading">
              <span>Manage your deliveries from anywhere, anytime.</span>
            </p>

            <div className="footer-icon">
              <div className="icon-box1">
                <a href="#/">
                  <span className="icon">
                    <img
                      src="/assets/footerIcon.png"
                      alt=""
                      style={{ width: "110px", height: "auto" }}
                    />
                  </span>
                </a>
              </div>
              <div className="icon-box1">
                <a href="#/">
                  <span className="icon">
                    <img
                      src="/assets/footerIcon2.avif"
                      alt=""
                      style={{ width: "110px", height: "auto" }}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="bottom-1">
            <div className="bottom-a">
              <span>©</span>
              {/* <!-- --> */}
              <span>HelloFresh</span>
              {/* <!-- --> */}
              <span>2023</span>
            </div>

            <div className="bottom-a">
              <a href="">
                <span>Terms and Conditions</span>
              </a>
            </div>

            <div className="bottom-a">
              <a href="">
                <span>Privacy</span>
              </a>
            </div>

            <div className="bottom-a">
              <a href="">
                <span>Accessibility.</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom-icon">
            <div className="bottom-icon">
              <a href="">
                <span>
                  <img src="/assets/fa.jpg" alt="" style={{ width: "25px" }} />
                </span>
              </a>
            </div>
            <div className="bottom-icon">
              <a href="">
                <span>
                  <img
                    src="/assets/twit.jpg"
                    alt=""
                    className="i"
                    style={{ width: "25px" }}
                  />
                </span>
              </a>
            </div>
            <div className="bottom-icon">
              <a href="">
                <span>
                  <img
                    src="/assets/insta.jpg"
                    alt=""
                    className="i"
                    style={{ width: "25px" }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SECTION>
  );
};

const SECTION = styled.div`
  background-color: #ffffff;
  .inner-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding: 44px;
  }

  .section-1 {
    display: flex;
    align-items: flex-start;
    padding: 0px;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 2rem;
  }
  .A {
  }
  .heading {
    text-align: start;
    font-size: 20px;
    line-height: 24px;
    color: rgb(36, 36, 36);
    font-weight: 500;
    font-family: Agrandir, Verdana, Geneva, sans-serif;
  }
  .h {
    color: rgb(36, 36, 36);
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    margin: 0px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .v {
    color: inherit;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    margin: 0px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgb(3, 86, 36);
  }
  img {
    width: 55px;
  }

  //
  .p-heading {
    color: rgb(5, 104, 53);
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    margin: 0px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .p2-heading {
    color: rgb(36, 36, 36);
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 16px;
    margin: 16px 0px;
  }
  .footer-icon {
    display: flex;
    gap: 1rem;
  }
  .icon-box1 {
    width: 30%;
  }
  a {
    color: rgb(3, 86, 36);
  }

  hr {
    margin: 20px 5px;
    color: #cec9c9;
  }

  .footer-bottom {
    display: flex;
    gap: 25rem;
  }
  .bottom-1 {
    display: flex;
    gap: 2rem;
    margin-left: 11rem;
  }

  .footer-bottom-icon {
    display: flex;
    cursor: pointer;
    gap: 2rem;
  }

.main-div{
  /* display: none; */
}


`;
