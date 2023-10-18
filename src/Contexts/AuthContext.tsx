import React, {
  createContext, useEffect, useState,
} from 'react';
import { User } from 'firebase/auth';
import auth from '../Utils/Auth';

export const AuthContext = createContext<User>(null);

export default function AuthProvider({ children } : any) {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    // auth.onAuthStateChanged(setCurrentUser);
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}
