import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './composants/composant'
import Profil from './composants/card/Card'
import Navbar from './composants/Navbar/Navbar'
import P404 from './composants/404/404'
import Portfolio from './composants/Portfolio/Portfolio'
import Contact from './composants/Contact/Contact'
import Photographies from './composants/Photographies/Photographies'
import Graphisme from './composants/Graphisme/Graphisme'


// 1) créerun composant Navbar

function App() {
  return (
    <div className="App">
      <Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/portfolio" element={<Portfolio />}>

      <Route path='/portfolio/photographies' element={<Photographies />}/>
      <Route path='/portfolio/graphisme' element={<Graphisme />}/>

      </Route>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/profil/:id" element={<Profil />}/>
    <Route path="*" element={<P404 />}/>
  </Routes>
    </div>
  );
}

export default App;
