import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './composants/composant'
import Profil from './composants/card/Card'
import P404 from './composants/404/404'


function App() {
  return (
    <div className="App">

  <Routes>
    <Route path="/" element={<Home />}/>
    {/* chemin dynamique */}
    {/* je rajoute :id pour les app qui ont plusieur profil comme cela jutilise uen route pour afficher plusieurs profils */}
    <Route path="/profil/:id" element={<Profil />}/>

    {/* * represente tout les fichiers que nous avons pas créer */}
    {/* si je rajoute a lurl /contact/jo en plus  */}
    {/* cela est pratique pour les 404 */}
    <Route path="*" element={<P404 />}/>
  </Routes>
    </div>
  );
}

export default App;
