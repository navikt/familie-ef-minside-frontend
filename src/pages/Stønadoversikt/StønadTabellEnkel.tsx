import React from 'react';
import { Stønadsperiode, StønadType } from '../../interfaces/stønader';
import { BodyLong, HStack, Table } from '@navikt/ds-react';
import {
  formaterIsoDato,
  formaterIsoMånedÅr,
  formaterTallMedTusenSkille,
} from '../../utils/formatter';
import styled from 'styled-components';
import { contentWidthMobile } from '../../utils/constants';
import { utledBrødtekst, utledHeaderTekst, utledKolonnebredde } from './utils';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

interface Props {
  stønadsperioder: Stønadsperiode[];
  stønadType: StønadType;
}

const Tabell = styled(Table)`
  max-width: ${contentWidthMobile}px;
`;

const BeløpWrapper = styled(HStack)<{ bredde: string }>`
  width: ${(props) => props.bredde};
`;

const StønadTabellEnkel: React.FC<Props> = ({ stønadsperioder, stønadType }) => {
  const { tekst } = useLocaleIntlContext();
  const størstBeløp = Math.max(...stønadsperioder.map((periode) => periode.beløp));
  const kolonneBredde = utledKolonnebredde(størstBeløp);

  return (
    <>
      <BodyLong>{tekst(utledBrødtekst(stønadType))}</BodyLong>
      <Tabell>
        <TabellHeader stønadType={stønadType} />
        <Table.Body>
          {stønadsperioder.map((periode) => (
            <TabellRad
              key={periode.fraDato + periode.tilDato}
              periode={periode}
              stønadType={stønadType}
              kolonneBredde={kolonneBredde}
            />
          ))}
        </Table.Body>
      </Tabell>
    </>
  );
};

const TabellHeader: React.FC<{ stønadType: StønadType }> = ({ stønadType }) => {
  const { headerPeriode, headerBeløp } = utledHeaderTekst(stønadType);
  const { tekst } = useLocaleIntlContext();
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>{tekst(headerPeriode)}</Table.HeaderCell>
        <Table.HeaderCell>{tekst(headerBeløp)}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

const TabellRad: React.FC<{
  periode: Stønadsperiode;
  stønadType: StønadType;
  kolonneBredde: string;
}> = ({ periode, stønadType, kolonneBredde }) => {
  const fraDato = formaterIsoDato(periode.fraDato);
  const tilDato = formaterIsoDato(periode.tilDato);
  const månedÅr = formaterIsoMånedÅr(periode.fraDato);

  const beløpsperiode = stønadType === 'skolepenger' ? `${månedÅr}` : `${fraDato} - ${tilDato}`;

  const beløp = `${formaterTallMedTusenSkille(periode.beløp)} nok`;

  return (
    <Table.Row>
      <Table.DataCell>{beløpsperiode}</Table.DataCell>
      <Table.DataCell align="right">
        <BeløpWrapper bredde={kolonneBredde} justify="end">
          {beløp}
        </BeløpWrapper>
      </Table.DataCell>
    </Table.Row>
  );
};

export default StønadTabellEnkel;
