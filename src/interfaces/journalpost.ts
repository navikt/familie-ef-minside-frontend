export interface Journalpost {
  journalpostId: string;
  journalpostType: JournalpostType;
  dato: string;
  hovedDokument: DokumentInfo;
  vedlegg: DokumentInfo[];
}

export interface DokumentInfo {
  dokumentId: string;
  tittel: string;
}

export enum JournalpostType {
  I = 'I',
  U = 'U',
}
