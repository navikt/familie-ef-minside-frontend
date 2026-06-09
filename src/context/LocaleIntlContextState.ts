import { createContext } from 'react';

export interface LocaleIntlContextProps {
  tekster: Record<string, string>;
  tekst: (key: string, params?: string[]) => string;
}

export const LocaleIntlContext = createContext<LocaleIntlContextProps>({
  tekster: {},
  tekst: () => 'oversettelser ikke tilgjengelig',
});
