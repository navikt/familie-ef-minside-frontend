import { differenceInDays, parseISO } from 'date-fns';

export const erPåfølgendeDatoer = (dateLeft: string, dateRight: string) =>
  antallDagerMellomDatoer(dateLeft, dateRight) === 1;

export const antallDagerMellomDatoer = (dateLeft: string, dateRight: string) =>
  differenceInDays(parseISO(dateRight), parseISO(dateLeft));
