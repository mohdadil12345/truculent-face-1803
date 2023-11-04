import React, { useState } from "react";
import { styled } from "styled-components";

const Address = () => {
  const [mealPrice, setMealPrice] = useState(3500);
  const [deliveryCharge, setDeliveryCharge] = useState(99);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginLeft: "22%", marginBottom:'-30px' }}>Shipping Information </h2>
      <main style={{ display: "flex", justifyContent: "space-around" }}>
        <DIV
          style={{
            display: "flex",
            width: "45%",
            justifyContent: "space-around",
            padding: "5px",
          }}
          id="div-1"
        >
          <div
            style={{
              display: "flex",
              width: "48%",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <input type="text" placeholder="  First Name" />
            <input type="text" placeholder="  Street Address" />
            <input type="text" placeholder="  City" />
            <select>
              <option value="">Select State</option>
              <option value="assam">Assam</option>
              <option value="gujarat">Gujarat</option>
              <option value="jharkhand">Jharkhand</option>
              <option value="karnataka">Karnataka</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="punjab">Punjab</option>
              <option value="westbengal">West Bengal</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              width: "48%",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
            }}
            id="div-2"
          >
            <input type="text" placeholder="  Last Name" />
            <input type="text" placeholder="  Apt,suite,floor" />
            <input type="text" placeholder="  Zip Code" />
            <input type="text" placeholder="  Phone Number" />
          </div>
        </DIV>

        <div id="oder-container">
          <h2>Order Summary</h2>

          <div
            style={{
              display: "flex",
              gap: "35px",
              marginBottom: "5px",
              marginTop: "10px",
            }}
            id="prod-details"
          >
            <div>
              <h6 style={{ fontSize: "15px" }}>Meat & Veggies plan</h6>
              <p>
                3 Meals per week for 2 people <br />
                (6 servings total)
              </p>
            </div>

            <div>
              <p>
                <b>₹{mealPrice}</b>
              </p>
            </div>
          </div>

          <hr />

          <div
            style={{ display: "flex", gap: "30px", marginBottom: "10px" }}
            id="prod-shipping"
          >
            <div>
              <p>Packaging and shipping charge</p>
            </div>

            <div>
              <p>
                <b>₹{deliveryCharge}</b>
              </p>
            </div>
          </div>
          <hr />

          <div
            style={{ display: "flex", gap: "60px", marginBottom: "10px" }}
            id="prod-total"
          >
            <div>
              <p style={{ fontSize: "20px" }}>Total Amount Payable</p>
            </div>

            <div>
              <p style={{ fontSize: "20px" }}>
                <b>₹{mealPrice + deliveryCharge}</b>
              </p>
            </div>
          </div>
          <hr />

          <div>
            <h2>Delivery Summary</h2>

            <div
              style={{
                display: "flex",
                gap: "40px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <h4>Delivery Instruction</h4>
                <p>Provide your instruction (if any)</p>
              </div>
              <div>
                <p>edit</p>
              </div>
            </div>

            <div style={{ marginBottom: "5px" }}>
              <h4>Estimated Delivery</h4>
              <p>{`${new Date().toDateString()}`}</p>
            </div>

            <div style={{ marginBottom: "5px" }}>
              <h4>Special instructions</h4>
              <p>No special instruction</p>
            </div>
          </div>
        </div>
      </main>

      <button
        style={{
          width: "44%",
          height: "45px",
          marginLeft: "9.1%",
          backgroundColor: "#067a46",
          color: "white",
          fontWeight: "700",
          fontSize: "15px",
          border:'0px',
          borderRadius:'5px'
        }}
      >
        Next Step
      </button>

      <h2 style={{ textAlign: "center", marginTop: "45px" }}>FAQ</h2>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            margin: "auto",
            padding: "10px",
          }}
          id="faq-main"
        >
          <div
            style={{
              width: "30%",
              fontSize: "16px",
              padding: "30px",
              boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              borderRadius: "15px",
            }}
            className="faq-card"
          >
            <h4>What if I’m not home to receive my shipment?</h4>
            <p>
              We know our customers are busy, so you do not need to be home to
              receive your box. Our custom delivery boxes are designed to keep
              your ingredients fresh for 24 hours or longer after delivery.
            </p>
          </div>

          <div
            style={{
              width: "30%",
              fontSize: "16px",
              padding: "30px",
              boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              borderRadius: "15px",
            }}
            className="faq-card"
          >
            <h4>Can I change the time, date, or location of my delivery?</h4>
            <p>
              Yes, you can adjust the date and location of every delivery, and
              as a reminder, you do not need to be home to receive your box.
            </p>
          </div>

          <div
            style={{
              width: "30%",
              fontSize: "16px",
              padding: "30px",
              boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              borderRadius: "15px",
            }}
            className="faq-card"
          >
            <h4>How often will I be charged?</h4>
            <p>
              Your plan is weekly, but you can easily skip a week, pause, or
              cancel your account at any time. Just make sure you do so before
              your weekly cutoff to stop your next order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;

// const DIV = styled.div`
//    /* display: flex;
//    justify-content: space-around; */
//    #div-1{
//     border: 2px solid yellow;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//    }

//    #div-2{
//     display: flex;
//     flex-direction: column;
//     border: 2px solid orange;
//     gap: 15px;
//    }

//    #faq-main{
//     border: 2px solid red;
//     display: flex;
//     justify-content: space-around;
//     width: 80%;
//     margin: auto;
//     padding: 10px;
//    }

//    #faq-main h4{
//     font-size: 20px;
//    }

//    .faq-card{
//     width: 30%;
//     font-size: 16px;
//     padding: 30px;
//     box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
//     border-radius: 15px;
//    }

//    #oder-container{
//     display: flex;
//     flex-direction: column;
//     gap: 10px
//    }

//    #prod-details{
//     display: flex;
//     align-items: center;
//     border: 2px solid red;
//     gap: 40px;
//    }

//    #prod-shipping{
//     display: flex;
//     gap: 35px;
//    }

//    #prod-total{
//     display: flex;
//     gap: 100px;
//    }

//    #oder-container{
//     border: 2px solid violet;
//    }
// `

const DIV = styled.div`
  input,
  select {
    height: 45px;
  }
`;
