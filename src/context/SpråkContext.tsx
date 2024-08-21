import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Tekster } from '../language/typer';
import { nb } from '../language/tekster_nb';
import { en } from '../language/tekster_en';
import { LocaleType } from '../language/locale';
import { onLanguageSelect } from '@navikt/nav-dekoratoren-moduler';
import { LocaleIntlProvider } from './LocaleIntlContext';

interface SpråkcontextProps {
  locale: LocaleType;
  settLocale: (language: LocaleType) => void;
}

const SpråkContext = createContext<SpråkcontextProps>({
  locale: LocaleType.nb,
  settLocale: () => {},
});

export const SpråkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const defaultSpråk = LocaleType.nb;
  const [locale, settLocale] = useState(defaultSpråk);
  const [tekster, settTekster] = useState<Tekster>(nb);

  onLanguageSelect((language) => {
    settLocale(language.locale as LocaleType);
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    settTekster(locale === LocaleType.en ? en : nb);
  }, [locale]);

  return (
    <SpråkContext.Provider value={{ locale, settLocale }}>
      <LocaleIntlProvider tekster={tekster}>{children}</LocaleIntlProvider>
    </SpråkContext.Provider>
  );
};

export const useSpråkContext = () => useContext(SpråkContext);
