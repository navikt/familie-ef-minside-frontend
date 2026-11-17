import { onLanguageSelect } from '@navikt/nav-dekoratoren-moduler';
import type React from 'react';
import { createContext, type ReactNode, useContext, useEffect, useState } from 'react';
import { LocaleType } from '../language/locale';
import { en } from '../language/tekster_en';
import { nb } from '../language/tekster_nb';
import type { Tekster } from '../language/typer';
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

    onLanguageSelect(language => {
        const locale = language.locale as LocaleType;

        settLocale(locale);
        settTekster(locale === LocaleType.en ? en : nb);
    });

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    return (
        <SpråkContext.Provider value={{ locale, settLocale }}>
            <LocaleIntlProvider tekster={tekster}>{children}</LocaleIntlProvider>
        </SpråkContext.Provider>
    );
};

export const useSpråkContext = () => useContext(SpråkContext);
