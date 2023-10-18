import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import ScannerPage from '../Scanner/ScannerPage';
import AuthenticationPage from '../Authentication/AuthenticationPage';

export default function StartPage() {
  const currentUser = useContext(AuthContext);

  const [startingPage, setStartingPage] = useState(<AuthenticationPage />);

  useEffect(() => {
    if (currentUser) {
      setStartingPage(<ScannerPage />);
    }
  }, [currentUser]);

  return startingPage;
}
