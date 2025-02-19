import { getAmplitudeInstance } from '@navikt/nav-dekoratoren-moduler';

const logger = getAmplitudeInstance('dekoratoren');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logEvent = (eventName: string, eventProperties: any) => {
  logger(eventName, eventProperties);
};

export const logNavigering = (destinasjon: string, lenketekst: string, kilde?: string) => {
  logEvent('navigere', {
    destinasjon: destinasjon,
    lenketekst: lenketekst,
    kilde: kilde,
    team_id: 'familie',
    applikasjon: 'ef-minside',
  });
};
