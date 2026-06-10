import { createContext } from 'react';
import { AppEnv } from '../api/env';
import { DataStatus } from '../interfaces/dataStatus';
import { Journalpost } from '../interfaces/journalpost';
import { Stønader } from '../interfaces/stønader';

export interface AppContextProps {
  appEnv: AppEnv;
  journalposter: Journalpost[];
  journalpostStatus: DataStatus;
  stønader: Stønader;
  stønadStatus: DataStatus;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
