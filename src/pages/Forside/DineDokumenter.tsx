import { VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import LenkePanelStor from '../../components/LenkePanelStor';
import styled from 'styled-components';

const LenkePanel = styled(LenkePanelStor)`
  cursor: pointer;
`;

const DineDokumenter: React.FC = () => (
  <VStack gap="2">
    <HeadingLevel2 size="small" level="2">
      Dine dokumenter
    </HeadingLevel2>
    <LenkePanel
      tittel="Dokumentoversikt"
      headingLevel="3"
      brødtekst="Her finner du dokumentene dine som gjelder stønad til enslig mor eller far"
      url={'/dokumentoversikt'}
      redirect="intern"
    />
  </VStack>
);

export default DineDokumenter;
