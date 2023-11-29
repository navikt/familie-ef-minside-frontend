import constate from 'constate';
import { AppEnv } from '../api/env';

interface Props {
  appEnv: AppEnv;
}

const [AppProvider, useApp] = constate(({ appEnv }: Props) => {
  return { appEnv };
});

export { AppProvider, useApp };
