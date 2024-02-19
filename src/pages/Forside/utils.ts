import { StønadType } from '../../interfaces/stønader';

export const utledKomponentTittel = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return 'Overgangsstønad';
    case 'barnetilsyn':
      return 'Stønad til barnetilsyn';
    case 'skolepenger':
      return 'Stønad til skolepenger';
  }
};
