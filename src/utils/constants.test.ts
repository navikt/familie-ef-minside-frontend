import { describe, expect, test } from 'vitest';
import {
  breadCrumbBarnetilsyn,
  breadCrumbDokumentOversikt,
  breadCrumbOvergangsstønad,
  breadCrumbSkolepenger,
  contentWidthDesktop,
  contentWidthMobile,
  desktop,
  mobile,
} from './constants';
import { mockTekst } from '../test/utils';

describe('sjekk - globale konstanter', () => {
  test('skjermbredder', () => {
    expect(desktop).toBe(948);
    expect(mobile).toBe(480);
  });

  test('innholdsbredde', () => {
    expect(contentWidthDesktop).toBe(932);
    expect(contentWidthMobile).toBe(458);
  });

  test('brødsmuler', () => {
    const test = mockTekst('stonader.tittel');
    expect(test).toBe('Dine stønader');

    expect(breadCrumbDokumentOversikt.url).toBe('/familie/alene-med-barn/minside/dokumentoversikt');
    expect(mockTekst(breadCrumbDokumentOversikt.title)).toBe('Dokumentoversikt');

    expect(breadCrumbOvergangsstønad.url).toBe('/familie/alene-med-barn/minside/overgangsstonad');
    expect(mockTekst(breadCrumbOvergangsstønad.title)).toBe('Din overgangsstønad');

    expect(breadCrumbBarnetilsyn.url).toBe('/familie/alene-med-barn/minside/barnetilsyn');
    expect(mockTekst(breadCrumbBarnetilsyn.title)).toBe('Din stønad til barnetilsyn');

    expect(breadCrumbSkolepenger.url).toBe('/familie/alene-med-barn/minside/skolepenger');
    expect(mockTekst(breadCrumbSkolepenger.title)).toBe('Din stønad til skolepenger');
  });
});
