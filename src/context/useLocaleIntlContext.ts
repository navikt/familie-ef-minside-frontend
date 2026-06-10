import { useContext } from 'react';
import { LocaleIntlContext } from './LocaleIntlContextState';

export const useLocaleIntlContext = () => useContext(LocaleIntlContext);
