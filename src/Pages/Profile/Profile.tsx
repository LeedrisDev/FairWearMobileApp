import * as React from 'react';
import { GeneralContext } from '../../Contexts/GeneralContext';
import { Link } from 'react-router-dom';
import Unknow from '../../assets/images/unknown.jpeg';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import ImageProfile from '../../assets/images/profile-picture.jpg';

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

function ConnectedProfile() {
  const generalContext = React.useContext(GeneralContext);
  const name = generalContext?.name;

  return (
    <div className="profile-content">
      <div className="header">
        <div src={ImageProfile} className="picture-connected">
          {name[0]}
        </div>
        <div className="title-one">{name}</div>
      </div>
      <div className="history-and-progress">
        <HistoryModal />
        <ScoreModal />
      </div>
    </div>
  );
}

function Profile() {
  const currentUser = useContext(AuthContext);

  return (
    <div className="profile">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <Link to="/Settings">
        <button className="settings" type="button" aria-label="settings">
          <i className="bx bx-cog icon" />
        </button>
      </Link>
      {
        currentUser ? <ConnectedProfile /> : <UnConnectedProfile />
      }
    </div>
  );
}

export default Profile;
