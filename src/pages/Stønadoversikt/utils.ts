import { Stønadsperiode, StønadType } from '../../interfaces/stønader';
import {
  breadCrumbBarnetilsyn,
  breadCrumbOvergangsstønad,
  breadCrumbSkolepenger,
} from '../../utils/constants';
import { Journalpost } from '../../interfaces/journalpost';
import { erPåfølgendeDatoer } from '../../utils/date';

export const utledBreadCrumb = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return breadCrumbOvergangsstønad;
    case 'barnetilsyn':
      return breadCrumbBarnetilsyn;
    case 'skolepenger':
      return breadCrumbSkolepenger;
  }
};

export const utledStønadTekst = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return 'overgangsstønad.breadcrumb';
    case 'barnetilsyn':
      return 'barnetilsyn.breadcrumb';
    case 'skolepenger':
      return 'skolepenger.breadcrumb';
  }
};

export const utledBeskrivelse = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return 'overgangsstønad.beskrivelse';
    case 'barnetilsyn':
      return 'barnetilsyn.beskrivelse';
    case 'skolepenger':
      return 'skolepenger.beskrivelse';
  }
};

export const utledPerioder = (stønadType: StønadType, perioder: Stønadsperiode[]) =>
  stønadType === 'skolepenger'
    ? sorterStønadsperioder(perioder, 'desc')
    : mergeSammenhengendePerioderMedLikeBeløp(perioder);

const sorterStønadsperioder = (perioder: Stønadsperiode[], rekkefølge: 'asc' | 'desc') =>
  perioder
    .slice()
    .sort((a, b) => (rekkefølge === 'asc' ? sorterDatoAsc(a, b) : sorterDatoDesc(a, b)));

const sorterDatoAsc = (a: Stønadsperiode, b: Stønadsperiode) => (a.fraDato < b.fraDato ? -1 : 1);
const sorterDatoDesc = (a: Stønadsperiode, b: Stønadsperiode) => (a.fraDato < b.fraDato ? 1 : -1);

const mergeSammenhengendePerioderMedLikeBeløp = (perioder: Stønadsperiode[]) => {
  const sortertePerioderAsc = sorterStønadsperioder(perioder, 'asc');

  const sammenslåttePerioder = sortertePerioderAsc.reduce((acc, periode) => {
    if (acc.length === 0) {
      return [periode];
    }
    const prevPeriode = acc[acc.length - 1];
    if (
      erPåfølgendeDatoer(prevPeriode.tilDato, periode.fraDato) &&
      harSammeBeløp(prevPeriode, periode)
    ) {
      const sammenslåttPeriode = {
        fraDato: prevPeriode.fraDato,
        tilDato: periode.tilDato,
        beløp: periode.beløp,
        inntektsgrunnlag: periode.inntektsgrunnlag,
        samordningsfradrag: periode.samordningsfradrag,
      } as Stønadsperiode;

      return [...acc.slice(0, -1), sammenslåttPeriode];
    }
    return [...acc, periode];
  }, [] as Stønadsperiode[]);

  return sorterStønadsperioder(sammenslåttePerioder, 'desc');
};

export const utledVedtak = (journalposter: Journalpost[], stønadType: StønadType) =>
  journalposter.filter((journalpost) => {
    const tittel = journalpost.hovedDokument.tittel.toLowerCase();

    // Har iverksatt vedtak med skrivefeil i dokumenttittel ("overgangstønad") så må endre på sjekken for overgangsstønad
    if (stønadType === 'overgangsstønad') {
      return tittel.includes('overgang') && tittel.includes('vedtak');
    }
    return tittel.includes(stønadType) && tittel.includes('vedtak');
  });

export const utledBrødtekst = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return `overgangsstønad.brødtekst.util`;
    case 'barnetilsyn':
      return `barnetilsyn.brødtekst.util`;
    case 'skolepenger':
      return `skolepenger.brødtekst.util`;
  }
};

export const grunnbeløpInfo = {
  overskrift: 'grunnbeløp.tittel',
  tekst: 'grunnbeløp.tekst',
};

export const utledHeaderTekst = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return {
        headerPeriode: 'tabell.header.periode',
        headerBeløp: 'tabell.header.beløp',
        headerInntekt: 'tabell.header.inntekt',
        headerSamordningsfradrag: 'tabell.header.samordningsfradrag',
      };
    case 'barnetilsyn':
      return {
        headerPeriode: 'tabell.header.barnetilsyn',
        headerBeløp: 'tabell.header.beløp.barnetilsyn',
      };
    case 'skolepenger':
      return {
        headerPeriode: 'tabell.header.skolepenger',
        headerBeløp: 'tabell.header.beløp.skolepenger',
      };
  }
};

const harSammeBeløp = (periodeLeft: Stønadsperiode, periodeRight: Stønadsperiode) =>
  periodeLeft.beløp === periodeRight.beløp &&
  periodeLeft.inntektsgrunnlag === periodeRight.inntektsgrunnlag &&
  periodeLeft.samordningsfradrag === periodeRight.samordningsfradrag;

// Denne utleder bredde til beløpskolonne i tabell. For høyrejustering av beløp.
export const utledKolonnebredde = (beløp: number) => {
  if (beløp < 10) {
    return '1.75rem';
  } else if (beløp < 100) {
    return '2.3rem';
  } else if (beløp < 1000) {
    return '2.85rem';
  } else if (beløp < 10000) {
    return '3.65rem';
  }
  return '5.5rem';
};
