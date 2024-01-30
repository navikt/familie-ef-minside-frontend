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
import { VStack } from '@navikt/ds-react';
import { useHentDokumenter } from '../../hooks/useHentDokumenter';

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
  const { hentDokumenter, dokumenter } = useHentDokumenter();

  useEffect(() => {
    hentDokumenter();
  }, [hentDokumenter]);

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <VStack gap="5">
          <div>
            <HeadingLevel1 size="medium" level="1">
              Dokumentoversikt
            </HeadingLevel1>
            <UnderTittel>
              Overgangsstønad, stønad til barnetilsyn og stønad til skolepenger
            </UnderTittel>
          </div>
          <UnderTittel spacing>
            Her finner du alle dine journalførte dokumenter relatert til stønad
            til enslig mor eller far. Det kan ta noe tid fra du har sendt inn
            dokumentene til de er synlige i oversikten.
          </UnderTittel>
        </VStack>
        {dokumenter.map((dokument) => (
          <Dokument key={dokument.journalpostId} dokument={dokument} />
        ))}
      </Grid>
    </main>
  );
};

export default DokumentOversikt;