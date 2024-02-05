// 1) on initialise le contexte

import React,{createContext, useState} from 'react';

export const ThemeContext = createContext();

//  2) on creer un composant avec du state que l'ont veut patager avec toute lapplication
const ThemeContextProvider = props => {
const [theme, setTheme] = useState(false);

// on retourne ensuite le provider cest lui qui va apporter toutes les données dans lapplication. props.children est pour afficher tout les enfants qui seront englober


// 8) je peu tmaintenant passer des fonctions en meme temps
const toggleTheme = () => {
  setTheme(!theme)
}

if(theme){
  document.body.classList.add('dark-body');
} else {
  document.body.classList.remove('dark-body');
}

// 9 ensuite aller sur le bouton dans le fichier Btns.js




return (
  // 9) je le rajoute a la fonction cela va me permettre d'utiliser cette fonction ailleur
  <ThemeContext.Provider value ={{toggleTheme, theme}}>
    {props.children}
  </ThemeContext.Provider>
)
}

// 3) on l'exporte

export default ThemeContextProvider;

