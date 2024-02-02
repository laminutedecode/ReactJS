
// importer la config pour configurer votre store
import { configureStore } from "@reduxjs/toolkit";

// créer le fichier counter
import counterReducer from "./Counter/counterSlice";


// exporter
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
