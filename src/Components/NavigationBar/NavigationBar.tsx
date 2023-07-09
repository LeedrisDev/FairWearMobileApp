import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaBarcode, FaHome, FaSearch, FaUser,
} from 'react-icons/fa';

import './NavigationBar.css';

function NavigationBar() {
  const [activeIcon, setActiveIcon] = useState('scan');

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <div className="navigation-bar">
      <div className="navbar-icon">
        <Link className="nav-link" to="/Home">
          <button
            type="button"
            className={`${activeIcon === 'home' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('home')}
          >
            <FaHome className="icon" />
            <div className="title">Home</div>
          </button>
        </Link>
      </div>

      <div className="navbar-icon">
        <Link className="nav-link" to="/Search">
          <button
            type="button"
            className={`${activeIcon === 'search' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('search')}
          >
            <FaSearch className="icon" />
            <div className="title">Search</div>
          </button>
        </Link>
      </div>

      <div className="navbar-icon">
        <Link className="nav-link" to="/">
          <button
            type="button"
            className={`${activeIcon === 'scan' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('scan')}
          >
            <FaBarcode className="icon" />
            <div className="title">Scan</div>
          </button>
        </Link>
      </div>

      <div className="navbar-icon">
        <Link className="nav-link" to="/Profile">
          <button
            type="button"
            className={`${activeIcon === 'user' ? 'active' : 'passive'}`}
            onClick={() => handleIconClick('user')}
          >
            <FaUser className="icon" />
            <div className="title">Profile</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
