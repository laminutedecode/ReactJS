import React from 'react'
// 2) on rajoute Navlink
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        {/* navlink peut prendre d'autree attributs */}
        <NavLink
          // style={({isActive}) => {
          //   // console.log(obj);
          //   return isActive ? {color: "crimson"} : { color: "#333"}
          // }}
          style={({ isActive }) => {
            // console.log(obj);
            return isActive ? { color: "crimson" } : { color: "#333" };
          }}
          to="/"
        >
          Accueil
        </NavLink>
        {/* on peutfaire la même chise avec une classe CSS */}
        <NavLink
        className={({isActive})=> isActive ? "active-lien" : ""}
        to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}
