import React from 'react'
// 1) jimporte le module
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        {/* 2 ) je crée les Link avec l'attribut to qui attend le chemin d'acces*/}
        <Link to="/">Accueil</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
