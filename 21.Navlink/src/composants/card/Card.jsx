import React from 'react'
import './card.css'
export default function Card() {
  return (
    <>
      <div className="carte">
        <h1>Votre profil</h1>
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <h2>Luc Bandy</h2>
        <p className="job">
          <span>Jod:</span> Photographe
        </p>
        <p className="description">
          <span>Description profil:</span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          nemo qui ipsa, labore corrupti delectus! Veniam placeat illum labore
          iste cupiditate eum quisquam quidem voluptatem, odit cum. A,
          consequatur expedita?
        </p>
      </div>
    </>
  );
}
