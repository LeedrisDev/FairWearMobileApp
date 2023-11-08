import firebaseApp from './FirebaseInit'; // This is the Firebase object from the previous tutorial
import {deleteUser, getAuth, GoogleAuthProvider, sendPasswordResetEmail} from 'firebase/auth';

const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export default auth;

export function passwordReset() {
    console.log("here")
    if (auth.currentUser) {
        return sendPasswordResetEmail(auth, auth!.currentUser!.email!)
    }
}

export function deleteAccount() {
    if (auth.currentUser) {
        return deleteUser(auth.currentUser);
    }
}
