import React, { ReactNode } from 'react';
import { Stønadsperiode, StønadType } from '../../interfaces/stønader';
import { BodyLong, HelpText, HStack, ReadMore, Table } from '@navikt/ds-react';
import { formaterIsoDato, formaterTallMedTusenSkille } from '../../utils/formatter';
import styled from 'styled-components';
import { contentWidthDesktop, contentWidthMobile } from '../../utils/constants';
import { grunnbeløpInfo, utledBrødtekst, utledHeaderTekst, utledKolonnebredde } from './utils';
import { useSkjermstørrelseHook } from '../../hooks/useSkjermstørrelseHook';
import { useLocaleIntlContext } from '../../context/useLocaleIntlContext';

interface Props {
  stønadsperioder: Stønadsperiode[];
  stønadType: StønadType;
}

interface TekstProps {
  tekst: (key: string, params?: string[]) => string;
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
  const { tekst } = useLocaleIntlContext();
  const { erLitenSkjerm } = useSkjermstørrelseHook();
  const skjermbredde = erLitenSkjerm ? `${contentWidthMobile}px` : `${contentWidthDesktop}px`;

  const størstBeløp = Math.max(...stønadsperioder.map(maksBeløpForPeriode(erLitenSkjerm)));
  const kolonneBredde = utledKolonnebredde(størstBeløp);
  const harSamordningsfradrag = stønadsperioder.some((periode) => periode.samordningsfradrag > 0);
  return (
    <>
      <BodyLong>{tekst(utledBrødtekst(stønadType))}</BodyLong>
      {stønadType === 'overgangsstønad' && (
        <ReadMore header={tekst(grunnbeløpInfo.overskrift)} size={'small'}>
          {tekst(grunnbeløpInfo.tekst)}
        </ReadMore>
      )}

      <Tabell bredde={skjermbredde}>
        {lagTabellHeader({ stønadType, ekspanderbar: erLitenSkjerm, harSamordningsfradrag, tekst })}
        <Table.Body>
          {stønadsperioder.map((periode) =>
            lagTabellRad({
              radNøkkel: periode.fraDato + periode.tilDato,
              periode,
              kolonneBredde,
              ekspanderbar: erLitenSkjerm,
              harSamordningsfradrag,
              tekst,
            })
          )}
        </Table.Body>
      </Tabell>
    </>
  );
};

const lagTabellHeader = ({
  stønadType,
  ekspanderbar,
  harSamordningsfradrag,
  tekst,
}: {
  stønadType: StønadType;
  ekspanderbar: boolean;
  harSamordningsfradrag: boolean;
} & TekstProps) => {
  const { headerPeriode, headerBeløp, headerInntekt, headerSamordningsfradrag } =
    utledHeaderTekst(stønadType);

  return (
    <Table.Header>
      <Table.Row>
        {ekspanderbar && <Table.HeaderCell />}
        <Table.HeaderCell>{tekst(headerPeriode)}</Table.HeaderCell>
        {!ekspanderbar && (
          <Table.HeaderCell>
            <HStack gap="space-2">
              {headerInntekt && tekst(headerInntekt)}
              <HelpText>{tekst('inntektsgrunnlag.hjelpetekst')}</HelpText>
            </HStack>
          </Table.HeaderCell>
        )}
        {!ekspanderbar && harSamordningsfradrag && (
          <Table.HeaderCell>
            <HStack gap="space-2">
              {headerSamordningsfradrag && tekst(headerSamordningsfradrag)}
              <HelpText>{tekst('samordningsfradrag.hjelpetekst')}</HelpText>
            </HStack>
          </Table.HeaderCell>
        )}
        <Table.HeaderCell>{tekst(headerBeløp)}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

const lagVerdiCelle = ({ bredde, children }: { bredde: string; children: ReactNode }) => {
  return (
    <Table.DataCell align="right">
      <BeløpWrapper bredde={bredde} justify="end">
        {children}
      </BeløpWrapper>
    </Table.DataCell>
  );
};

const lagTabellRad = ({
  radNøkkel,
  periode,
  kolonneBredde,
  ekspanderbar,
  harSamordningsfradrag,
  tekst,
}: {
  radNøkkel: string;
  periode: Stønadsperiode;
  kolonneBredde: string;
  ekspanderbar: boolean;
  harSamordningsfradrag: boolean;
} & TekstProps) => {
  const fraDato = formaterIsoDato(periode.fraDato);
  const tilDato = formaterIsoDato(periode.tilDato);

  const beløpsperiode = `${fraDato} - ${tilDato}`;

  const beløpMedTusenSkilleOgNokEllerNull = (beløp: number) => {
    if (beløp === 0) {
      return beløp;
    }

    return `${formaterTallMedTusenSkille(beløp)} kr`;
  };

  return ekspanderbar ? (
    <Table.ExpandableRow key={radNøkkel} content={lagUtvidetTabellRad({ periode, tekst })}>
      <Table.DataCell>{beløpsperiode}</Table.DataCell>
      {lagVerdiCelle({
        bredde: kolonneBredde,
        children: beløpMedTusenSkilleOgNokEllerNull(periode.beløp),
      })}
    </Table.ExpandableRow>
  ) : (
    <Table.Row key={radNøkkel}>
      <Table.DataCell>{beløpsperiode}</Table.DataCell>
      {lagVerdiCelle({
        bredde: kolonneBredde,
        children: beløpMedTusenSkilleOgNokEllerNull(periode.inntektsgrunnlag),
      })}
      {harSamordningsfradrag &&
        lagVerdiCelle({
          bredde: kolonneBredde,
          children: beløpMedTusenSkilleOgNokEllerNull(periode.samordningsfradrag),
        })}
      {lagVerdiCelle({
        bredde: kolonneBredde,
        children: beløpMedTusenSkilleOgNokEllerNull(periode.beløp),
      })}
    </Table.Row>
  );
};

const lagUtvidetTabellRad = ({
  periode,
  tekst,
}: {
  periode: Stønadsperiode;
} & TekstProps) => {
  return (
    <>
      <HStack gap="space-2">
        Inntektsgrunnlag: {formaterTallMedTusenSkille(periode.inntektsgrunnlag)} NOK{' '}
        <HelpText>{tekst('inntektsgrunnlag.hjelpetekst')}</HelpText>
      </HStack>
      {periode.samordningsfradrag > 0 && (
        <HStack gap="space-2">
          Samordning: {formaterTallMedTusenSkille(periode.samordningsfradrag)} NOK{' '}
          <HelpText>{tekst('samordningsfradrag.hjelpetekst')}</HelpText>
        </HStack>
      )}
    </>
  );
};

export default StønadTabellAvansert;
