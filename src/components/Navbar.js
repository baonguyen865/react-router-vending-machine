import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink end className={({ isActive }) => isActive ? 'Navbar-active' : undefined } to='/'>
          Home
        </NavLink>
        <NavLink end className={({ isActive }) => isActive ? 'Navbar-active' : undefined } to='/chips'>
          Chips
        </NavLink>
        <NavLink end className={({ isActive }) => isActive ? 'Navbar-active' : undefined } to='/soda'>
          Soda
        </NavLink>
        <NavLink end className={({ isActive }) => isActive ? 'Navbar-active' : undefined } to='/sardines'>
          Sardines
        </NavLink>
      </div>
    );
  }
}
export default Navbar;