import * as React from 'react';
import TopBrandPage from './Pages/TopBrand/TopBrandPage';
import Home from './Pages/Home/Home';
import ImagesGrid from './Components/Images/ImagesGrid';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import ProfileSetUp from './Pages/Profile/ProfileSetUp';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import ScannerPage from './Pages/Scanner/ScannerPage';
import Search from './Pages/Search/Search';
import SettingsSetUp from './Pages/Settings/SettingsSetUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BrandPage from './Pages/Brand/BrandPage';

import './index.css';
import LevelPage from "./Pages/Levels/LevelsPage";
import {profile} from "./Business/BusinessGeneral";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <LevelPage profile={profile} />
);

if ('serviceWorker' in navigator) {
  registerSW();
}
