export interface Stønader {
  overgangsstønad: Stønadsperiode[];
  barnetilsyn: Stønadsperiode[];
  skolepenger: Stønadsperiode[];
}

export interface Stønadsperiode {
  fraDato: string;
  tilDato: string;
  beløp: number;
}

export const initielleStønader: Stønader = {
  overgangsstønad: [],
  barnetilsyn: [],
  skolepenger: [],
};
