import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Logo</h2>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Signup</Link>

      <button>Logout</button>
    </div>
  );
}

export default Navbar;
