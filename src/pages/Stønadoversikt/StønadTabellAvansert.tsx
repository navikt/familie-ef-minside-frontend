import React, { ReactNode } from 'react';
import { Stønadsperiode, StønadType } from '../../interfaces/stønader';
import { BodyLong, HelpText, HStack, ReadMore, Table } from '@navikt/ds-react';
import { formaterIsoDato, formaterTallMedTusenSkille } from '../../utils/formatter';
import styled from 'styled-components';
import { contentWidthDesktop, contentWidthMobile } from '../../utils/constants';
import { grunnbeløpInfo, utledBrødtekst, utledHeaderTekst, utledKolonnebredde } from './utils';
import { useSkjermstørrelseHook } from '../../hooks/useSkjermstørrelseHook';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

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
        <ReadMore header={grunnbeløpInfo.overskrift} size={'small'}>
          {grunnbeløpInfo.tekst}
        </ReadMore>
      )}

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
  const { tekst } = useLocaleIntlContext();

  return (
    <Table.Header>
      <Table.Row>
        {ekspanderbar && <Table.HeaderCell />}
        <Table.HeaderCell>{tekst(headerPeriode)}</Table.HeaderCell>
        {!ekspanderbar && (
          <Table.HeaderCell>
            <HStack gap={'1'}>
              {headerInntekt && tekst(headerInntekt)}
              <HelpText>{tekst('inntektsgrunnlag.hjelpetekst')}</HelpText>
            </HStack>
          </Table.HeaderCell>
        )}
        {!ekspanderbar && harSamordningsfradrag && (
          <Table.HeaderCell>
            <HStack gap={'1'}>
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
  const { tekst } = useLocaleIntlContext();
  return (
    <>
      <HStack gap={'1'}>
        Inntektsgrunnlag: {formaterTallMedTusenSkille(periode.inntektsgrunnlag)} kr{' '}
        <HelpText>{tekst('inntektsgrunnlag.hjelpetekst')}</HelpText>
      </HStack>
      {periode.samordningsfradrag > 0 && (
        <HStack gap={'1'}>
          Samordning: {formaterTallMedTusenSkille(periode.samordningsfradrag)} kr{' '}
          <HelpText>{tekst('samordningsfradrag.hjelpetekst')}</HelpText>
        </HStack>
      )}
    </>
  );
};

export default StønadTabellAvansert;
