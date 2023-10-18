import React, {
  createContext, useEffect, useState,
} from 'react';
import { User } from 'firebase/auth';
import auth from '../Utils/Auth';

export const AuthContext = createContext<User | null>(null);

export default function AuthProvider({ children } : any) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // auth.onAuthStateChanged(setCurrentUser);
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user || null);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}
