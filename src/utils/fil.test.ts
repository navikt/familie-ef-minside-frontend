import { describe, expect, test } from 'vitest';
import { utledFilUrl } from './fil';
import { Variantformat } from '../interfaces/journalpost';

describe('sjekk - dokumentuthenting', () => {
  test('skal utlede url for dokument, gitt journalpostId, dokumentId og variantformat', () => {
    const url = utledFilUrl('1234', '5678', Variantformat.ARKIV);

    expect(url).toBe(
      '/familie/alene-med-barn/minside/dokument/journalpost/1234/dokument-pdf/5678/variantformat/ARKIV'
    );
  });
});
