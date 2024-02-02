import { prefferedAxios } from './axios';
import { defaultBreadcrumbs } from '../../server/miljø';
type DecoratorBreadcrumb = {
  url: string;
  title: string;
  analyticsTitle?: string;
  handleInApp?: boolean;
};

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
  defaultBreadcrumbs: DecoratorBreadcrumb[];
}

export const hentEnv = (): Promise<AppEnv> => {
  return prefferedAxios
    .get(`/familie/alene-med-barn/minside/env`)
    .then((response) => {
      return response.data;
    });
};
