import React, { useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import auth, {provider} from '../../Utils/Auth';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthContext';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function AuthenticationPage() {
  const currentUser = useContext(AuthContext);
  useEffect(() => {
    console.log({ currentUser });
  }, [currentUser]);

  const handleGoogleConnection = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
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
      <h1>Authentication</h1>
      <div className="d-flex flex-column align-items-center">
        <Button href="/Login" className="mb-2">Login</Button>
        <Button variant="secondary" href="/Signup" className="mb-2">Signup</Button>
        <Button className="mb-2" onClick={handleGoogleConnection}>Sign in with Google</Button>
        {/* <div id="firebaseui-auth-container" /> */}
      </div>
    </div>
  );
}
