import React from 'react'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import MenuCard from './MenuCard'
import Address from './Address'
import Payment from './Payment'

function AllRoutes() {
  return (
   <div>
    <Routes>
        <Route path = "/" element =  {<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path = "/register" element =  {<Signup/>}/>
        <Route path = "/menu" element =  {<MenuCard/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/payment' element={<Payment/>}/>
    </Routes>
   </div>
  )
}

export default AllRoutes