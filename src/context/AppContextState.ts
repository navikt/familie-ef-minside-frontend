import { createContext } from 'react';
import type { AppEnv } from '../api/env';
import type { DataStatus } from '../interfaces/dataStatus';
import type { Journalpost } from '../interfaces/journalpost';
import type { Stønader } from '../interfaces/stønader';

export interface AppContextProps {
    appEnv: AppEnv;
    journalposter: Journalpost[];
    journalpostStatus: DataStatus;
    stønader: Stønader;
    stønadStatus: DataStatus;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
