import { describe, expect, test } from 'vitest';
import {
  utledBeskrivelse,
  utledBrødtekst,
  utledHeaderTekst,
  utledKolonnebredde,
  utledPerioder,
  utledStønadTekst,
  utledVedtak,
} from './utils';
import { JournalpostType, Variantformat } from '../../interfaces/journalpost';
import { Stønadsperiode } from '../../interfaces/stønader';
import { mockBreadCrumb, mockTekst } from '../../test/utils';

describe('sjekk - formateringer av tekst og perioder stønadsidene', () => {
  test('skal utlede breadcrumb gitt stønadType', () => {
    const overgangsstønad = mockBreadCrumb('overgangsstønad');
    const barnetilsyn = mockBreadCrumb('barnetilsyn');
    const skolepenger = mockBreadCrumb('skolepenger');

    expect(overgangsstønad).toEqual(
      lagBreadCrumb('/familie/alene-med-barn/minside/overgangsstonad', 'Din overgangsstønad')
    );
    expect(barnetilsyn).toEqual(
      lagBreadCrumb('/familie/alene-med-barn/minside/barnetilsyn', 'Din stønad til barnetilsyn')
    );
    expect(skolepenger).toEqual(
      lagBreadCrumb('/familie/alene-med-barn/minside/skolepenger', 'Din stønad til skolepenger')
    );
  });

  test('skal utlede stønadstekst gitt stønadType', () => {
    const overgangsstønad = mockTekst(utledStønadTekst('overgangsstønad'));
    const barnetilsyn = mockTekst(utledStønadTekst('barnetilsyn'));
    const skolepenger = mockTekst(utledStønadTekst('skolepenger'));

    expect(overgangsstønad).toBe('Din overgangsstønad');
    expect(barnetilsyn).toBe('Din stønad til barnetilsyn');
    expect(skolepenger).toBe('Din stønad til skolepenger');
  });

  test('skal utlede beskrivelse gitt stønadType', () => {
    const overgangsstønad = mockTekst(utledBeskrivelse('overgangsstønad'));
    const barnetilsyn = mockTekst(utledBeskrivelse('barnetilsyn'));
    const skolepenger = mockTekst(utledBeskrivelse('skolepenger'));

    expect(overgangsstønad).toBe('Her vises dine vedtakdsdokumenter for overgangsstønad.');
    expect(barnetilsyn).toBe('Her vises dine vedtakdsdokumenter for stønad til barnetilsyn.');
    expect(skolepenger).toBe('Her vises dine vedtakdsdokumenter for stønad til skolepenger.');
  });

  test('skal utlede brødtekst gitt stønadType', () => {
    const overgangsstønad = mockTekst(utledBrødtekst('overgangsstønad'));
    const barnetilsyn = mockTekst(utledBrødtekst('barnetilsyn'));
    const skolepenger = mockTekst(utledBrødtekst('skolepenger'));

    expect(overgangsstønad).toBe(
      'Tabellen viser periodene dine med overgangsstønad, hvor mye du har fått eller får i stønad per måned og hvilken inntekt vi har brukt for å beregne stønaden din. For å se hvordan vi har beregnet stønaden din, må du lese vedtaket ditt. Du finner vedtakene dine i dokumentoversikten lengre ned på siden.'
    );
    expect(barnetilsyn).toBe(
      'Tabellen viser periodene dine med barnetilsyn og hvor mye du har fått eller får i stønad per måned. For å se hvordan vi har regnet ut stønadsbeløpet, må du lese vedtaket ditt. Du finner alle vedtakene dine i dokumentoversikten lengre ned på siden.'
    );
    expect(skolepenger).toBe(
      'Tabellen viser utbetalingsmånedene dine med stønad til skolepenger. For å se hvordan vi har regnet ut stønadsbeløpet, må du lese vedtaket ditt. Du finner alle vedtakene dine i dokumentoversikten lengre ned på siden.'
    );
  });

  test('skal utelde headertekst gitt stønadType', () => {
    const overgangsstønad = utledHeaderTekst('overgangsstønad');
    const barnetilsyn = utledHeaderTekst('barnetilsyn');
    const skolepenger = utledHeaderTekst('skolepenger');

    expect(overgangsstønad).toEqual({
      headerBeløp: 'tabell.header.beløp',
      headerInntekt: 'tabell.header.inntekt',
      headerPeriode: 'tabell.header.periode',
      headerSamordningsfradrag: 'tabell.header.samordningsfradrag',
    });
    expect(barnetilsyn).toEqual({
      headerPeriode: 'tabell.header.barnetilsyn',
      headerBeløp: 'tabell.header.beløp.barnetilsyn',
    });
    expect(skolepenger).toEqual({
      headerPeriode: 'tabell.header.skolepenger',
      headerBeløp: 'tabell.header.beløp.skolepenger',
    });
  });

  test('skal utlede kolonnebredde gitt beløp', () => {
    expect(utledKolonnebredde(5)).toBe('1.75rem');
    expect(utledKolonnebredde(10)).toBe('2.3rem');
    expect(utledKolonnebredde(100)).toBe('2.85rem');
    expect(utledKolonnebredde(1000)).toBe('3.65rem');
    expect(utledKolonnebredde(10000)).toBe('5.6rem');
    expect(utledKolonnebredde(100000)).toBe('5.6rem');
  });
});

