import React, {useContext, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import bigLogo from '../../assets/FairWearBig.png';
import './Authentication.css';
import auth, {provider} from '../../Utils/Auth';
import {Button} from 'react-bootstrap';
import {AuthContext} from '../../Contexts/AuthContext';
import {signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';

export default function AuthenticationPage() {
    const currentUser = useContext(AuthContext);

    useEffect(() => {
        console.log({currentUser});
    }, [currentUser]);

    const handleGoogleConnection = () => {
        signInWithRedirect(auth, provider)
            .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }

    return (
        <div>
            {/* <h1>Authentication</h1> */}
            <img className="logo" src={bigLogo} alt={bigLogo}/>
            <div className="d-flex flex-column align-items-center" style={{marginTop: "42px"}}>
                <Button href="/Login" className="d-flex align-items-center mb-2 auth-button border-0"
                        style={{backgroundColor: "#33765D"}}>
                    <span className="button-text">LOG IN</span>
                </Button>
                <Button href="/Signup" className="d-flex align-items-center mb-2 auth-button border-0"
                        style={{backgroundColor: "#6D716D"}}>
                    <span className="button-text">SIGN UP</span>
                </Button>

                <Button  className="d-flex align-items-center mb-2 auth-button google-sign-in border-0"
                         onClick={handleGoogleConnection}
                >
                    <img
                        className="firebaseui-idp-icon"
                        alt=""
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    />
                    <span className="ms-2 flex-grow-1 text-dark" style={{fontFamily: "Poppins"}}>
                        Continue with Google
                    </span>
                </Button>
                {/* <div id="firebaseui-auth-container" /> */}
            </div>
        </div>
);
}
