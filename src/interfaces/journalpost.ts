export interface Journalpost {
  journalpostId: string;
  tittel: string;
  journalpostType: Journalposttype;
  relevanteDatoer: RelevantDato[];
  dokumenter: DokumentInfo[];
}

export interface DokumentInfo {
  tittel: string;
  dokumentInfoId: string;
  dokumentvarianter: DokumentVariant[];
}

export interface DokumentVariant {
  variantformat: VariantFormat;
  brukerHarTilgang: boolean;
  filtype: string;
}

export interface RelevantDato {
  dato: string;
  datotype: string;
}

export enum VariantFormat {
  ARKIV = 'ARKIV',
  SLADDET = 'SLADDET',
}

export enum Journalposttype {
  I = 'I',
  U = 'U',
  N = 'N',
}
