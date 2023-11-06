import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

 const [token, setToken] = useState(localStorage.getItem("token"))
 function handleLogout(){
  setToken(null)
 }

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/Hello_Fresh_Lockup.png" alt="" />
      </div>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/plan">Plan</Link>

        {token ? <button onClick={handleLogout} className="nav-log-btn">Logout</button> : <Link to="/login">Login</Link>}
        
        {token ? null : <Link to="/register">Signup</Link>}
      </div>

      
    </div>
  );
}

export default Navbar;
