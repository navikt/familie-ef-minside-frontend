import { Journalpost, JournalpostType } from '../../interfaces/journalpost';
import { formaterIsoDatoTid } from '../../utils/formatter';

export const utledDetailTekst = (
  journalpost: Journalpost,
  tekst: (key: string, params?: string[]) => string
) => {
  const dato = formaterIsoDatoTid(journalpost.dato);

  switch (journalpost.journalpostType) {
    case JournalpostType.I:
      return tekst('journalpost.deg', [dato]);
    case JournalpostType.U:
      return tekst('journalpost.nav', [dato]);
    case JournalpostType.N:
      return `${dato}`;
  }
};
