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
// import SignupPage from "./Pages/Authentication/SignUp/SignupPage";
import AuthProvider from "./Context/Auth";
import 'firebase/auth';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <div style={{ width: window.innerWidth, height: window.innerHeight }}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/" element={<ScannerPage />} />
          <Route path="/Profile" element={<ProfileSetUp />} />
          <Route path="/Settings" element={<SettingsSetUp />} />
          <Route path="/Alternative" element={<ImagesGrid />} />
          <Route path="/TopBrand/:productId" element={<TopBrandPage />} />
          <Route path="/Brand/:productId" element={<BrandPage />} />
        </Routes>
        <NavigationBar />
      </div>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  registerSW();
}
