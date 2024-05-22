import React from 'react';
import { Stønad, StønadType } from '../../interfaces/stønader';
import { Alert } from '@navikt/ds-react';
import StønadTabellEnkel from './StønadTabellEnkel';
import StønadTabellAvansert from './StønadTabellAvansert';
import { utledPerioder } from './utils';

interface Props {
  stønad: Stønad;
  stønadType: StønadType;
}

const StønadTabell: React.FC<Props> = ({ stønad, stønadType }) => {
  const harStønad = stønad.perioder.length > 0;

  if (!harStønad) {
    return (
      <Alert variant="info">Vi fant ingen utbetalingsperioder som gjelder {stønadType}.</Alert>
    );
  }
  const tabellPerioder = utledPerioder(stønadType, stønad.perioder);

  return stønadType === 'overgangsstønad' ? (
    <StønadTabellAvansert stønadType={stønadType} stønadsperioder={tabellPerioder} />
  ) : (
    <StønadTabellEnkel stønadType={stønadType} stønadsperioder={tabellPerioder} />
  );
};

export default StønadTabell;
