import * as React from 'react';
import { useState, useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISecurityInformations } from './interfaces';
import { Link } from 'react-router-dom';
import {
  IOptionsProps,
  IPersonalInformationsProps,
  ISettingFieldProps,
  ISettingSetUpProps,
} from './interfacesProps';

import '../../App.css';
import './Settings.css';

function SettingField({ field, content, action }: ISettingFieldProps) {
  return (
    <div className="option">
      <div className="title-four grey">{field}</div>
      <button className="action" onClick={action}>{content}</button>
    </div>
  );
}

function PersonalinformationsSettings({ personalInformations }: IPersonalInformationsProps) {
  return (
    <div className="category-settings">
      <div className="title-one">Personal Information</div>
      <div className="options">
        <SettingField field="Username" content={personalInformations.username} />
        <SettingField field="Email address" content={personalInformations.email} />
        <SettingField field="Phone number" content={personalInformations.phone} />
      </div>
    </div>
  );
}

function OptionsSettings({ options }: IOptionsProps) {
  const [theme, setTheme] = useState('light-mode');
  const toggleTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="category-settings">
      <div className="title-one">Options</div>
      <div className="options">
        <SettingField field="Language" content={options.langage} />
        <SettingField field="Theme" content={options.theme} action={toggleTheme} />
      </div>
    </div>
  );
}

function SecuritySettings({ password }: ISecurityInformations) {
  return (
    <div className="category-settings">
      <div className="title-one">Security</div>
      <div className="options">
        <SettingField field="Password" content={password} />
      </div>
    </div>
  );
}

function Settings({ settings }: ISettingSetUpProps) {
  return (
    <div className="settings-page" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <button className="back" type="button">
        <Link className="nav-link" to="/Profile">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
        </Link>
      </button>
      {
        settings.isConnected ? (
          <div className="content-settings">
            <PersonalinformationsSettings personalInformations={settings.personalInformations} />
            <hr />
            <SecuritySettings password={settings.security.password} />
            <hr />
          </div>
        ) : null
      }
      <div className="content-settings">
        <OptionsSettings options={settings.options} />
      </div>
    </div>
  );
}

export default Settings;
