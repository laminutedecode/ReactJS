import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1) React router permet de créerdes navigation et d'afficher certain composant en fonction d'un URL. Il possède pas mal concept. Pour installer react router faire la commande suivante:

// npm install react-router-dom


// 2) importer le module react rooter
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //3) appliquer le browserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
