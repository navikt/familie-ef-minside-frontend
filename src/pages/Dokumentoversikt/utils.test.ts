import { describe, expect, test } from 'vitest';
import {
  DokumentInfo,
  Journalpost,
  JournalpostType,
  Variantformat,
} from '../../interfaces/journalpost';
import { formaterIsoDatoTid } from '../../utils/formatter';

const mockUtledDetailTekst = (journalpost: Journalpost) => {
  const dato = formaterIsoDatoTid(journalpost.dato);

  switch (journalpost.journalpostType) {
    case JournalpostType.I:
      return `Sendt av deg: ${dato}`;
    case JournalpostType.U:
      return `Sendt fra Nav: ${dato}`;
    case JournalpostType.N:
      return `${dato}`;
  }
};

describe('sjekk - utled detailtekst for dokumentoversikt', () => {
  test('utled tekst gitt journalpost', () => {
    const journalpostInnkommende = lagJournalpost(JournalpostType.I, '2024-02-20T15:38:08');
    const journalpostUtgående = lagJournalpost(JournalpostType.U, '2024-02-19T09:54:03');
    const journalpostNotat = lagJournalpost(JournalpostType.N, '2024-01-24T10:52:57');

    const detailTekstInnkommende = mockUtledDetailTekst(journalpostInnkommende);
    const detailTekstUtgående = mockUtledDetailTekst(journalpostUtgående);
    const detailTekstNotat = mockUtledDetailTekst(journalpostNotat);

    expect(detailTekstInnkommende).toBe('Sendt av deg: 20.02.2024 kl.15:38');
    expect(detailTekstUtgående).toBe('Sendt fra Nav: 19.02.2024 kl.09:54');
    expect(detailTekstNotat).toBe('24.01.2024 kl.10:52');
  });
});

const lagDokumentInfo = (): DokumentInfo => {
  return {
    dokumentId: '',
    tittel: '',
    variantformat: Variantformat.ARKIV,
    filtype: '',
  };
};

const lagJournalpost = (journalpostType: JournalpostType, dato: string): Journalpost => {
  return {
    journalpostId: '',
    journalpostType: journalpostType,
    dato: dato,
    hovedDokument: lagDokumentInfo(),
    vedlegg: [],
  };
};
