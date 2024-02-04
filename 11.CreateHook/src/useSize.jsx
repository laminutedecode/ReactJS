import {useState, useEffect} from 'react'
// 1) on importe useState et useEffect
// 2) on créer une fonction dans un export default
// cela peut ce definir comme un composant sauf que au lieu de return du JSX il va nous retourner une fonction ou une valeur
export default function useSize(){
  // 3) je créer mon state
const [size, setSize] = useState();

// 4) j'utilise useeffect
useEffect(()=> {
window.addEventListener('resize', resizeFunc);

// 5) je créerma fonction reziseFunc

function resizeFunc(){
  setSize(window.innerWidth)
}
resizeFunc();
// 6) on clean la fonction
return()=> {
  window.addEventListener('resize', resizeFunc);
}
}, []);
// 7) je retourne mon state

return size;
// 8) je l'importe dans app
}

