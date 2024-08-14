import { StønadType } from '../../interfaces/stønader';
import { LocaleType } from '../../language/locale';

const titler = {
  overgangsstønad: {
    nb: 'Overgangsstønad',
    en: 'Transitional benefit',
  },
  barnetilsyn: {
    nb: 'Stønad til barnetilsyn',
    en: 'Child care benefit',
  },
  skolepenger: {
    nb: 'Stønad til skolepenger',
    en: 'Support for School fees',
  },
};

export const utledKomponentTittel = (stønadType: StønadType, locale: LocaleType) => {
  const språk = locale === LocaleType.en ? 'en' : 'nb';
  return titler[stønadType][språk];
};
