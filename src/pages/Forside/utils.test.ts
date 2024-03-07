import { describe, expect, test } from 'vitest';
import { utledKomponentTittel } from './utils';

describe('sjekk - utled komponenttittel', () => {
  test('utled riktig tittel gitt stønadType', () => {
    const tittelOvergangsstønad = utledKomponentTittel('overgangsstønad');
    const tittelBarnetilsyn = utledKomponentTittel('barnetilsyn');
    const tittelSkolepenger = utledKomponentTittel('skolepenger');

    expect(tittelOvergangsstønad).toBe('Overgangsstønad');
    expect(tittelBarnetilsyn).toBe('Stønad til barnetilsyn');
    expect(tittelSkolepenger).toBe('Stønad til skolepenger');
  });
});
