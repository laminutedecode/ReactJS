
// 1) importer useSelector, useState et selectCount

// useSelector va nous permttre d'avoir accès a nos donnée en nous connectant avec le store on va pouvoir passer le state à un reducer que l'ont va créer plus tard

import React , {useState} from "react";
import { useSelector} from "react-redux";
import {selectCount} from "./counterSlice";


export function Counter() {

  // 2) créer les variables qui retoune selectCount
 const count = useSelector(selectCount);
 const [incrementAmount, setIncrementAmount] = useState("2");

//  3) l'exporter dans counterSlider tout en bas

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
