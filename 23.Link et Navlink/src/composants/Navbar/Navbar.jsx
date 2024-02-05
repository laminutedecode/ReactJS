import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav>
      {/* Link est utilisé pour créer des liens de navigation entre différentes vues dans une application React qui utilise React Router. Il permet de naviguer entre les différentes URL de manière déclarative sans recharger la page complète. je crée les Link avec l'attribut to qui attend le chemin d'acces*/}
        <Link to="/">Accueil</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <nav>
      {/* NavLink est un composant fourni par React Router qui est similaire à Link, mais avec quelques fonctionnalités supplémentaires spécifiquement conçues pour la navigation. NavLink est souvent utilisé pour appliquer des styles actifs aux liens de navigation actuellement actifs. navlink peut prendre d'autree attributs */}
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
