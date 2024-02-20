import constate from 'constate';
import { AppEnv } from '../api/env';
import { useEffect } from 'react';
import { useHentJournalposter } from '../hooks/useHentJournalposter';
import { useHentStønader } from '../hooks/useHentStønader';

interface Props {
  appEnv: AppEnv;
}

const [AppProvider, useApp] = constate(({ appEnv }: Props) => {
  const { hentJournalposter, journalposter, journalpostStatus } = useHentJournalposter();
  const { hentStønader, stønader, stønadStatus } = useHentStønader();

  useEffect(() => {
    hentJournalposter();
    hentStønader();
  }, [hentJournalposter, hentStønader]);

  return { appEnv, journalposter, journalpostStatus, stønader, stønadStatus };
});

export { AppProvider, useApp };
