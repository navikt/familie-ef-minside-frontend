import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import { Heading, HStack, VStack } from '@navikt/ds-react';
import { Device } from '../../hooks/useResponsive';

const Snarveier: React.FC = () => {
  const { appEnv, currentDevice } = useApp();

  const tittelSize = currentDevice === Device.MOBILE ? 'small' : 'medium';

  return (
    <VStack gap="2">
      <Heading size={tittelSize} level="2" $responsive={true}>
        Andre snarveier
      </Heading>
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
