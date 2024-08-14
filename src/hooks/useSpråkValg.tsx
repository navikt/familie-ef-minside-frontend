import { setAvailableLanguages } from '@navikt/nav-dekoratoren-moduler';
import { useEffect } from 'react';

export const useSpråkValg = () => {
  useEffect(() => {
    setAvailableLanguages([
      {
        locale: 'nb',
        handleInApp: true,
      },
      {
        locale: 'en',
        handleInApp: true,
      },
    ]);

    return () => {
      setAvailableLanguages([]);
    };
  }, []);
};
