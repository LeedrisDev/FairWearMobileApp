import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { AuthContext } from './AuthContext';
import getGeneralUserInfo from '../Business/UserBusiness';

export interface GeneralModel {
  id: number,
  name: string,
  score: number,
  level: number,
  todos: number[],
  history: SmallProductModel[]
}

export interface SmallProductModel {
  id: number,
  name: string,
  productId: number,
}

export const GeneralContext = createContext<GeneralModel | null>(null);

export default function GeneralProvider({ children }: any) {
  const [general, setGeneral] = useState<GeneralModel | null>(null);
  const currentFirebaseUser = useContext(AuthContext);

  useEffect(() => {
    if (currentFirebaseUser) {
      getGeneralUserInfo(currentFirebaseUser.uid)
        .then((currentGeneral) => {
          setGeneral(currentGeneral);
          console.log(`test${currentGeneral}`);
        });
    }
  }, [currentFirebaseUser]);

  return (
    <GeneralContext.Provider value={general}>
      {children}
    </GeneralContext.Provider>
  );
}
