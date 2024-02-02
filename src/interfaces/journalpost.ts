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
  variantformat: Variantformat;
  filtype: string;
}

export enum JournalpostType {
  I = 'I',
  U = 'U',
}

export enum Variantformat {
  ARKIV = 'ARKIV',
  SLADDET = 'SLADDET',
}
