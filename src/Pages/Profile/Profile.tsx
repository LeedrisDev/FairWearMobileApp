import * as React from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageProfile from '../../assets/images/profilePic.jpg';
import IProfileProps from './interfaceProps';
import { Link } from 'react-router-dom';
import Unknow from '../../assets/images/unknown.jpeg';

import '../../App.css';
import './Profile.css';
import HistoryModal from '../../Components/HistoryModal/HistoryModal';
import ScoreModal from '../../Components/ScoreModal/ScoreModal';

function UnConnectedProfile() {
  return (
    <div>
      <div>
        <img src={Unknow} className="picture-unconnected" alt="Me" />
        <div>
          <div className="title-one">Connectez-vous</div>
        </div>
      </div>
      <div>
        <div className="box-unconnected">
          <div className="box-unconnected-text">
            <div className="text">
              In the next version of FairWear,
              you can create your own account to remember your scanned products,
              your consumption or set new shopping goals.
            </div>
            <div className="text">Then we’ll see you in our next update!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectedProfile({ profile }: IProfileProps) {
  return (
    <div className='profile-content'>
      <div className='header'>
        <img src={ImageProfile} className="picture-connected" alt="Me" />
        <div className="title-one">{profile.name}</div>
      </div>
      <div className='history-and-progress'>
        <HistoryModal history={profile.historic} />
        <ScoreModal profile={profile} />
      </div>
    </div>
  );
}

function Profile({ profile }: IProfileProps) {
  return (
    <div className="profile">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <Link to="/Settings">
        <button className="settings" type="button" aria-label="settings">
          <i className='bx bx-cog icon'></i>
        </button>
      </Link>
      {
        profile.isConnected ? <ConnectedProfile profile={profile} /> : <UnConnectedProfile />
      }
    </div>
  );
}

export default Profile;
