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
      
      <button className="menu-btn"  onClick={toggle}>{displ_btn? "🎫" : "❌"}</button>
      <div className="nav-menu" id= {displ ? "close" : "open"}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/plan">Plan</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Signup</Link>
      </div>

      <button onClick={logoutuser} className="nav-log-btn">Logout</button>
      {/* <button onClick={toggle}>❌🎫</button> */}
    </div>
  );
}

export default Navbar;
