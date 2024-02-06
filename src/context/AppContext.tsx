import constate from 'constate';
import { AppEnv } from '../api/env';
import { useHentPersonData } from '../hooks/useHentPersonData';
import { useEffect } from 'react';
import { useHentJournalposter } from '../hooks/useHentJournalposter';

interface Props {
  appEnv: AppEnv;
}

const [AppProvider, useApp] = constate(({ appEnv }: Props) => {
  const { hentPersonData, personData } = useHentPersonData();
  const { hentJournalposter, journalposter, journalpostStatus } = useHentJournalposter();

  useEffect(() => {
    hentPersonData();
    hentJournalposter();
  }, [hentJournalposter, hentPersonData]);

  return { appEnv, journalposter, journalpostStatus, personData };
});

export { AppProvider, useApp };