describe('skal utlede alle journalposter som er et vedtak gitt stønadstype', () => {
  test('overgangsstønad', () => {
    const journalposter = utledVedtak(dummyJournalposter, 'overgangsstønad');

    expect(journalposter).toHaveLength(3);
    expect(journalposter[0].hovedDokument.tittel).toBe('Vedtak om revurdert overgangsstønad');
    expect(journalposter[1].hovedDokument.tittel).toBe('Vedtak om revurdert overgangsstønad');
    expect(journalposter[2].hovedDokument.tittel).toBe('Vedtak om innvilget overgangsstønad');
  });

  test('barnetilsyn', () => {
    const journalposter = utledVedtak(dummyJournalposter, 'barnetilsyn');

    expect(journalposter).toHaveLength(3);
    expect(journalposter[0].hovedDokument.tittel).toBe(
      'Vedtak om revurdert stønad til barnetilsyn'
    );
    expect(journalposter[1].hovedDokument.tittel).toBe(
      'Vedtak om revurdert stønad til barnetilsyn'
    );
    expect(journalposter[2].hovedDokument.tittel).toBe('Vedtak om avslått stønad til barnetilsyn');
  });

  test('skolepenger', () => {
    const journalposter = utledVedtak(dummyJournalposter, 'skolepenger');

    expect(journalposter).toHaveLength(2);
    expect(journalposter[0].hovedDokument.tittel).toBe(
      'Vedtak om revurdert stønad til skolepenger'
    );
    expect(journalposter[1].hovedDokument.tittel).toBe(
      'Vedtak om innvilget stønad til skolepenger'
    );
  });
});

