import constate from 'constate';
import { AppEnv } from '../api/env';
import { useHentPersonData } from '../hooks/useHentPersonData';
import { useEffect } from 'react';
import useResponsive from '../hooks/useResponsive';

interface Props {
  appEnv: AppEnv;
}

const [AppProvider, useApp] = constate(({ appEnv }: Props) => {
  const { hentPersonData, personData } = useHentPersonData(appEnv.søknadApiUrl);
  const currentDevice = useResponsive();

  useEffect(() => {
    hentPersonData();
  }, []);

  return { appEnv, currentDevice, personData };
});

export { AppProvider, useApp };
