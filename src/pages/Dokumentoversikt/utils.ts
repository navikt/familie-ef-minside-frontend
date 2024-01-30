import { Journalpost, JournalpostType } from '../../interfaces/journalpost';
import { formaterIsoDatoTid } from '../../utils/dato';

export const utledDetailTekst = (journalpost: Journalpost) => {
  const dato = formaterIsoDatoTid(journalpost.dato);

  switch (journalpost.journalpostType) {
    case JournalpostType.I:
      return `Sendt av deg: ${dato}`;
    case JournalpostType.U:
      return `Sendt fra NAV: ${dato}`;
    case JournalpostType.N:
      return `Skal ikke vise denne vel?`; // TODO
  }
};
