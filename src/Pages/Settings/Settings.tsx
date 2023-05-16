import * as React from 'react';
import './Settings.css';
import '../../App.css';
import {Link, useNavigate} from 'react-router-dom';

function Settings() {

  return (
    <div className="App">
      <button className="back">
        <Link className="nav-link" to="/Profile">P</Link>
      </button>
      <div className="content">
        {/* Personnal information */}
        <div className="category">
          <div className="title-one">Personal Information</div>
          <div className="options">
            <div className="option">
              <div className="title-four grey">Username</div>
              <div className="action">Margaux</div>
            </div>
            <div className="option">
              <div className="title-four grey">Email address</div>
              <div className="action">margaux.cavalie@gmail.com</div>
            </div>
            <div className="option">
              <div className="title-four grey">Phone number</div>
              <div className="action">+33 7 81 99 93 99</div>
            </div>
          </div>
        </div>
        <hr />
        {/* Security */}
        <div className="category">
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
        <div className="category">
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
