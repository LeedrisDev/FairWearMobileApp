import firebaseApp from './FirebaseInit'; // This is the Firebase object from the previous tutorial
import {deleteUser, getAuth, GoogleAuthProvider, sendPasswordResetEmail} from 'firebase/auth';

const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export default auth;

export function passwordReset(email: string) {
    return sendPasswordResetEmail(auth, email);
}

export function deleteAccount() {
    if (auth.currentUser) {
        return deleteUser(auth.currentUser);
    }
}
