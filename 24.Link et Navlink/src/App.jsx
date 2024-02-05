import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './composants/Navbar/Navbar';
import Home from './composants/composant';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Graphisme from './pages/Graphisme/Graphisme';
import Photographies from './pages/Photographies/Photographies';


// 1) créerun composant Navbar

function App() {
  return (
    <div className="App">
      <Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path='/portfolio/photographies' element={<Photographies />}/>
      <Route path='/portfolio/graphisme' element={<Graphisme />}/>
    <Route path="/contact" element={<Contact />}/>
  </Routes>
    </div>
  );
}

export default App;
