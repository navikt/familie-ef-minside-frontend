import { Alert, BodyLong, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import { useApp } from '../../context/AppContext';
import React from 'react';
import { Journalpost } from '../../interfaces/journalpost';
import DokumentListe from '../Dokumentoversikt/DokumentListe';
import styled from 'styled-components';
import DataViewer from '../../components/DataViewer';
import { StønadType } from '../../interfaces/stønader';
import { utledBeskrivelse, utledStønadTekst, utledVedtak } from './utils';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

interface Props {
  stønadType: StønadType;
}

const StyledDokumentListe = styled(DokumentListe)`
  .dokument-rad {
    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const DineVedtak: React.FC<Props> = ({ stønadType }) => {
  const { journalposter, journalpostStatus } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        {tekst('vedtak.tittel')}
      </HeadingLevel2>
      <DataViewer
        dataStatus={journalpostStatus}
        loaderTekst={tekst('vedtak.henter')}
        alertTekst={tekst('vedtak.galt')}
      >
        <DokumentVisning journalposter={journalposter} stønadType={stønadType} />
      </DataViewer>
    </VStack>
  );
};

const DokumentVisning: React.FC<{ journalposter: Journalpost[]; stønadType: StønadType }> = ({
  journalposter,
  stønadType,
}) => {
  const { tekst } = useLocaleIntlContext();
  const vedtak = utledVedtak(journalposter, stønadType);
  const harVedtak = vedtak.length > 0;

  if (!harVedtak) {
    return (
      <Alert inline variant="info">
        {tekst('vedtak.alert', [tekst(utledStønadTekst(stønadType))])}
      </Alert>
    );
  }

  const listeBeskrivelse = tekst(utledBeskrivelse(stønadType));

  return (
    <>
      <BodyLong>{listeBeskrivelse}</BodyLong>
      <StyledDokumentListe journalposter={vedtak} />
    </>
  );
};

export default DineVedtak;
