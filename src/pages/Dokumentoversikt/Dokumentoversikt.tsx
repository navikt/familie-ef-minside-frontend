import React from 'react';
import styled from 'styled-components';
import {
  breadCrumbDokumentOversikt,
  contentWidthDesktop,
  contentWidthMobile,
  desktop,
} from '../../utils/constants';
import DokumentListe from './DokumentListe';
import { Alert, BodyShort, Heading, VStack } from '@navikt/ds-react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import DataViewer from '../../components/DataViewer';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

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

const DokumentOversikt: React.FC = () => {
  const { appEnv, journalposter, journalpostStatus } = useApp();
  const { tekst } = useLocaleIntlContext();

  const defaultBreadCrumbMedTekst = appEnv.defaultBreadcrumbs.map((breadcrumb) => ({
    ...breadcrumb,
    title: tekst(breadcrumb.title),
  }));

  const dokumentoversiktBreadcrumb = {
    ...breadCrumbDokumentOversikt,
    title: tekst(breadCrumbDokumentOversikt.title),
  };

  setBreadcrumbs([...defaultBreadCrumbMedTekst, dokumentoversiktBreadcrumb]);

  const harDokumenter = journalposter.length > 0;

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <DataViewer
        dataStatus={journalpostStatus}
        loaderTekst={tekst('dokumenter.henter')}
        alertTekst={tekst('dokumenter.galt')}
      >
        <Grid>
          <VStack gap="space-4">
            <Heading size="xlarge" level="1">
              {tekst('dokumentoversikt.tittel')}
            </Heading>
            <BodyShort>{tekst('dokumentoversikt.undertittel')}</BodyShort>
            {harDokumenter ? (
              <DokumentListe journalposter={journalposter} />
            ) : (
              <Alert inline variant="info">
                {tekst('dokumentoversikt.ingenFunnet')}
              </Alert>
            )}
          </VStack>
        </Grid>
      </DataViewer>
    </main>
  );
};

export default DokumentOversikt;
