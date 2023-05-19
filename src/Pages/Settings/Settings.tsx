import * as React from 'react';
import './Settings.css';
import '../../App.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Settings() {
  return (
    <div className="App">
      <button className="back" type="button">
        <Link className="nav-link" to="/Profile">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
        </Link>
      </button>
      <div className="content-settings">
        {/* Personnal information */}
        <div className="category-settings">
          <div className="title-one">Personal Information</div>
          <div className="options">
            <div className="option">
              <div className="title-four grey">Username</div>
              <div className="action">XXXXXX</div>
            </div>
            <div className="option">
              <div className="title-four grey">Email address</div>
              <div className="action">XXXXXX</div>
            </div>
            <div className="option">
              <div className="title-four grey">Phone number</div>
              <div className="action">+33 X XX XX XX XX</div>
            </div>
          </div>
        </div>
        <hr />
        {/* Security */}
        <div className="category-settings">
          <div className="title-one">Security</div>
          <div className="options">
            <div className="option">
              <div className="title-four grey">Password</div>
              <div className="action">************</div>
            </div>
          </div>
        </div>
        <hr />
        {/* Options */}
        <div className="category-settings">
          <div className="title-one">Options</div>
          <div className="options">
            <div className="option">
              <div className="title-four grey">Language</div>
              <div className="action">English</div>
            </div>
            <div className="option">
              <div className="title-four grey">Theme</div>
              <div className="action">Light</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
