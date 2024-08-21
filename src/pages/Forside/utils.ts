import { StønadType } from '../../interfaces/stønader';

const titler = {
  overgangsstønad: 'titler.overgangsstønad',
  barnetilsyn: 'titler.barnetilsyn',
  skolepenger: 'titler.skolepenger',
};

export const utledKomponentTittel = (stønadType: StønadType) => {
  return titler[stønadType];
};
