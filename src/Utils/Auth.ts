import firebaseApp from './FirebaseInit'; // This is the Firebase object from the previous tutorial
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export default auth;
