import * as amplitude from '@amplitude/analytics-browser';

/*Default tracking is implicit tracking performed by Amplitude on your behalf, and includes page views, sessions, file downloads, form interactions, and marketing attribution.*/

amplitude.init('default', undefined, {
  serverUrl: 'https://amplitude.nav.no/collect-auto',
  defaultTracking: false,
  ingestionMetadata: {
    sourceName: window.location.toString(),
  },
});

// NAVs retningslinjer for amplitude taksonomi: https://github.com/navikt/analytics-taxonomy
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logEvent(eventName: string, eventProperties: any) {
  amplitude.track(eventName, eventProperties);
}

export const logNavigering = (destinasjon: string, lenketekst: string, kilde?: string) => {
  logEvent('navigere', {
    destinasjon: destinasjon,
    lenketekst: lenketekst,
    kilde: kilde,
    team_id: 'familie',
    applikasjon: 'ef-minside',
  });
};
