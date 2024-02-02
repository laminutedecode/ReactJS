
import React , {useState} from "react";


// 1) importer useDispatch va nous permettre de retourner une fonction que je peut utiliser sur plusieur elements
import { useSelector, useDispatch } from "react-redux";


import styles from "./Counter.module.css";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";


export function Counter() {

 const count = useSelector(selectCount);
 const [incrementAmount, setIncrementAmount] = useState("2");

//  2) créer la variable
 const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
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
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Ajouter
        </button>
        <button
          className={styles.asyncButton}
        >
          Ajout assync
        </button>
      </div>
    </div>
  );
}
