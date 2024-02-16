import { StønadType } from '../../interfaces/stønader';
import {
  breadCrumbBarnetilsyn,
  breadCrumbOvergangsstønad,
  breadCrumbSkolepenger,
} from '../../utils/constants';
import { Journalpost } from '../../interfaces/journalpost';

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

export const utledSidetittel = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return 'Din overgangsstønad';
    case 'barnetilsyn':
      return 'Din stønad til barnetilsyn';
    case 'skolepenger':
      return 'Din stønad til skolepenger';
  }
};

export const utledBeskrivelse = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return 'Her vises dine vedtakdsdokumenter for overgangsstønad.';
    case 'barnetilsyn':
      return 'Her vises dine vedtakdsdokumenter for stønad til barnetilsyn.';
    case 'skolepenger':
      return 'Her vises dine vedtakdsdokumenter for stønad til skolepenger.';
  }
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