describe('sjekk - skal sortere stønadsperiodene på dato for skolepenger', () => {
  test('skal sortere fra nyeste til eldste periode gitt sammenhengende perioder med likt beløp', () => {
    const perioder = utledPerioder('skolepenger', sammenHengendePerioderMedLiktBeløp());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-04-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-12-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere fra nyeste til eldste periode gitt sammenhengende perioder med likt beløp som ikke er sortert', () => {
    const perioder = utledPerioder('skolepenger', sammenHengendePerioderMedLiktBeløpIkkeSortert());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-04-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-12-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere fra nyeste til eldste periode gitt sammenhengende perioder med ulike beløp', () => {
    const perioder = utledPerioder('skolepenger', sammenHengendePerioderMedUlikeBeløp());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-04-30', 22001));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-12-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere fra nyeste til eldste periode gitt usammenhengende perioder med like beløp', () => {
    const perioder = utledPerioder('skolepenger', usammenhengendePerioderLiktBeløp());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-02-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-10-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-03-30', 20900));
  });
});

describe('sjekk - skal sortere stønadsperiodene på dato og slå sammen sammenhengende perioder med like beløp for overgangsstønad ', () => {
  test('skal sortere og slå sammen perioder gitt sammenhengende perioder med like beløp', () => {
    const perioder = utledPerioder('overgangsstønad', sammenHengendePerioderMedLiktBeløp());

    expect(perioder).toHaveLength(3);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2023-05-01', '2024-04-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere og slå sammen gitt sammenhengende perioder med like beløp som ikke er sortert', () => {
    const perioder = utledPerioder(
      'overgangsstønad',
      sammenHengendePerioderMedLiktBeløpIkkeSortert()
    );

    expect(perioder).toHaveLength(3);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2023-05-01', '2024-04-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere og ikke slå sammen gitt sammenhengende perioder med ulike beløp', () => {
    const perioder = utledPerioder('overgangsstønad', sammenHengendePerioderMedUlikeBeløp());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-04-30', 22001));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-12-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere og ikke slå sammen gitt usammenhengende perioder med like beløp', () => {
    const perioder = utledPerioder('overgangsstønad', usammenhengendePerioderLiktBeløp());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-02-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-10-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-03-30', 20900));
  });

  test('skal sortere og slå sammen perioder gitt sammenhengende perioder med like verdier for beløp, inntektsgrunnlag og samordningsfradrag', () => {
    const perioder = utledPerioder(
      'overgangsstønad',
      sammenHengendePerioderMedLiktBeløpMenUlikSamordningOgInntekt()
    );

    expect(perioder).toHaveLength(5);
    expect(perioder[0]).toEqual(lagPeriode('2023-10-01', '2024-04-30', 22000));
    expect(perioder[1]).toEqual(lagPeriode('2023-08-01', '2023-09-30', 22000, 200000, 10000));
    expect(perioder[2]).toEqual(lagPeriode('2023-06-01', '2023-07-31', 22000, 300000));
    expect(perioder[3]).toEqual(lagPeriode('2023-05-01', '2023-05-31', 22000));
    expect(perioder[4]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });
});

describe('sjekk - skal sortere stønadsperiodene på dato og slå sammen sammenhengende perioder med like beløp for barnetilsyn ', () => {
  test('skal sortere og slå sammen perioder gitt sammenhengende perioder med like beløp', () => {
    const perioder = utledPerioder('barnetilsyn', sammenHengendePerioderMedLiktBeløp());

    expect(perioder).toHaveLength(3);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2023-05-01', '2024-04-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere og slå sammen gitt sammenhengende perioder med like beløp som ikke er sortert', () => {
    const perioder = utledPerioder('barnetilsyn', sammenHengendePerioderMedLiktBeløpIkkeSortert());

    expect(perioder).toHaveLength(3);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2023-05-01', '2024-04-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere og ikke slå sammen gitt sammenhengende perioder med ulike beløp', () => {
    const perioder = utledPerioder('barnetilsyn', sammenHengendePerioderMedUlikeBeløp());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-04-30', 22001));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-12-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-04-30', 20900));
  });

  test('skal sortere og ikke slå sammen gitt usammenhengende perioder med like beløp', () => {
    const perioder = utledPerioder('barnetilsyn', usammenhengendePerioderLiktBeløp());

    expect(perioder).toHaveLength(4);
    expect(perioder[0]).toEqual(lagPeriode('2024-05-01', '2024-08-31', 2000));
    expect(perioder[1]).toEqual(lagPeriode('2024-01-01', '2024-02-30', 22000));
    expect(perioder[2]).toEqual(lagPeriode('2023-05-01', '2023-10-31', 22000));
    expect(perioder[3]).toEqual(lagPeriode('2023-01-01', '2023-03-30', 20900));
  });
});

const sammenHengendePerioderMedLiktBeløp = () => [
  lagPeriode('2023-01-01', '2023-04-30', 20900),
  lagPeriode('2023-05-01', '2023-12-31', 22000),
  lagPeriode('2024-01-01', '2024-04-30', 22000),
  lagPeriode('2024-05-01', '2024-08-31', 2000),
];

const sammenHengendePerioderMedLiktBeløpMenUlikSamordningOgInntekt = () => [
  lagPeriode('2023-01-01', '2023-04-30', 20900, 0, 0),
  lagPeriode('2023-05-01', '2023-05-31', 22000, 0, 0),
  lagPeriode('2023-06-01', '2023-06-30', 22000, 300000, 0),
  lagPeriode('2023-07-01', '2023-07-31', 22000, 300000, 0),
  lagPeriode('2023-08-01', '2023-08-31', 22000, 200000, 10000),
  lagPeriode('2023-09-01', '2023-09-30', 22000, 200000, 10000),
  lagPeriode('2023-10-01', '2023-12-31', 22000, 0, 0),
  lagPeriode('2024-01-01', '2024-04-30', 22000, 0, 0),
];

const sammenHengendePerioderMedLiktBeløpIkkeSortert = () => [
  lagPeriode('2023-05-01', '2023-12-31', 22000),
  lagPeriode('2023-01-01', '2023-04-30', 20900),
  lagPeriode('2024-05-01', '2024-08-31', 2000),
  lagPeriode('2024-01-01', '2024-04-30', 22000),
];

const sammenHengendePerioderMedUlikeBeløp = () => [
  lagPeriode('2023-01-01', '2023-04-30', 20900),
  lagPeriode('2023-05-01', '2023-12-31', 22000),
  lagPeriode('2024-01-01', '2024-04-30', 22001),
  lagPeriode('2024-05-01', '2024-08-31', 2000),
];

const usammenhengendePerioderLiktBeløp = () => [
  lagPeriode('2023-01-01', '2023-03-30', 20900),
  lagPeriode('2023-05-01', '2023-10-31', 22000),
  lagPeriode('2024-01-01', '2024-02-30', 22000),
  lagPeriode('2024-05-01', '2024-08-31', 2000),
];

const lagDokumentInfo = (tittel: string) => {
  return {
    dokumentId: '',
    tittel: tittel,
    variantformat: Variantformat.ARKIV,
    filtype: '',
  };
};

const lagJournalpost = (tittel: string) => {
  return {
    journalpostId: '',
    journalpostType: JournalpostType.U,
    dato: '',
    hovedDokument: lagDokumentInfo(tittel),
    vedlegg: [],
  };
};

const dummyJournalposter = [
  lagJournalpost('Ettersending overgangsstønad - enslig mor eller far'),
  lagJournalpost('Ettersending overgangsstønad - enslig mor eller far'),
  lagJournalpost('Vedtak om revurdert overgangsstønad'),
  lagJournalpost('Vedtak om revurdert overgangsstønad'),
  lagJournalpost('Vedtak om revurdert stønad til skolepenger'),
  lagJournalpost('Vedtak om innvilget stønad til skolepenger'),
  lagJournalpost('Vedtak om revurdert stønad til barnetilsyn'),
  lagJournalpost('Vedtak om revurdert stønad til barnetilsyn'),
  lagJournalpost('Vedtak om avslått stønad til barnetilsyn'),
  lagJournalpost('Ettersending barnetilsyn - enslig mor eller far i arbeid'),
  lagJournalpost('Vedtak om innvilget overgangsstønad'),
];

const lagPeriode = (
  fra: string,
  til: string,
  beløp: number,
  inntektsgrunnlag: number = 0,
  samordningsfradrag: number = 0
): Stønadsperiode => {
  return {
    fraDato: fra,
    tilDato: til,
    beløp: beløp,
    inntektsgrunnlag: inntektsgrunnlag,
    samordningsfradrag: samordningsfradrag,
  };
};

const lagBreadCrumb = (url: string, title: string) => {
  return { url: url, title: title, handleInApp: false };
};
