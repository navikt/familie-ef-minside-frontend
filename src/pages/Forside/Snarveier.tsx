import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import { Heading, HStack, VStack } from '@navikt/ds-react';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

const Snarveier: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="2">
      <Heading size="medium" level="2">
        {tekst('snarveier.tittel')}
      </Heading>
      <HStack gap="4">
        <LenkePanelMikro
          tittel={tekst('snarveier.saksbehandlingstider')}
          url={appEnv.saksbehandlingstiderUrl}
          redirect="ekstern"
        />
        <LenkePanelMikro
          tittel={tekst('snarveier.skrivTilOss')}
          url={appEnv.endringsmeldingUrl}
          redirect="ekstern"
        />
        <LenkePanelMikro
          tittel={tekst('snarveier.utbetalingsoversikt')}
          url={appEnv.utbetalingsoversiktUrl}
          redirect="ekstern"
        />
        <LenkePanelMikro
          tittel={tekst('snarveier.utvidetBarnetrygd')}
          url={appEnv.utvidetBarnetrygdUrl}
          redirect="ekstern"
        />
        <LenkePanelMikro
          tittel={tekst('snarveier.klage')}
          url={appEnv.klageUrl}
          redirect="ekstern"
        />
      </HStack>
    </VStack>
  );
};

export default Snarveier;
