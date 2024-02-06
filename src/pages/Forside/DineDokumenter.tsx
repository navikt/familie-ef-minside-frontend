import { Alert, Link, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import { useApp } from '../../context/AppContext';
import React from 'react';
import DataViewer from '../../components/DataViewer';
import { Journalpost } from '../../interfaces/journalpost';
import DokumentListe from '../Dokumentoversikt/DokumentListe';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

  return (
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        Dine dokumenter
      </HeadingLevel2>
      <DataViewer
        dataStatus={journalpostStatus}
        loaderTekst="Henter dokumenter"
        alertTekst="Noe gikk galt ved uthenting av dine dokumenter."
      >
        <DokumentVisning journalposter={journalposter} />
      </DataViewer>
    </VStack>
  );
};

const DokumentVisning: React.FC<{ journalposter: Journalpost[] }> = ({ journalposter }) => {
  const navigate = useNavigate();
  const harDokumenter = journalposter.length > 0;
  const href = `${process.env.PUBLIC_URL}/dokumentoversikt`;

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate('/dokumentoversikt');
  };

  if (!harDokumenter) {
    return (
      <Alert inline variant="info">
        Vi fant ingen dokumenter å vise som gjelder stønad til enslig mor eller far. Merk at det kun
        er dokumenter og meldinger du har sendt inn digitalt som vil vises her.
      </Alert>
    );
  }

  return (
    <>
      <StyledDokumentListe antall={3} journalposter={journalposter} />
      <Lenke href={href} onClick={handleClick}>
        Se alle dokumenter
      </Lenke>
    </>
  );
};

export default DineDokumenter;
