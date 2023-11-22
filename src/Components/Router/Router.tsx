import * as React from 'react';
import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile';
import Scanner from '../../Pages/Scanner/Scanner';
import Search from '../../Pages/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IProfileSetUp from '../../Pages/Profile/interfaces';

function Router() {
  const fakeProfile: IProfileSetUp = {
    isConnected: false,
    image: 'profile-image-url',
    name: 'John Doe',
    historic: [],
    todos: [0, 0, 0],
    level: 7,
    score: 123,
    numberOfScan: 12,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/" element={<Scanner />} />
        <Route path="/Profile" element={<Profile profile={fakeProfile} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
