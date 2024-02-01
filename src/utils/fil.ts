import { Variantformat } from '../interfaces/journalpost';

export const utledFilUrl = (
  journalpostId: string,
  dokumentId: string,
  variantformat: Variantformat
) =>
  `/familie/alene-med-barn/minside/dokument/journalpost/${journalpostId}/dokument-pdf/${dokumentId}/variantformat/${variantformat}`;
