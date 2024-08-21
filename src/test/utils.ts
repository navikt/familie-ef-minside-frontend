import { StønadType } from '../interfaces/stønader';
import { nb } from '../language/tekster_nb';
import { utledBreadCrumb } from '../pages/Stønadoversikt/utils';

export const mockTekst = (key: string, parametre?: string[]) => {
  const tekst = nb[key];

  if (parametre) {
    return parametre.reduce((acc, param, index) => {
      const placeholder = `[${index}]`;
      return acc.replaceAll(placeholder, param);
    }, tekst);
  }

  return tekst;
};

export const mockBreadCrumb = (stønadType: StønadType) => {
  const breadCrumb = utledBreadCrumb(stønadType);

  const breadCrumbTitle = mockTekst(utledBreadCrumb(stønadType).title);
  return { ...breadCrumb, title: breadCrumbTitle };
};
