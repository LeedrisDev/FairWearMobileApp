import React, {createContext, useEffect, useState} from "react";
import auth from "../Utils/Auth";
import { User } from "firebase/auth";

export const AuthContext = createContext<User>(null);

export default function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState<User>();

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
        console.log('auth : ', currentUser)
    }, [])

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}
