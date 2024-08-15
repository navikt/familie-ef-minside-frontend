import { describe, expect, test } from 'vitest';
import { utledKomponentTittel } from './utils';
import { LocaleType } from '../../language/locale';

describe('sjekk - utled komponenttittel', () => {
  const locale = 'nb' as LocaleType;
  test('utled riktig tittel gitt stønadType', () => {
    const tittelOvergangsstønad = utledKomponentTittel('overgangsstønad', locale);
    const tittelBarnetilsyn = utledKomponentTittel('barnetilsyn', locale);
    const tittelSkolepenger = utledKomponentTittel('skolepenger', locale);

    expect(tittelOvergangsstønad).toBe('Overgangsstønad');
    expect(tittelBarnetilsyn).toBe('Stønad til barnetilsyn');
    expect(tittelSkolepenger).toBe('Stønad til skolepenger');
  });
});
