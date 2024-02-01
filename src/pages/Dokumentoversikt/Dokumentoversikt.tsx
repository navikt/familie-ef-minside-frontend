import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  contentWidthDesktop,
  contentWidthMobile,
  desktop,
} from '../../utils/constants';
import Dokument from './Dokument';
import {
  HeadingLevel1,
  UnderTittel,
} from '../../components/ResponsiveHeadinger';
import { Alert, VStack } from '@navikt/ds-react';
import {
  JournalpostStatus,
  useHentJournalposter,
} from '../../hooks/useHentJournalposter';
import DataLoader from '../../components/DataLoader';

const Grid = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, ${contentWidthMobile}px);
  justify-content: center;

  padding: 1rem 0.5rem;

  @media (min-width: ${desktop}px) {
    grid-template-columns: minmax(auto, ${contentWidthDesktop}px);
    padding: 2rem 0.5rem;
  }
`;

const InfoStripe = styled(Alert)`
  margin-top: 1rem;
`;

const DokumentOversikt: React.FC = () => {
  const { journalpostStatus, hentJournalposter, journalposter } =
    useHentJournalposter();

  useEffect(() => {
    hentJournalposter();
  }, [hentJournalposter]);

  if (journalpostStatus === JournalpostStatus.HENTER) {
    return <DataLoader size="xlarge" title="Henter dokumenter" />;
  }
  if (journalpostStatus === JournalpostStatus.FEILET) {
    return (
      <main id="maincontent" tabIndex={-1} role="main">
        <Alert variant="error">
          Noe gikk galt ved uthenting av dine dokumenter.
        </Alert>
      </main>
    );
  }

  const harDokumenter = journalposter.length > 0;

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <VStack gap="5">
          <HeadingLevel1 size="medium" level="1">
            Dokumentoversikt
          </HeadingLevel1>
          <UnderTittel spacing>
            Her finner du dokumentene dine som gjelder stønad til enslig mor
            eller far. Det kan ta noe tid fra du har sendt inn dokumentene til
            de vises i oversikten.
          </UnderTittel>
        </VStack>
        {journalposter.map((dokument) => (
          <Dokument key={dokument.journalpostId} dokument={dokument} />
        ))}
        {!harDokumenter && (
          <InfoStripe inline variant="info">
            Vi fant ingen dokumenter å vise.
          </InfoStripe>
        )}
      </Grid>
    </main>
  );
};

export default DokumentOversikt;
