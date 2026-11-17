import type React from 'react';
import { useEffect } from 'react';
import type { AppEnv } from '../api/env';
import { useHentJournalposter } from '../hooks/useHentJournalposter';
import { useHentStønader } from '../hooks/useHentStønader';
import { AppContext } from './AppContextState';

interface Props {
    appEnv: AppEnv;
    children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ appEnv, children }) => {
    const { hentJournalposter, journalposter, journalpostStatus } = useHentJournalposter();
    const { hentStønader, stønader, stønadStatus } = useHentStønader();

    useEffect(() => {
        hentJournalposter();
        hentStønader();
    }, [hentJournalposter, hentStønader]);

    return (
        <AppContext.Provider value={{ appEnv, journalposter, journalpostStatus, stønader, stønadStatus }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider };
