import * as React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="nav-link" to="/Home">
          <div
            className={`${activeIcon === 'home' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('home')}
          >
            <FaHome className="icon" />
            <div className="title">Home</div>
          </div>
        </Link>
      </div>
      <div className="navbar-icon">
        <Link className="nav-link" to="/Search">
          <div
            className={`${activeIcon === 'search' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('search')}
          >
            <FaSearch className="icon" />
            <div className="title">Search</div>
          </div>
        </Link>
      </div>
      <div className="navbar-icon">
        <Link className="nav-link" to="/">
          <div
            className={`${activeIcon === 'add' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('add')}
          >
            <FaBarcode className="icon" />
            <div className="title">Scanner</div>
          </div>
        </Link>
      </div>
      <div className="navbar-icon">
        <Link className="nav-link" to="/Profile">
          <div
            className={`${activeIcon === 'user' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('user')}
          >
            <FaUser className="icon" />
            <div className="title">Profile</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
