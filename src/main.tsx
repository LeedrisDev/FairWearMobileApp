import * as React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Scanner from './Pages/Scanner/Scanner';
import NavBar from './Components/NavBar/NavBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/" element={<Scanner />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  registerSW();
}
