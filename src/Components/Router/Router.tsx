import * as React from 'react';
import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile';
import Scanner from '../../Pages/Scanner/Scanner';
import Search from '../../Pages/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationPage from '../../Pages/Authentication/AuthenticationPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Scan" element={<Scanner />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
