import { StønadType } from '../interfaces/stønader';
import { nb } from '../language/tekster_nb';
import { utledBreadCrumb } from '../pages/Stønadoversikt/utils';

export const mockTekst = (key: string, values?: string[]) => {
  const tekst = nb[key];

  if (values && values.length > 0) {
    return tekst.replace(/{(\d+)}/g, (match, index) => {
      const value = values[index];
      return value !== undefined ? value : match;
    });
  }

  return tekst;
};

export const mockBreadCrumb = (stønadType: StønadType) => {
  const breadCrumb = utledBreadCrumb(stønadType);

  const breadCrumbTitle = mockTekst(utledBreadCrumb(stønadType).title);
  return { ...breadCrumb, title: breadCrumbTitle };
};
