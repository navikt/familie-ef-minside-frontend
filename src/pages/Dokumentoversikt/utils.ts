import { Journalpost, JournalpostType } from '../../interfaces/journalpost';
import { formaterIsoDatoTid } from '../../utils/formatter';

export const utledDetailTekst = (journalpost: Journalpost) => {
  const dato = formaterIsoDatoTid(journalpost.dato);

  switch (journalpost.journalpostType) {
    case JournalpostType.I:
      return `Sendt av deg: ${dato}`;
    case JournalpostType.U:
      return `Sendt fra NAV: ${dato}`;
  }
};
