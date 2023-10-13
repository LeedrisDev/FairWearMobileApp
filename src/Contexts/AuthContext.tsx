import React, {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { User } from 'firebase/auth';
import auth from '../Utils/Auth';

export const AuthContext = createContext<User>(null);

export default function AuthProvider({ children } : ReactNode) {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
    console.log('auth : ', currentUser);
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}
