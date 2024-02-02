
// importer la config pour configurer votre store
import { configureStore } from "@reduxjs/toolkit";

// créer le fichier counterSlice
import counterReducer from "./Counter/counterSlice";


// Placer le reducer
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
