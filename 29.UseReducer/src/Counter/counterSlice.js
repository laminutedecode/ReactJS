
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    },
    reducers: {
    increment: (state) => {
      // Redux Toolkit nous permet d'écrire une logique "mutante" dans les réducteurs. Ce
      // ne modifie pas réellement l'état car il utilise la bibliothèque immer,
      // qui détecte les modifications apportées à un "état brouillon" et produit un tout nouveau
      // état immuable basé sur ces changements
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
 



// on export le reducer
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
