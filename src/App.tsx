import * as React from 'react';
import NavBar from './Components/NavBar/NavBar';

import './App.css';

function App() {
  return (
    <div className="App" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <NavBar />
    </div>
  );
}

export default App;
