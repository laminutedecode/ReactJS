import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

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

        {/* Rajouter l'assync au dernier bouton */}
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Ajout assync
        </button>
      </div>
    </div>
  );
}
