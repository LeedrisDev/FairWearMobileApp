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
        <div className="navbar-icon">
      <div
        className={`${activeIcon === 'home' ? 'active' : 'passive'}`}
        onClick={() => handleIconClick('home')}
      >
        <FaHome className="icon" />
        <div className="title">Home</div>
      </div>
    </div>
        <div className="navbar-icon">
      <div
        className={`${activeIcon === 'search' ? 'active' : 'passive'}`}
        onClick={() => handleIconClick('search')}
      >
        <FaSearch className="icon" />
        <div className="title">Search</div>
      </div>
        </div>
        <div className="navbar-icon">
      <div
        className={`${activeIcon === 'add' ? 'active' : 'passive'}`}
        onClick={() => handleIconClick('add')}
      >
        <FaBarcode className="icon" />
        <div className="title">Scanner</div>
      </div>
        </div>
        <div className="navbar-icon">
      <div
        className={`${activeIcon === 'user' ? 'active' : 'passive'}`}
        onClick={() => handleIconClick('user')}
      >
        <FaUser className="icon" />
        <div className="title">Profile</div>
      </div>
        </div>
    </div>
  );
}

export default NavBar;
