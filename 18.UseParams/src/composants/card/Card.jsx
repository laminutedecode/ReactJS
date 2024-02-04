import React from 'react'

// 1) importer le hook

import {useParams} from 'react-router-dom';


import './card.css'
export default function Card() {
const params = useParams();
console.log(params);

// cela va me renvoyer un objet avec le id de mon profil. usePrams est utils pour retrouver des parametres

  return (
    <>
      <div className="carte">
        <h1></h1>
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
          {/*  je peut affficher le params */}
        <h2>{params.id}</h2>
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
