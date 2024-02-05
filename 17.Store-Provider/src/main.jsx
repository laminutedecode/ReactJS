// Le Provider est un composant React fourni par des bibliothèques comme Redux. Il permet de fournir le store à tous les composants de l'application sans avoir à les passer explicitement en tant que propriétés (props).
// En enveloppant votre application avec le Provider et en y passant le store en tant que prop, vous permettez à n'importe quel composant de l'application d'accéder à l'état global du store.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
)

  