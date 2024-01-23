export type IDokument = {
  tittel: string;
  opprettet: string;
  retning: 'I' | 'U';
  vedlegg: IDokument[];
};

export const dummyDokumenter: IDokument[] = [
  {
    tittel: 'Vedtak om overgangsstønad.pdf',
    opprettet: '22.04.2022 kl.11:45',
    retning: 'U',
    vedlegg: [],
  },
  {
    tittel: 'Ettersending til søknad om overgangsstønad.pdf',
    opprettet: '03.03.2022 kl.10:42',
    retning: 'I',
    vedlegg: [
      {
        tittel: 'Utgifter barnetilsyn.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
      {
        tittel: 'Bekreftelse på samlivsbrudd.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
    ],
  },
  {
    tittel: 'Søknad om overgangsstønad.pdf',
    opprettet: '01.03.2022 kl.1332',
    retning: 'I',
    vedlegg: [
      {
        tittel: 'Bekreftelse på termindato.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
      {
        tittel: 'Bekreftelse på samlivsbrudd.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
    ],
  },
  {
    tittel: 'Vedtak om stønad til barnetilsyn.pdf',
    opprettet: '20.01.2011 kl.10:12',
    retning: 'U',
    vedlegg: [],
  },
  {
    tittel: 'Ettersending til søknad om stønad til barnetilsyn.pdf',
    opprettet: '06.01.2022 kl.10:12',
    retning: 'I',
    vedlegg: [
      {
        tittel: 'Utgifter barnetilsyn.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
      {
        tittel: 'Bekreftelse på samlivsbrudd.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
    ],
  },
  {
    tittel: 'Søknad om stønad til barnetilsyn.pdf',
    opprettet: '01.01.2022 kl.10:12',
    retning: 'I',
    vedlegg: [
      {
        tittel: 'Utgifter barnetilsyn.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
      {
        tittel: 'Bekreftelse på samlivsbrudd.pdf',
        opprettet: '',
        retning: 'U',
        vedlegg: [],
      },
    ],
  },
];
