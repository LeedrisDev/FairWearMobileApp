import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import NavBar from './Components/NavBar/NavBar';
import Settings from './Pages/Settings/Settings';
import ScannerPage from './Pages/Scanner/ScannerPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ width: window.innerWidth, height: window.innerHeight }}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/" element={<ScannerPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  registerSW();
}
