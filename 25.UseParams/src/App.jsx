// useParams est un hook qui fait partie de la bibliothèque React Router. Il permet d'extraire les paramètres de l'URL d'une route. 

import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Home from './components/Home';
import User from './components/Users';

const App = () => {
  return (
   <>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/123">User</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </div>
  </Router></>
  );
};

export default App;
