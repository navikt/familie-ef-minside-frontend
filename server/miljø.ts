import logger from './logger';

const lokaltMiljø = {
  apiUrl: 'http://localhost:8091',
  oauthCallbackUri:
    'https://localhost:8080/familie/alene-med-barn/minside/oauth2/callback',
};

const devMiljø = {
  apiUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api',
  oauthCallbackUri:
    'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/minside/oauth2/callback',
};

const prodMiljø = {
  apiUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api',
  oauthCallbackUri:
    'https://www.nav.no/familie/alene-med-barn/minside/oauth2/callback',
};

const initierMiljøvariabler = () => {
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
