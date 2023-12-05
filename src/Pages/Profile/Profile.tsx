import * as React from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageProfile from '../../assets/profilePic.jpg';
import { Link } from 'react-router-dom';
import Unknow from '../../assets/unknown.jpeg';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import HistoryModal from '../../Components/HistoryModal/HistoryModal';
import ScoreModal from '../../Components/ScoreModal/ScoreModal';

import '../../App.css';
import './Profile.css';
import { profile } from '../../Business/BusinessGeneral';
import {GeneralContext, GeneralModel} from "../../Contexts/GeneralContext";

function UnConnectedProfile() {
  return (
    <div>
      <div>
        <img src={Unknow} className="picture-unconnected" alt="Me" />
        <div className="title-box-unconnected">
          <Link className="nav-link" to="/">
            <div className="title-unconnected">Connectez-vous</div>
          </Link>
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
    <div>
      <div>
        <img src={ImageProfile} className="picture-connected" alt="Me" />
        <div className="title-box-unconnected">
          <div className="title-unconnected">{name}</div>
        </div>
      </div>
      <div className="content-profile">
          <HistoryModal />
        <ScoreModal />
      </div>
    </div>
  );
}

function Profile() {
  const currentUser = useContext(AuthContext);

  return (
    <div className="App">
      <button className="settings" type="button" aria-label="Go back">
        <Link className="nav-link" to="/Settings">
          <FontAwesomeIcon icon={faGear} className="icon-navigation" />
        </Link>
      </button>
      <div>
        {
            currentUser ? <ConnectedProfile /> : <UnConnectedProfile />
        }
      </div>
    </div>
  );
}

export default Profile;
