import { prefferedAxios } from './axios';

export interface AppEnv {
  endringsmeldingUrl: string;
  ettersendingUrl: string;
  søknadOvergangsstønadUrl: string;
  søknadBarnetilsynUrl: string;
  søknadSkolepengerUrl: string;
  infoSideOvergangsstønadUrl: string;
  infoSideBarnetilsynUrl: string;
  infoSideSkolepengerUrl: string;
  saksbehandlingstiderUrl: string;
}

export const hentEnv = (): Promise<AppEnv> => {
  return prefferedAxios
    .get(`/familie/alene-med-barn/minside/env`)
    .then((response) => {
      return response.data;
    });
};
