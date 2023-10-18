import React, { useContext, useEffect } from 'react';
import bigLogo from '../../assets/FairWearBig.png';
import './Authentication.css';
import auth, { provider } from '../../Utils/Auth';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthContext';
import { signInWithRedirect } from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function AuthenticationPage() {
  const currentUser = useContext(AuthContext);

  const handleGoogleConnection = () => {
    signInWithRedirect(auth, provider)
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="authentication-page" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Link className="nav-link back" to="/scan">
        <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
      </Link>
      <div className="main-container">
        <div className="logo-container">
          <img className="logo" src={bigLogo} alt={bigLogo} />
        </div>

        <div className="buttons-container">
          <Button
            className="custom-buttons auth-button"
            href="/login"
            style={{ backgroundColor: '#33765D' }}
          >
            <span>LOG IN</span>
          </Button>
          <Button
            className="custom-buttons auth-button"
            href="/signup"
            style={{ backgroundColor: '#6D716D' }}
          >
            <span>SIGN UP</span>
          </Button>
          <Button className="auth-button" onClick={handleGoogleConnection}>
            <img
              className="firebaseui-idp-icon"
              alt=""
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            />
            <span className="google-button-text">Continue with Google</span>
          </Button>

        </div>
      </div>
    </div>
  );
}
