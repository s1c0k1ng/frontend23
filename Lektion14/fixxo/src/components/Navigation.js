import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
    <NavLink to="/ ">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navigation