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
import 'firebase/auth';
import './index.css';
import AuthProvider from './Contexts/AuthContext';
import SignupPage from './Pages/Authentication/SignUp/SignupPage';
import LoginPage from './Pages/Authentication/Login/LoginPage';
import AuthenticationPage from './Pages/Authentication/AuthenticationPage';
import StartPage from './Pages/StartPage/StartPage';
import PasswordForgotPage from './Pages/Authentication/PasswordForgot/PasswordForgotPage';
import GeneralProvider from './Contexts/GeneralContext';
import LevelPage from './Pages/Levels/LevelsPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <GeneralProvider>
        <BrowserRouter>
          <div style={{ width: window.innerWidth, height: window.innerHeight }}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/" element={<StartPage />} />
              <Route path="/Scan" element={<ScannerPage />} />
              <Route path="/Profile" element={<ProfileSetUp />} />
              <Route path="/Settings" element={<SettingsSetUp />} />
              <Route path="/Alternative" element={<ImagesGrid />} />
              <Route path="/TopBrand/:productId" element={<TopBrandPage />} />
              <Route path="/Brand/:productId" element={<BrandPage />} />
              <Route path="/Auth" element={<AuthenticationPage />} />
              <Route path="/Signup" element={<SignupPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Levels" element={<LevelPage />} />
              <Route path="/Auth/Reset" element={<PasswordForgotPage />} />

            </Routes>
            <NavigationBar />
          </div>
        </BrowserRouter>
      </GeneralProvider>
    </AuthProvider>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  registerSW();
}
