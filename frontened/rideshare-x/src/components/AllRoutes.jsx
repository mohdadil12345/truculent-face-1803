import React from 'react'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import MenuCard from './MenuCard'

function AllRoutes() {
  return (
   <div>
    <Routes>
        <Route path = "/" element =  {<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path = "/register" element =  {<Signup/>}/>
        <Route path = "/menu" element =  {<MenuCard/>}/>
    </Routes>
   </div>
  )
}

export default AllRoutes