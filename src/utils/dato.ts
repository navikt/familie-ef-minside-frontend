import { format, parseISO } from 'date-fns';

export const formaterIsoDatoTid = (dato: string): string => {
  return format(parseISO(dato), "dd.MM.yyyy 'kl'.HH:mm");
};