import * as React from 'react';
import {useContext} from 'react';
import Settings from './Settings';

import '../../App.css';
import './Settings.css';
import {AuthContext} from "../../Contexts/AuthContext";
import {ISettingSetUp} from "./interfaces";

function SettingsSetUp() {
  const currentUser = useContext(AuthContext);

  let settings: ISettingSetUp = {
    isConnected: currentUser !== null,
    personalInformations: {
      username: currentUser?.displayName ?? '',
      email: currentUser?.email ?? '',
      phone: currentUser?.phoneNumber ?? '',
    },
    security: {
      password: "XXXXXXXXX"
    },
    options: {
      language: 'English',
      theme: 'Light',
    },
  }

  return <Settings settings={settings} />;
}

export default SettingsSetUp;
