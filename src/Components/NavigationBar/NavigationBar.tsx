import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css';

function NavigationBar() {
  const [activeIcon, setActiveIcon] = useState(window.location.pathname);

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <div className="navigation-bar">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <div className={`${activeIcon === '/Home' ? 'active' : 'passive'}`}>
        <Link to="/Home">
          <button
            type="button"
            className={`${activeIcon === '/Home' ? 'button-active' : 'button'}`}
            onClick={() => handleIconClick('/Home')}
          >
            <i className="bx bx-home-alt-2 icon" />
            <div className="title">Home</div>
          </button>
        </Link>
      </div>

      <div className={`${activeIcon === '/Search' ? 'active' : 'passive'}`}>
        <Link to="/Search">
          <button
            type="button"
            className={`${activeIcon === '/Search' ? 'button-active' : 'button'}`}
            onClick={() => handleIconClick('/Search')}
          >
            <i className="bx bx-search icon" />
            <div className="title">Search</div>
          </button>
        </Link>
      </div>

      <div className={`${activeIcon === '/' ? 'active' : 'passive'}`}>
        <Link to="/">
          <button
            type="button"
            onClick={() => handleIconClick('/')}
            className={`${activeIcon === '/' ? 'button-active' : 'button'}`}
          >
            <i className="bx bx-barcode-reader icon" />
            <div className="title">Scan</div>
          </button>
        </Link>
      </div>

      <div className={`${activeIcon === '/Profile' ? 'active' : 'passive'}`}>
        <Link to="/Profile">
          <button
            type="button"
            className={`${activeIcon === '/Profile' ? 'button-active' : 'button'}`}
            onClick={() => handleIconClick('/Profile')}
          >
            <i className="bx bx-user icon" />
            <div className="title">Profile</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
