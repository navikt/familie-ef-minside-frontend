import React, { createContext, ReactNode, useContext } from 'react';

interface LocaleIntlContextProps {
  tekster: Record<string, string>;
  tekst: (key: string, params?: string[]) => string;
}

const LocaleIntlContext = createContext<LocaleIntlContextProps>({
  tekster: {},
  tekst: () => 'oversettelser ikke tilgjengelig',
});

const useLocaleIntlContext = () => useContext(LocaleIntlContext);

interface LocaleIntlProviderProps {
  tekster: Record<string, string>;
  children?: ReactNode;
}

const LocaleIntlProvider: React.FC<LocaleIntlProviderProps> = ({ children, tekster }) => {
  const formaterMelding = (key: string, parametre?: string[]) => {
    const tekst = tekster[key];

    if (tekst === undefined || tekst === null) {
      console.warn(`Finner ikke oversettelse for ${key}`);
      return key;
    }

    if (parametre) {
      return parametre.reduce((acc, param, index) => {
        const placeholder = `[${index}]`;
        return acc.replaceAll(placeholder, param);
      }, tekst);
    }

    return tekst;
  };
  const tekst = (key: string, params?: string[]) => formaterMelding(key, params);
  return (
    <LocaleIntlContext.Provider value={{ tekster, tekst }}>{children}</LocaleIntlContext.Provider>
  );
};

export { useLocaleIntlContext, LocaleIntlProvider };
