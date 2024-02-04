import './App.css';


// 8) je limporte dans app
import useSize from './useSize'

function App() {
// pour creer un hook crée un fichier avec "use" au début: ex useSize

// 9) je l'utilise comme un autre hook
const widthSize = useSize();
// console.log(widthSize);

if(widthSize > 880){
  console.log("Descktop");
}else {
  console.log('Mobil and Tablet')
}


  return (
    <div className="App">

     <p>La width du navigateur est de :  {widthSize}px</p>
    </div>
  );

};
export default App;

