import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router'

export default function NavBar() {
  return (
    <div>
        <Link to="/home">Home</Link> 
        <Link to="/">Login</Link> 
        <Link to="/register">Register</Link> 
        <Link to="/cart">Cart</Link> 
        <Outlet />
    </div>
  )
}
