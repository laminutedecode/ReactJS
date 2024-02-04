import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './composants/composant'
import Profil from './composants/card/Card'
import Navbar from './composants/Navbar/Navbar'
import P404 from './composants/404/404'
import Portfolio from './composants/Portfolio/Portfolio'
import Contact from './composants/Contact/Contact'


// 1) créerun composant Navbar

function App() {
  return (
    <div className="App">
      <Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/profil/:id" element={<Profil />}/>
    <Route path="*" element={<P404 />}/>
  </Routes>
    </div>
  );
}

export default App;
