import React from 'react'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'

function AllRoutes() {
  return (
   <div>
    <Routes>
        <Route path = "/" element =  {<Home/>}/>
        <Route path = "/login" element =  {<Login/>}/>
        <Route path = "/register" element =  {<Signup/>}/>
    </Routes>
   </div>
  )
}

export default AllRoutes