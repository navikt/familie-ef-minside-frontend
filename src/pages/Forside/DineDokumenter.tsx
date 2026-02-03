import { Alert, Heading, Link, VStack } from '@navikt/ds-react';
import { useApp } from '../../context/AppContext';
import React from 'react';
import { Journalpost } from '../../interfaces/journalpost';
import DokumentListe from '../Dokumentoversikt/DokumentListe';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DataViewer from '../../components/DataViewer';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

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

const Lenke = styled(Link)`
  max-width: fit-content;
`;

const DineDokumenter: React.FC = () => {
  const { journalposter, journalpostStatus } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="space-2">
      <Heading size="medium" level="2">
        {tekst('dokumenter.tittel')}
      </Heading>
      <DataViewer
        dataStatus={journalpostStatus}
        loaderTekst={tekst('dokumenter.henter')}
        alertTekst={tekst('dokumenter.galt')}
      >
        <DokumentVisning journalposter={journalposter} />
      </DataViewer>
    </VStack>
  );
};

const DokumentVisning: React.FC<{ journalposter: Journalpost[] }> = ({ journalposter }) => {
  const navigate = useNavigate();
  const { tekst } = useLocaleIntlContext();
  const harDokumenter = journalposter.length > 0;
  const href = `${process.env.PUBLIC_URL}/dokumentoversikt`;

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate('/dokumentoversikt');
  };

  if (!harDokumenter) {
    return (
      <Alert inline variant="info">
        {tekst('dokumenter.ingenFunnet')}
      </Alert>
    );
  }

  return (
    <>
      <StyledDokumentListe antall={3} journalposter={journalposter} />
      <Lenke href={href} onClick={handleClick}>
        {tekst('dokumenter.seAlle')}
      </Lenke>
    </>
  );
};

export default DineDokumenter;
