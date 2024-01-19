import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import { HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';

const Snarveier: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <VStack gap="2">
      <HeadingLevel2 level="2">Andre snarveier</HeadingLevel2>
      <HStack gap="4">
        <LenkePanelMikro
          tittel="Saksbehandlingstider"
          headingLevel="3"
          url={appEnv.saksbehandlingstiderUrl}
        />
        <LenkePanelMikro
          tittel="Skriv til oss"
          headingLevel="3"
          url={appEnv.endringsmeldingUrl}
        />
      </HStack>
    </VStack>
  );
};

export default Snarveier;
