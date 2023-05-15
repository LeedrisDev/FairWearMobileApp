import * as React from 'react';
import { useState } from 'react';
import {
  FaHome, FaSearch, FaUser, FaBarcode,
} from 'react-icons/fa';

import './NavBar.css';

function NavBar() {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="navbar">
      <div
        className={`navbar-icon ${activeIcon === 'home' ? 'active' : ''}`}
        onClick={() => handleIconClick('home')}
      >
        <FaHome />
      </div>
      <div
        className={`navbar-icon ${activeIcon === 'search' ? 'active' : ''}`}
        onClick={() => handleIconClick('search')}
      >
        <FaSearch />
      </div>
      <div
        className={`navbar-icon ${activeIcon === 'add' ? 'active' : ''}`}
        onClick={() => handleIconClick('add')}
      >
        <FaBarcode />
      </div>
      <div
        className={`navbar-icon ${activeIcon === 'user' ? 'active' : ''}`}
        onClick={() => handleIconClick('user')}
      >
        <FaUser />
      </div>
    </div>
  );
}

export default NavBar;
