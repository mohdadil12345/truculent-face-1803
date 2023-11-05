import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PaymentForm = styled.form`
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
`;

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    let address_ls = JSON.parse(localStorage.getItem("address"))
    let meal_ls = JSON.parse(localStorage.getItem("meal"))
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle payment logic here
      alert('Order Placed Successfully')
    };
  
    return (
      <PaymentContainer style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <PaymentForm onSubmit={handleSubmit} style={{width:'50%'}}>
            <div style={{display:'flex', alignItems:'center'}}>
            <h3 style={{marginRight:'10px'}}>Cards that we accept</h3>
            <img style={{width:'50px'}} src="https://cdn.hellofresh.com/payments/icons/mc.svg"/>
            <img style={{width:'50px'}} src="https://cdn.hellofresh.com/payments/icons/visa_logo.svg" alt="" />
            <img style={{width:'50px'}} src="https://cdn.hellofresh.com/payments/icons/discovernet.svg"/>
            </div>
          <InputField
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={{height:'60px', marginTop:'10px'}}
          />
          <InputField
            type="text"
            placeholder="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            style={{height:'60px'}}
          />
          <InputField
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={{height:'60px'}}
          />
          <PaymentButton type="submit">Pay Now</PaymentButton>
        </PaymentForm>

        <div style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', padding:'30px', borderRadius:'10px'}}>
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
                <b>₹{meal_ls[meal_ls.length-1].mealPrice}</b>
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
                <b>₹{meal_ls[meal_ls.length-1].deliveryCharge}</b>
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
                <b>₹{meal_ls[meal_ls.length-1].mealPrice + meal_ls[meal_ls.length-1].deliveryCharge}</b>
              </p>
            </div>
          </div>
          <hr />

          <div>
            <h2>Delivery Summary</h2>

            <div>
                <h4>Deliver To</h4>
                <p>
                    Name: {address_ls[address_ls.length-1].firstName} {address_ls[address_ls.length-1].lastName} <br />
                    Address: {address_ls[address_ls.length-1].addDetails}, {address_ls[address_ls.length-1].add} <br />
                             {address_ls[address_ls.length-1].city} {address_ls[address_ls.length-1].state} {address_ls[address_ls.length-1].pinCode} <br />
                             {address_ls[address_ls.length-1].phone}
                  </p>
              </div>

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
        </div>
       
      </PaymentContainer>
    );
}

export default Payment