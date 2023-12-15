import React from 'react'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import MenuDetails from './MenuDetails'
import Address from './Address'
import Payment from './Payment'
import Plan from './Plan'
import PrivateRoute from '../AuthContext/PrivateRoute'

function AllRoutes() {
  return (
   <div>
    <Routes>
        <Route path = "/" element =  {<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path = "/register" element =  {<Signup/>}/>
        <Route path = "/menu" element =  {<Menu/>}/>
        <Route path = "/menu/:id" element =  {<MenuDetails/>}/>
        <Route path ='/address' element={<Address/>}/>
        <Route path = '/plan' element={<PrivateRoute>
          <Plan/>
        </PrivateRoute>}/>
        <Route path='/payment' element={<Payment/>}/>
    </Routes>
   </div>
  )
}

export default AllRoutes