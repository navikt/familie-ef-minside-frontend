import React, { ReactNode } from 'react';
import { Stønadsperiode, StønadType } from '../../interfaces/stønader';
import { BodyLong, HStack, Table } from '@navikt/ds-react';
import { formaterIsoDato, formaterTallMedTusenSkille } from '../../utils/formatter';
import styled from 'styled-components';
import { contentWidthDesktop, contentWidthMobile } from '../../utils/constants';
import { utledBrødtekst, utledHeaderTekst, utledKolonnebredde } from './utils';
import { useSkjermstørrelseHook } from '../../hooks/useSkjermstørrelseHook';

interface Props {
  stønadsperioder: Stønadsperiode[];
  stønadType: StønadType;
}

const Tabell = styled(Table)<{ bredde: string }>`
  max-width: ${(props) => props.bredde};
`;

const BeløpWrapper = styled(HStack)<{ bredde: string }>`
  width: ${(props) => props.bredde};
`;

const maksBeløpForPeriode = (ekspanderbar: boolean) => (periode: Stønadsperiode) =>
  ekspanderbar
    ? periode.beløp
    : Math.max(periode.samordningsfradrag, periode.inntektsgrunnlag, periode.beløp);

const StønadTabellAvansert: React.FC<Props> = ({ stønadsperioder, stønadType }) => {
  const { erLitenSkjerm } = useSkjermstørrelseHook();
  const skjermbredde = erLitenSkjerm ? `${contentWidthMobile}px` : `${contentWidthDesktop}px`;

  const størstBeløp = Math.max(...stønadsperioder.map(maksBeløpForPeriode(erLitenSkjerm)));
  const kolonneBredde = utledKolonnebredde(størstBeløp);
  const harSamordningsfradrag = stønadsperioder.some((periode) => periode.samordningsfradrag > 0);
  return (
    <>
      <BodyLong>{utledBrødtekst(stønadType)}</BodyLong>
      <Tabell bredde={skjermbredde}>
        <TabellHeader
          stønadType={stønadType}
          ekspanderbar={erLitenSkjerm}
          harSamordningsfradrag={harSamordningsfradrag}
        />
        <Table.Body>
          {stønadsperioder.map((periode) => (
            <TabellRad
              key={periode.fraDato + periode.tilDato}
              periode={periode}
              kolonneBredde={kolonneBredde}
              ekspanderbar={erLitenSkjerm}
              harSamordningsfradrag={harSamordningsfradrag}
            />
          ))}
        </Table.Body>
      </Tabell>
    </>
  );
};

const TabellHeader: React.FC<{
  stønadType: StønadType;
  ekspanderbar: boolean;
  harSamordningsfradrag: boolean;
}> = ({ stønadType, ekspanderbar, harSamordningsfradrag }) => {
  const { headerPeriode, headerBeløp, headerInntekt, headerSamordningsfradrag } =
    utledHeaderTekst(stønadType);

  return (
    <Table.Header>
      <Table.Row>
        {ekspanderbar && <Table.HeaderCell />}
        <Table.HeaderCell>{headerPeriode}</Table.HeaderCell>
        {!ekspanderbar && <Table.HeaderCell>{headerInntekt}</Table.HeaderCell>}
        {!ekspanderbar && harSamordningsfradrag && (
          <Table.HeaderCell>{headerSamordningsfradrag}</Table.HeaderCell>
        )}
        <Table.HeaderCell>{headerBeløp}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

const VerdiCelle: React.FC<{ bredde: string; children: ReactNode }> = ({ bredde, children }) => {
  return (
    <Table.DataCell align="right">
      <BeløpWrapper bredde={bredde} justify="end">
        {children}
      </BeløpWrapper>
    </Table.DataCell>
  );
};

const TabellRad: React.FC<{
  periode: Stønadsperiode;
  kolonneBredde: string;
  ekspanderbar: boolean;
  harSamordningsfradrag: boolean;
}> = ({ periode, kolonneBredde, ekspanderbar, harSamordningsfradrag }) => {
  const fraDato = formaterIsoDato(periode.fraDato);
  const tilDato = formaterIsoDato(periode.tilDato);

  const beløpsperiode = `${fraDato} - ${tilDato}`;

  const beløp = `${formaterTallMedTusenSkille(periode.beløp)} kr`;

  return ekspanderbar ? (
    <Table.ExpandableRow content={<UtvidetTabellRad periode={periode} />}>
      <Table.DataCell>{beløpsperiode}</Table.DataCell>
      <VerdiCelle bredde={kolonneBredde}>{beløp}</VerdiCelle>
    </Table.ExpandableRow>
  ) : (
    <Table.Row>
      <Table.DataCell>{beløpsperiode}</Table.DataCell>
      <VerdiCelle bredde={kolonneBredde}>
        {formaterTallMedTusenSkille(periode.inntektsgrunnlag)}
      </VerdiCelle>
      {harSamordningsfradrag && (
        <VerdiCelle bredde={kolonneBredde}>
          {formaterTallMedTusenSkille(periode.samordningsfradrag)}
        </VerdiCelle>
      )}
      <VerdiCelle bredde={kolonneBredde}>{beløp}</VerdiCelle>
    </Table.Row>
  );
};

const UtvidetTabellRad: React.FC<{
  periode: Stønadsperiode;
}> = ({ periode }) => {
  return (
    <>
      <div>Inntektsgrunnlag: {formaterTallMedTusenSkille(periode.inntektsgrunnlag)} kr</div>
      {periode.samordningsfradrag > 0 && (
        <div>Uføretrygd: {formaterTallMedTusenSkille(periode.samordningsfradrag)} kr</div>
      )}
    </>
  );
};

export default StønadTabellAvansert;
