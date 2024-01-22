import { HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import LenkePanelStor from '../../components/LenkePanelStor';

const DineDokumenter: React.FC = () => (
  <VStack gap="2">
    <HeadingLevel2 size="small" level="2">
      Dine dokumenter
    </HeadingLevel2>
    <HStack gap="4">
      <LenkePanelStor
        tittel="Dokumentoversikt"
        headingLevel="3"
        brødtekst="Her finner du dokumentene dine som gjelder stønad til enslig mor eller far"
        url={'/dokumentoversikt'}
        redirect="intern"
      />
    </HStack>
  </VStack>
);

export default DineDokumenter;
