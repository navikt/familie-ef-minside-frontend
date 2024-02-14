import { StønadType } from '../../interfaces/stønader';
import {
  breadCrumbBarnetilsyn,
  breadCrumbOvergangsstønad,
  breadCrumbSkolepenger,
} from '../../utils/constants';

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
