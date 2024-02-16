import React from 'react';
import { Stønad, Stønadsperiode, StønadType } from '../../interfaces/stønader';
import { Alert, BodyLong, Table } from '@navikt/ds-react';
import { formaterIsoDato, formaterTallMedTusenSkille } from '../../utils/formatter';
import styled from 'styled-components';
import { contentWidthMobile } from '../../utils/constants';

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

  const sortertePerioder = stønad.perioder.slice().sort((a, b) => (a.fraDato < b.fraDato ? 1 : -1));

  return (
    <>
      <BodyLong>
        Tabellen viser periodene dine med {stønadType} og hvor mye du har fått/får i stønad per
        måned før skatt. For å se hvordan vi har regnet ut stønadsbeløpet, må du lese vedtaket ditt.
        Du finner alle vedtakene dine i dokumentoversikten lengre ned på siden.
      </BodyLong>
      <Tabell>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Periode</Table.HeaderCell>
            <Table.HeaderCell>Beløp per måned før skatt</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortertePerioder.map((periode) => (
            <TabellRad key={periode.fraDato + periode.tilDato} periode={periode} />
          ))}
        </Table.Body>
      </Tabell>
    </>
  );
};

const TabellRad: React.FC<{ periode: Stønadsperiode }> = ({ periode }) => {
  const fraDato = formaterIsoDato(periode.fraDato);
  const tilDato = formaterIsoDato(periode.tilDato);
  const beløp = `${formaterTallMedTusenSkille(periode.beløp)} kr`;
  return (
    <Table.Row>
      <Table.DataCell>{`${fraDato} - ${tilDato}`}</Table.DataCell>
      <Table.DataCell align="right">{beløp}</Table.DataCell>
    </Table.Row>
  );
};

export default StønadTabell;
