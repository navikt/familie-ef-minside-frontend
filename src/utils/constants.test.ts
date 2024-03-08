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
    expect(breadCrumbDokumentOversikt.url).toBe('/familie/alene-med-barn/minside/dokumentoversikt');
    expect(breadCrumbDokumentOversikt.title).toBe('Dokumentoversikt');

    expect(breadCrumbOvergangsstønad.url).toBe('/familie/alene-med-barn/minside/overgangsstonad');
    expect(breadCrumbOvergangsstønad.title).toBe('Din overgangsstønad');

    expect(breadCrumbBarnetilsyn.url).toBe('/familie/alene-med-barn/minside/barnetilsyn');
    expect(breadCrumbBarnetilsyn.title).toBe('Din stønad til barnetilsyn');

    expect(breadCrumbSkolepenger.url).toBe('/familie/alene-med-barn/minside/skolepenger');
    expect(breadCrumbSkolepenger.title).toBe('Din stønad til skolepenger');
  });
});
