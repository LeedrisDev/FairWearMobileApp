import {initializeApp} from "firebase/app";
import AppConstants from "./AppConstants";

const app = initializeApp(AppConstants.FIREBASE_CONFIG);
export default app;
