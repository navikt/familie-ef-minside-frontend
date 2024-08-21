import { describe, expect, test } from 'vitest';
import { utledKomponentTittel } from './utils';
import { mockTekst } from '../../test/utils';

describe('sjekk - utled komponenttittel', () => {
  test('utled riktig tittel gitt stønadType', () => {
    const tittelOvergangsstønad = mockTekst(utledKomponentTittel('overgangsstønad'));
    const tittelBarnetilsyn = mockTekst(utledKomponentTittel('barnetilsyn'));
    const tittelSkolepenger = mockTekst(utledKomponentTittel('skolepenger'));

    expect(tittelOvergangsstønad).toBe('Overgangsstønad');
    expect(tittelBarnetilsyn).toBe('Stønad til barnetilsyn');
    expect(tittelSkolepenger).toBe('Stønad til skolepenger');
  });
});
