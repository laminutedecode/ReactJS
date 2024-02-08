import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './composants/composant';
import Profil from './composants/card/Card';
import P404 from './composants/404/404';

function App() {
  return (
    <div className="App">
      <Routes>
      {/* Les routes, dans un contexte général, font référence aux URL qui permettent d'accéder à différentes pages ou sections d'une application web */}
        {/* The Home route */}
        <Route path="/" element={<Home />} />

        {/* The Profil route with parameter :id */}
        <Route path="/profil/:id" element={<Profil />} />

        {/* The 404 route */}
        <Route path="*" element={<P404 />} />
      </Routes>
    </div>
  );
}

export default App;
