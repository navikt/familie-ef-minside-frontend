import { VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import LenkePanelStor from '../../components/LenkePanelStor';
import styled from 'styled-components';
import { useApp } from '../../context/AppContext';
import React from 'react';
import DataViewer from '../../components/DataViewer';

const LenkePanel = styled(LenkePanelStor)`
  cursor: pointer;
`;

const DineDokumenter: React.FC = () => {
  const { journalpostStatus } = useApp();

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
        <LenkePanel
          tittel="Dokumentoversikt"
          headingLevel="3"
          brødtekst="Her finner du dokumentene dine som gjelder stønad til enslig mor eller far"
          url={'/dokumentoversikt'}
          redirect="intern"
        />
      </DataViewer>
    </VStack>
  );
};

export default DineDokumenter;
