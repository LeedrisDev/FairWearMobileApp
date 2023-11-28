import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css';

function NavigationBar() {
  const [activeIcon, setActiveIcon] = useState('scan');

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <div className="navigation-bar">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className={`${activeIcon === 'home' ? 'active' : 'passive'}`}>
        <Link to="/Home">
          <button
            type="button"
            className={`${activeIcon === 'home' ? 'button-active' : 'button'}`}
            onClick={() => handleIconClick('home')}
          >
            <i className='bx bx-home-alt-2 icon'></i>
            <div className="title">Home</div>
          </button>
        </Link>
      </div>

      <div className={`${activeIcon === 'search' ? 'active' : 'passive'}`}>
        <Link to="/Search">
          <button
            type="button"
            className={`${activeIcon === 'search' ? 'button-active' : 'button'}`}
            onClick={() => handleIconClick('search')}
          >
            <i className='bx bx-search icon'></i>
            <div className="title">Search</div>
          </button>
        </Link>
      </div>

      <div className={`${activeIcon === 'scan' ? 'active' : 'passive'}`}>
        <Link to="/">
          <button
            type="button"
            onClick={() => handleIconClick('scan')}
            className={`${activeIcon === 'scan' ? 'button-active' : 'button'}`}
          >
            <i className='bx bx-barcode-reader icon'></i>
            <div className="title">Scan</div>
          </button>
        </Link>
      </div>

      <div className={`${activeIcon === 'user' ? 'active' : 'passive'}`}>
        <Link to="/Profile">
          <button
            type="button"
            className={`${activeIcon === 'user' ? 'button-active' : 'button'}`}
            onClick={() => handleIconClick('user')}
          >
            <i className='bx bx-user icon'></i>
            <div className="title">Profile</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
