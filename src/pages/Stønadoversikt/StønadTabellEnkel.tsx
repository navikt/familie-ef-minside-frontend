import { BodyLong, HStack, Table } from '@navikt/ds-react';
import type React from 'react';
import styled from 'styled-components';
import { useLocaleIntlContext } from '../../context/useLocaleIntlContext';
import type { Stønadsperiode, StønadType } from '../../interfaces/stønader';
import { contentWidthMobile } from '../../utils/constants';
import { formaterIsoDato, formaterIsoMånedÅr, formaterTallMedTusenSkille } from '../../utils/formatter';
import { utledBrødtekst, utledHeaderTekst, utledKolonnebredde } from './utils';

interface Props {
    stønadsperioder: Stønadsperiode[];
    stønadType: StønadType;
}

interface TekstProps {
    tekst: (key: string, params?: string[]) => string;
}

const Tabell = styled(Table)`
  max-width: ${contentWidthMobile}px;
`;

const BeløpWrapper = styled(HStack)<{ bredde: string }>`
  width: ${props => props.bredde};
`;

const StønadTabellEnkel: React.FC<Props> = ({ stønadsperioder, stønadType }) => {
    const { tekst } = useLocaleIntlContext();
    const størstBeløp = Math.max(...stønadsperioder.map(periode => periode.beløp));
    const kolonneBredde = utledKolonnebredde(størstBeløp);

    return (
        <>
            <BodyLong>{tekst(utledBrødtekst(stønadType))}</BodyLong>
            <Tabell>
                {lagTabellHeader({ stønadType, tekst })}
                <Table.Body>
                    {stønadsperioder.map(periode =>
                        lagTabellRad({
                            radNøkkel: periode.fraDato + periode.tilDato,
                            periode,
                            stønadType,
                            kolonneBredde,
                        })
                    )}
                </Table.Body>
            </Tabell>
        </>
    );
};

const lagTabellHeader = ({
    stønadType,
    tekst,
}: {
    stønadType: StønadType;
} & TekstProps) => {
    const { headerPeriode, headerBeløp } = utledHeaderTekst(stønadType);

    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>{tekst(headerPeriode)}</Table.HeaderCell>
                <Table.HeaderCell>{tekst(headerBeløp)}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
};

const lagTabellRad = ({
    radNøkkel,
    periode,
    stønadType,
    kolonneBredde,
}: {
    radNøkkel: string;
    periode: Stønadsperiode;
    stønadType: StønadType;
    kolonneBredde: string;
}) => {
    const fraDato = formaterIsoDato(periode.fraDato);
    const tilDato = formaterIsoDato(periode.tilDato);
    const månedÅr = formaterIsoMånedÅr(periode.fraDato);

    const beløpsperiode = stønadType === 'skolepenger' ? `${månedÅr}` : `${fraDato} - ${tilDato}`;

    const beløp = `${formaterTallMedTusenSkille(periode.beløp)} kr`;

    return (
        <Table.Row key={radNøkkel}>
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
