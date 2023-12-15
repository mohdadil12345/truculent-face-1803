import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { Avatar, Button } from "@chakra-ui/react";

function Navbar() {

  const [displ, setdisp] = useState(true)
  const [displ_btn, setdisp_btn] = useState(true)

  const {isAuth, usename} = useContext(AuthContext)

  console.log(usename);

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

      <button className="menu-btn"  onClick={toggle}>{displ_btn? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}</button>

  

      </div>
      <div className="nav-menu" id= {displ ? "close" : "open"}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/plan">Plan</Link>
        {isAuth ? null : <Link to="/register">Signup</Link>}
      </div>

      <div className="logbtn">
      {isAuth ? (<span style={{display:'flex', alignItems:'center', gap:'20px', fontWeight:'bold'}}><Avatar id="username" color='white' size='sm' name={usename} src='https://bit.ly/tioluwani-kolawole' /><h2 id="username">{usename}</h2><Button width={'100px'} colorScheme="green" size="md" variant="outline" onClick={logoutuser}>Logout</Button></span> ) :( <Button width={'100px'} colorScheme="red" size="md" variant="outline"><Link to="/login">Login</Link></Button>)}
      </div>
    </div>
  );
}

export default Navbar;
