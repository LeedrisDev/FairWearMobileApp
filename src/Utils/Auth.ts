import firebaseApp from './FirebaseInit' // This is the Firebase object from the previous tutorial
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default auth;
