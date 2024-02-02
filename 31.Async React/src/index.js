import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 1) importer store et provider
import store from "./store";
import { Provider } from "react-redux";

// 2) appliquer le provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 3) créer le fichier store


