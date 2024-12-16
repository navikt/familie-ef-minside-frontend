import logger from './logger.js';
import 'dotenv/config';
import { DecoratorBreadcrumb } from './decorator';

interface Environment {
  port: number;
  søknadApiProxyUrl: string;
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
  utbetalingsoversiktUrl: string;
  utvidetBarnetrygdUrl: string;
  klageUrl: string;
}
export const brukDevApi = () => process.env.BRUK_DEV_API === 'true';

const lokaltMiljø: Environment = {
  port: 3000,
  søknadApiProxyUrl: brukDevApi()
    ? 'https://familie-ef-soknad-api.intern.dev.nav.no/familie/alene-med-barn/soknad-api/api'
    : 'http://localhost:8091/api',
  minSideUrl: 'https://www.intern.dev.nav.no/minside/',
  oAuthCallbackUri: 'https://localhost:8080/familie/alene-med-barn/minside/oauth2/callback',
  endringsmeldingUrl: 'https://innboks.nav.no/s/skriv-til-oss?category=Familie',
  ettersendingUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/ettersending',
  søknadOvergangsstønadUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/',
  søknadBarnetilsynUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
  søknadSkolepengerUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/skolepenger',
  infoSideOvergangsstønadUrl: 'https://www.ekstern.dev.nav.no/overgangsstonad-enslig',
  infoSideBarnetilsynUrl: 'https://www.ekstern.dev.nav.no/barnetilsyn-enslig',
  infoSideSkolepengerUrl: 'https://www.ekstern.dev.nav.no/skolepenger-enslig',
  saksbehandlingstiderUrl: 'https://www.ekstern.dev.nav.no/saksbehandlingstider',
  utbetalingsoversiktUrl: 'https://www.nav.no/utbetalingsoversikt',
  utvidetBarnetrygdUrl: 'https://www.nav.no/utvidet-barnetrygd',
  klageUrl: 'https://www.nav.no/klage',
};

const devMiljø: Environment = {
  port: 8080,
  søknadApiProxyUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api/api',
  minSideUrl: 'https://www.intern.dev.nav.no/minside/',
  oAuthCallbackUri:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/minside/oauth2/callback',
  endringsmeldingUrl: 'https://innboks.nav.no/s/skriv-til-oss?category=Familie',
  ettersendingUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/ettersending',
  søknadOvergangsstønadUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/',
  søknadBarnetilsynUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
  søknadSkolepengerUrl:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/skolepenger',
  infoSideOvergangsstønadUrl: 'https://www.ekstern.dev.nav.no/overgangsstonad-enslig',
  infoSideBarnetilsynUrl: 'https://www.ekstern.dev.nav.no/barnetilsyn-enslig',
  infoSideSkolepengerUrl: 'https://www.ekstern.dev.nav.no/skolepenger-enslig',
  saksbehandlingstiderUrl: 'https://www.ekstern.dev.nav.no/saksbehandlingstider',
  utbetalingsoversiktUrl: 'https://www.nav.no/utbetalingsoversikt',
  utvidetBarnetrygdUrl: 'https://www.nav.no/utvidet-barnetrygd',
  klageUrl: 'https://www.nav.no/klage',
};

const prodMiljø: Environment = {
  port: 8080,
  søknadApiProxyUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api/api',
  minSideUrl: 'https://www.nav.no/minside/',
  oAuthCallbackUri: 'https://www.nav.no/familie/alene-med-barn/minside/oauth2/callback',
  endringsmeldingUrl: 'https://innboks.nav.no/s/skriv-til-oss?category=Familie',
  ettersendingUrl: 'https://www.nav.no/familie/alene-med-barn/ettersending',
  søknadOvergangsstønadUrl: 'https://www.nav.no/familie/alene-med-barn/soknad',
  søknadBarnetilsynUrl: 'https://www.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
  søknadSkolepengerUrl: 'https://www.nav.no/familie/alene-med-barn/soknad/skolepenger',
  infoSideOvergangsstønadUrl: 'https://www.nav.no/overgangsstonad-enslig',
  infoSideBarnetilsynUrl: 'https://www.nav.no/barnetilsyn-enslig',
  infoSideSkolepengerUrl: 'https://www.nav.no/skolepenger-enslig',
  saksbehandlingstiderUrl: 'https://www.nav.no/saksbehandlingstider',
  utbetalingsoversiktUrl: 'https://www.nav.no/utbetalingsoversikt',
  utvidetBarnetrygdUrl: 'https://www.nav.no/utvidet-barnetrygd',
  klageUrl: 'https://www.nav.no/klage',
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

export const defaultBreadcrumbs: DecoratorBreadcrumb[] = [
  {
    url: miljø.minSideUrl,
    title: 'breadcrumb.minside',
    handleInApp: false,
  },
  {
    url: '/familie/alene-med-barn/minside',
    title: 'breadcrumb.ensligMorEllerFar',
    handleInApp: false,
  },
];

export const appEnv = {
  endringsmeldingUrl: miljø.endringsmeldingUrl,
  ettersendingUrl: miljø.ettersendingUrl,
  søknadOvergangsstønadUrl: miljø.søknadOvergangsstønadUrl,
  søknadBarnetilsynUrl: miljø.søknadBarnetilsynUrl,
  søknadSkolepengerUrl: miljø.søknadSkolepengerUrl,
  infoSideOvergangsstønadUrl: miljø.infoSideOvergangsstønadUrl,
  infoSideBarnetilsynUrl: miljø.infoSideBarnetilsynUrl,
  infoSideSkolepengerUrl: miljø.infoSideSkolepengerUrl,
  saksbehandlingstiderUrl: miljø.saksbehandlingstiderUrl,
  utbetalingsoversiktUrl: miljø.utbetalingsoversiktUrl,
  utvidetBarnetrygdUrl: miljø.utvidetBarnetrygdUrl,
  klageUrl: miljø.klageUrl,
  defaultBreadcrumbs: defaultBreadcrumbs,
};

export const isLocal = () => process.env.ENV === 'localhost';

export const lokaltTokenxApi = process.env.TOKENX_API;
