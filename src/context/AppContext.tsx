import constate from 'constate';
import { AppEnv } from '../api/env';
import { useHentPersonData } from '../hooks/useHentPersonData';
import { useEffect } from 'react';
import { useHentJournalposter } from '../hooks/useHentJournalposter';
import { useHentStønader } from '../hooks/useHentStønader';

interface Props {
  appEnv: AppEnv;
}

const [AppProvider, useApp] = constate(({ appEnv }: Props) => {
  const { hentPersonData, personData } = useHentPersonData();
  const { hentJournalposter, journalposter, journalpostStatus } = useHentJournalposter();
  const { hentStønader, stønader, stønadStatus } = useHentStønader();

  useEffect(() => {
    hentPersonData();
    hentJournalposter();
    hentStønader();
  }, [hentJournalposter, hentStønader, hentPersonData]);

  return { appEnv, journalposter, journalpostStatus, personData, stønader, stønadStatus };
});

export { AppProvider, useApp };
