
import React , {useState} from "react";
import { useSelector} from "react-redux";

// 1) on importe le css et les elements suivant
import styles from "./Counter.module.css";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";


export function Counter() {

  // 2) créer les variables
 const count = useSelector(selectCount);
 const [incrementAmount, setIncrementAmount] = useState("2");

//  3) l'exporter dans counterSlider tout en bas

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.button} >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} >
          -
        </button>
      </div>
      <div className={styles.container}>
        <input
          className={styles.textbox}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
        >
          Ajouter
        </button>
        <button
          className={styles.asyncButton} >
          Ajout assync
        </button>
      </div>
    </div>
  );
}
