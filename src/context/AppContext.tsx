import React, { createContext, useContext, useEffect } from 'react';
import { AppEnv } from '../api/env';
import { useHentJournalposter } from '../hooks/useHentJournalposter';
import { useHentStønader } from '../hooks/useHentStønader';
import { DataStatus } from '../interfaces/dataStatus';
import { Journalpost } from '../interfaces/journalpost';
import { Stønader } from '../interfaces/stønader';

interface Props {
  appEnv: AppEnv;
  children: React.ReactNode;
}

interface AppContextProps {
  appEnv: AppEnv;
  journalposter: Journalpost[];
  journalpostStatus: DataStatus;
  stønader: Stønader;
  stønadStatus: DataStatus;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<Props> = ({ appEnv, children }) => {
  const { hentJournalposter, journalposter, journalpostStatus } = useHentJournalposter();
  const { hentStønader, stønader, stønadStatus } = useHentStønader();

  useEffect(() => {
    hentJournalposter();
    hentStønader();
  }, [hentJournalposter, hentStønader]);

  return (
    <AppContext.Provider
      value={{ appEnv, journalposter, journalpostStatus, stønader, stønadStatus }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp må brukes innenfor en AppProvider');
  }
  return context;
};

export { AppProvider, useApp };
