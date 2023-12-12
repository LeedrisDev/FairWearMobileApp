import * as React from 'react';
import { ISecurityInformations } from './interfaces';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
      <div className="field-class">{field}</div>
      <div onClick={action} className="action2">{content}</div>
    </div>
  );
}

function PersonalinformationsSettings({ personalInformations }: IPersonalInformationsProps) {
  return (
    <div className="category-settings">
      <div className="title-one">Personal information</div>
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
    <div className="settings-page">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <button className="back" type="button" aria-label="Back to Previous Page">
        <Link className="nav-link" to="/Profile">
          <i className="bx bx-left-arrow-alt back-icon" />
        </Link>
      </button>
      <div className="settings-content">
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
        <div className='disconnection'>
          Log out
        </div>
      </div>
    </div>
  );
}

export default Settings;
