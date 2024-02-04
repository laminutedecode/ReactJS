
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    },
  },
);



// on l'exporte
export const selectCount = (state) => state.counter.value;
export default counterSlice;
