import React from "react";


export function Counter() {

// on créer notre composant
  return (
    <div>
      <div >
        <button>+</button>
        <span>0</span>
        <button > - </button>
      </div>
      <div >
       <input/>
        <button > Ajouter</button>
       <button> Ajout assync </button>
      </div>
    </div>
  );
}
