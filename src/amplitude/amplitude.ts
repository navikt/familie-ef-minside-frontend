import amplitude from 'amplitude-js';

const amplitudeInstance = amplitude.getInstance();

amplitudeInstance.init('default', '', {
  apiEndpoint: 'amplitude.nav.no/collect-auto',
  saveEvents: false,
  includeUtm: true,
  includeReferrer: true,
  platform: window.location.toString(),
});

export function logEvent(eventName: string, eventProperties: any) {
  amplitudeInstance.logEvent(eventName, eventProperties);
}

export const logNavigeringTil = (lenketekst: string, destinasjon: string) => {
  console.log('Event navigere - log amplitude: ', lenketekst);
  logEvent('navigere', {
    lenketekst: lenketekst,
    destinasjon: destinasjon,
    team_id: 'familie',
    applikasjon: 'familie-ef-minside',
  });
};
