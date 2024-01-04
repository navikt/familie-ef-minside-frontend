import logger from './logger.js';

interface Environment {
  port: number;
  apiUrl: string;
  minSideUrl: string;
  oAuthCallbackUri: string;
  endringsmeldingUrl: string;
  ettersendingUrl: string;
  søknadOvergangsstønadUrl: string;
  søknadBarnetilsynUrl: string;
  søknadSkolepengerUrl: string;
  infoSideOvergangsstønadUrl: string;
  infoSideBarnetilsynUrl: string;
  infoSideSkolepengerUrl: string;
  saksbehandlingstiderUrl: string;
  søknadApiUrl: string;
}

const lokaltMiljø = {
  port: 3000,
  apiUrl: 'http://localhost:8091',
  minSideUrl: 'https://www.intern.dev.nav.no/minside/',
  oAuthCallbackUri:
    'https://localhost:8080/familie/alene-med-barn/minside/oauth2/callback',
  endringsmeldingUrl: 'https://innboks.nav.no/s/skriv-til-oss?category=Familie',
  ettersendingUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/ettersending',
  søknadOvergangsstønadUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/',
  søknadBarnetilsynUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
  søknadSkolepengerUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/skolepenger',
  infoSideOvergangsstønadUrl:
    'https://www.ekstern.dev.nav.no/overgangsstonad-enslig',
  infoSideBarnetilsynUrl: 'https://www.ekstern.dev.nav.no/barnetilsyn-enslig',
  infoSideSkolepengerUrl: 'https://www.ekstern.dev.nav.no/skolepenger-enslig',
  saksbehandlingstiderUrl:
    'https://www.ekstern.dev.nav.no/saksbehandlingstider',
  søknadApiUrl: '',
};

const devMiljø = {
  port: 8080,
  apiUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api',
  minSideUrl: 'https://www.intern.dev.nav.no/minside/',
  oAuthCallbackUri:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/minside/oauth2/callback',
  endringsmeldingUrl: 'https://innboks.nav.no/s/skriv-til-oss?category=Familie',
  ettersendingUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/ettersending',
  søknadOvergangsstønadUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/',
  søknadBarnetilsynUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
  søknadSkolepengerUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/skolepenger',
  infoSideOvergangsstønadUrl:
    'https://www.ekstern.dev.nav.no/overgangsstonad-enslig',
  infoSideBarnetilsynUrl: 'https://www.ekstern.dev.nav.no/barnetilsyn-enslig',
  infoSideSkolepengerUrl: 'https://www.ekstern.dev.nav.no/skolepenger-enslig',
  saksbehandlingstiderUrl:
    'https://www.ekstern.dev.nav.no/saksbehandlingstider',
  søknadApiUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/api',
};

const prodMiljø = {
  port: 8080,
  apiUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api',
  minSideUrl: 'https://www.nav.no/minside/',
  oAuthCallbackUri:
    'https://www.nav.no/familie/alene-med-barn/minside/oauth2/callback',
  endringsmeldingUrl: 'https://innboks.nav.no/s/skriv-til-oss?category=Familie',
  ettersendingUrl: 'https://www.nav.no/familie/alene-med-barn/ettersending',
  søknadOvergangsstønadUrl: 'https://www.nav.no/familie/alene-med-barn/soknad',
  søknadBarnetilsynUrl:
    'https://www.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
  søknadSkolepengerUrl:
    'https://www.nav.no/familie/alene-med-barn/soknad/skolepenger',
  infoSideOvergangsstønadUrl: 'https://www.nav.no/overgangsstonad-enslig',
  infoSideBarnetilsynUrl: 'https://www.nav.no/barnetilsyn-enslig',
  infoSideSkolepengerUrl: 'https://www.nav.no/skolepenger-enslig',
  saksbehandlingstiderUrl: 'https://www.nav.no/saksbehandlingstider',
  søknadApiUrl: 'https://www.nav.no/familie/alene-med-barn/soknad/api',
};

const initierMiljøvariabler = (): Environment => {
  switch (process.env.ENV) {
    case 'localhost':
      return lokaltMiljø;
    case 'dev':
      return devMiljø;
    case 'prod':
      return prodMiljø;
    default:
      logger.warn('Mangler miljøvariabler - setter lokale variabler');
      return lokaltMiljø;
  }
};

export const miljø = initierMiljøvariabler();
export const isLocal = () => process.env.ENV === 'localhost';
