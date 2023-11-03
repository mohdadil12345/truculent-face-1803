import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/Hello_Fresh_Lockup.png" alt="" />
      </div>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Signup</Link>
      </div>

      <button className="nav-log-btn">Logout</button>
    </div>
  );
}

export default Navbar;
