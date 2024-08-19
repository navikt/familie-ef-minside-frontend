import { StønadType } from '../../interfaces/stønader';
import { LocaleType } from '../../language/locale';

const titler = {
  overgangsstønad: {
    nb: 'Overgangsstønad',
    en: 'Transitional Benefit',
  },
  barnetilsyn: {
    nb: 'Stønad til barnetilsyn',
    en: 'Child Care Benefit',
  },
  skolepenger: {
    nb: 'Stønad til skolepenger',
    en: 'Support for School Fees',
  },
};

export const utledKomponentTittel = (stønadType: StønadType, locale: LocaleType) => {
  const språk = locale === LocaleType.en ? 'en' : 'nb';
  return titler[stønadType][språk];
};
