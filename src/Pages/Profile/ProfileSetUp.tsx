import * as React from 'react';
import { profile } from '../../Business/BusinessGeneral';
import Profile from './Profile';

import '../../App.css';
import './Profile.css';

function ProfileSetUp() {
  return <Profile profile={profile} />;
}

export default ProfileSetUp;
