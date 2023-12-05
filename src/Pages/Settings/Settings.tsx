import * as React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  IOptionsProps,
  IPersonalInformationsProps,
  ISettingFieldProps,
  ISettingSetUpProps,
} from './interfacesProps';

import '../../App.css';
import './Settings.css';
import { signOut } from 'firebase/auth';
import auth, { deleteAccount, passwordReset } from '../../Utils/Auth';
import { Button } from 'react-bootstrap';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';
import { IPersonalInformations } from './interfaces';
import {GeneralContext} from "../../Contexts/GeneralContext";

function SettingField({ field, content }: ISettingFieldProps) {
  return (
    <div className="option">
      <div className="title-four grey">{field}</div>
      <div className="action">{content}</div>
    </div>
  );
}

function PersonalinformationsSettings({ personalInformations }: IPersonalInformationsProps) {
    const generalContext = React.useContext(GeneralContext);
    const name = generalContext?.name;

  return (
    <div className="category-settings">
      <div className="title-one">Personal Information</div>
      <div className="options">
        <SettingField field="Username" content={name} />
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
        <SettingField field="Language" content={options.language} />
        <SettingField field="Theme" content={options.theme} />
      </div>
    </div>
  );
}

function SecuritySettings({
  user,
  setAlert,
}: { user: IPersonalInformations, setAlert: (state: any) => void }) {
  const navigate = useNavigate();
  return (
    <div className="category-settings">
      <div className="title-one">Security</div>
      <div className="options">
        {/* <SettingField field="Password" content={""} /> */}
        <button
          type="button"
          className="no-container-button"
          onClick={() => {
            passwordReset(user.email)
              ?.then(() => {
                console.log(setAlert);
                setAlert({
                  hasError: false,
                  message: 'Password reset email sent!',
                });
              })
              ?.catch((error) => {
                console.log(setAlert);
                setAlert({
                  hasError: true,
                  message: error,
                });
              });
          }}
        >
          <span className="action">Reset password</span>
        </button>
        <button
          type="button"
          className="no-container-button"
          onClick={() => {
            deleteAccount()
              ?.then(() => {
                navigate('/Auth');
              })
              ?.catch((error) => {
                setAlert({
                  hasError: true,
                  message: error,
                });
              });
          }}
        >
          <span className="action" style={{ color: 'RED' }}>Delete Account</span>
        </button>
      </div>
    </div>
  );
}

function Settings({ settings }: ISettingSetUpProps) {
  const navigate = useNavigate();
  const msgs = React.useRef<Messages>(null);

  const [alert, setAlert] = React.useState({
    hasError: false,
    message: '',
  });
  useMountEffect(() => {
    if (msgs.current) {
      msgs.current.clear();
      if (alert.hasError) {
        msgs.current.show({
          sticky: true,
          severity: 'error',
          summary: 'Error',
          detail: alert.message,
          closable: true,
        });
      } else if (alert.message !== '') {
        msgs.current.show({
          sticky: true,
          severity: 'success',
          summary: 'Success',
          detail: alert.message,
          closable: true,
        });
      }
    }
  });
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/Profile');
    });
  };
  return (
    <div className="settings-page" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <button className="back" type="button" aria-label="Go back">
        <Link className="nav-link" to="/Profile">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
        </Link>
      </button>
      <Messages ref={msgs} />

      {
          settings.isConnected ? (
            <div className="content-settings">
              <PersonalinformationsSettings personalInformations={settings.personalInformations} />
              <hr />
              <SecuritySettings
                user={settings.personalInformations}
                setAlert={(state: any) => setAlert(state)}
              />
              <hr />
            </div>
          ) : null
        }
      <div className="content-settings">
        <OptionsSettings options={settings.options} />
      </div>
      <Button
        className="button-container logout-button"
        onClick={handleSignOut}
        hidden={!settings.isConnected}
      >
        <span>Sign out</span>
      </Button>

    </div>
  );
}

export default Settings;
