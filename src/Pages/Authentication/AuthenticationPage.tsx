import React, { useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import auth from '../../Utils/Auth';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthContext';

export default function AuthenticationPage() {
  const currentUser = useContext(AuthContext);
  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Other config options...
    });
  }, []);
  useEffect(() => {
    console.log({ currentUser });
  }, [currentUser]);
  //
  //
  // return (
  //     <>
  //         <h1 className="text-center my-3 title">Signup Page</h1>
  //         <Button variant="link" href="#">Login</Button>
  //         <div id="firebaseui-auth-container"></div>
  //     </>
  // )
  return (
    <div>
      <h1>Authentication</h1>
      <div className="d-flex flex-column align-items-center">
        <Button href="/Login" className="mb-2">Login</Button>
        <Button href="/Signup" className="mb-2">Signup</Button>
        <div id="firebaseui-auth-container" />
      </div>
    </div>
  );
}
