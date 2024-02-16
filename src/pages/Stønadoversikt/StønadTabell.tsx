import React from 'react';
import { Stønad, Stønadsperiode, StønadType } from '../../interfaces/stønader';
import { Alert, BodyLong, Table } from '@navikt/ds-react';
import {
  formaterIsoDato,
  formaterIsoÅrMåned,
  formaterTallMedTusenSkille,
} from '../../utils/formatter';
import styled from 'styled-components';
import { contentWidthMobile } from '../../utils/constants';
import { utledBrødtekst, utledHeaderTekst, utledPerioder } from './utils';

interface Props {
  stønad: Stønad;
  stønadType: StønadType;
}

const Tabell = styled(Table)`
  max-width: ${contentWidthMobile}px;
`;

const StønadTabell: React.FC<Props> = ({ stønad, stønadType }) => {
  const harStønad = stønad.perioder.length > 0;

  if (!harStønad) {
    return (
      <Alert variant="info">Vi fant ingen utbetalingsperioder som gjelder {stønadType}.</Alert>
    );
  }
  const brødTekst = utledBrødtekst(stønadType);
  const tabellPerioder = utledPerioder(stønadType, stønad.perioder);

  return (
    <>
      <BodyLong>{brødTekst}</BodyLong>
      <Tabell>
        <TabellHeader stønadType={stønadType} />
        <Table.Body>
          {tabellPerioder.map((periode) => (
            <TabellRad
              key={periode.fraDato + periode.tilDato}
              periode={periode}
              stønadType={stønadType}
            />
          ))}
        </Table.Body>
      </Tabell>
    </>
  );
};

const TabellHeader: React.FC<{ stønadType: StønadType }> = ({ stønadType }) => {
  const { headerCelle1, headerCelle2 } = utledHeaderTekst(stønadType);

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>{headerCelle1}</Table.HeaderCell>
        <Table.HeaderCell>{headerCelle2}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

const TabellRad: React.FC<{ periode: Stønadsperiode; stønadType: StønadType }> = ({
  periode,
  stønadType,
}) => {
  const fraDato = formaterIsoDato(periode.fraDato);
  const tilDato = formaterIsoDato(periode.tilDato);
  const årMåned = formaterIsoÅrMåned(periode.fraDato);

  const beløpsperiode = stønadType === 'skolepenger' ? `${årMåned}` : `${fraDato} - ${tilDato}`;

  const beløp = `${formaterTallMedTusenSkille(periode.beløp)} kr`;

  return (
    <Table.Row>
      <Table.DataCell>{beløpsperiode}</Table.DataCell>
      <Table.DataCell align="right">{beløp}</Table.DataCell>
    </Table.Row>
  );
};

export default StønadTabell;
