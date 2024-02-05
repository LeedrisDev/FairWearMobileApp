import * as React from 'react';
import { settings } from '../../Business/BusinessGeneral';
import Settings from './Settings';

import '../../App.css';
import './Settings.css';

function SettingsSetUp() {
  return <Settings settings={settings} />;
}

export default SettingsSetUp;
