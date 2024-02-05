import * as React from 'react';
import TopBrandPage from './Pages/TopBrand/TopBrandPage';
import Home from './Pages/Home/Home';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import ProfileSetUp from './Pages/Profile/ProfileSetUp';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import ScannerPage from './Pages/Scanner/ScannerPage';
import Search from './Pages/Search/Search';
import SettingsSetUp from './Pages/Settings/SettingsSetUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BrandPage from './Pages/Brand/BrandPage';
import LevelsPage from './Pages/Levels/LevelsPage';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="light-mode" id="theme-element">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/" element={<ScannerPage />} />
          <Route path="/Profile" element={<ProfileSetUp />} />
          <Route path="/Settings" element={<SettingsSetUp />} />
          <Route path="/TopBrand/:productId" element={<TopBrandPage />} />
          <Route path="/Brand/:productId" element={<BrandPage />} />
          <Route path="/Levels" element={<LevelsPage />} />
        </Routes>
        <NavigationBar />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  registerSW();
}
