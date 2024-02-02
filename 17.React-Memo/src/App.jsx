// App.js
import React, { useState } from 'react';
import MemoizedComponent from './components/MemoizedComponent';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MemoizedComponent value={count} />
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </>
  );
}

export default App;
