import { describe, expect, test } from 'vitest';
import { Variantformat } from '../interfaces/journalpost';
import { utledFilUrl } from './fil';

describe('sjekk - dokumentuthenting', () => {
    test('skal utlede url for dokument, gitt journalpostId, dokumentId og variantformat', () => {
        const url = utledFilUrl('1234', '5678', Variantformat.ARKIV);

        expect(url).toBe(
            '/familie/alene-med-barn/minside/dokument/journalpost/1234/dokument-pdf/5678/variantformat/ARKIV'
        );
    });
});
