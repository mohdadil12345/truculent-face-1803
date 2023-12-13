import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [displ, setdisp] = useState(true)
  const [displ_btn, setdisp_btn] = useState(true)

  const toggle = () => {
    setdisp(!displ)
    setdisp_btn(!displ_btn)
  }

  const logoutuser = () => {
    alert("logoutsuccess")
    localStorage.removeItem("token");
      window.location.href = '/'
  }
  
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/Hello_Fresh_Lockup.png" alt="" />
      </div>
      
      <div className="menubtn">
      <button className="menu-btn"  onClick={toggle}>{displ_btn? "🎫": "❌"}</button>
      </div>
      <div className="nav-menu" id= {displ ? "close" : "open"}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/plan">Plan</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Signup</Link>
      </div>

      <div className="logbtn">
      <button onClick={logoutuser} className="nav-log-btn">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
