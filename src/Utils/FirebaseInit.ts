import * as firebase from "firebase/app";
import "firebase/auth";
import AppConstants from './AppConstants';

const app = firebase.initializeApp(AppConstants.FIREBASE_CONFIG);
export default app;
