import * as React from 'react';
import App from './App';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import Scanner from './Pages/Scanner/Scanner';
import Search from './Pages/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/" element={<Scanner />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  registerSW();
}
