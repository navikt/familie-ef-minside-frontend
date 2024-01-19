import constate from 'constate';
import { AppEnv } from '../api/env';
import { useHentPersonData } from '../hooks/useHentPersonData';
import { useEffect } from 'react';

interface Props {
  appEnv: AppEnv;
}

const [AppProvider, useApp] = constate(({ appEnv }: Props) => {
  const { hentPersonData, personData } = useHentPersonData(appEnv.søknadApiUrl);

  useEffect(() => {
    hentPersonData();
  }, []);

  return { appEnv, personData };
});

export { AppProvider, useApp };
