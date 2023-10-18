import * as React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISecurityInformations } from './interfaces';
import {Link, useNavigate} from 'react-router-dom';
import {
  IOptionsProps,
  IPersonalInformationsProps,
  ISettingFieldProps,
  ISettingSetUpProps,
} from './interfacesProps';

import '../../App.css';
import './Settings.css';
import { signOut } from 'firebase/auth';
import auth from '../../Utils/Auth';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

function SettingField({ field, content }: ISettingFieldProps) {
  return (
    <div className="option">
      <div className="title-four grey">{field}</div>
      <div className="action">{content}</div>
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
  return (
    <div className="category-settings">
      <div className="title-one">Options</div>
      <div className="options">
        <SettingField field="Language" content={options.langage} />
        <SettingField field="Theme" content={options.theme} />
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
  const currentUser = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
      signOut(auth).then(() => {
        navigate("/");
      })
  }
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
        <Button className="button-container logout-button" onClick={handleSignOut} hidden={!currentUser}>
            <span>Sign out</span>
        </Button>

    </div>
  );
}

export default Settings;
