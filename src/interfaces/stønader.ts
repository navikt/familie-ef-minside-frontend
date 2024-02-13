export interface Stønader {
  overgangsstønad: Stønad;
  barnetilsyn: Stønad;
  skolepenger: Stønad;
}

export interface Stønad {
  periodeStatus: PeriodeStatus;
  startDato?: string;
  sluttDato?: string;
  perioder: Stønadsperiode[];
}

export interface Stønadsperiode {
  fraDato: string;
  tilDato: string;
  beløp: number;
}

export enum PeriodeStatus {
  LØPENDE_UTEN_OPPHOLD = 'LØPENDE_UTEN_OPPHOLD',
  FREMTIDIG_UTEN_OPPHOLD = 'FREMTIDIG_UTEN_OPPHOLD',
  TIDLIGERE_ELLER_OPPHOLD = 'TIDLIGERE_ELLER_OPPHOLD',
  INGEN = 'INGEN',
}

const initiellStønad: Stønad = {
  periodeStatus: PeriodeStatus.INGEN,
  perioder: [],
};

export const initielleStønader: Stønader = {
  overgangsstønad: initiellStønad,
  barnetilsyn: initiellStønad,
  skolepenger: initiellStønad,
};
