import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import { HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

const Snarveier: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        {tekst('snarveier.tittel')}
      </HeadingLevel2>
      <HStack gap="4">
        <LenkePanelMikro
          tittel={tekst('snarveier.saksbehandlingstider')}
          headingLevel="3"
          url={appEnv.saksbehandlingstiderUrl}
          redirect="ekstern"
        />
        <LenkePanelMikro
          tittel={tekst('snarveier.skrivTilOss')}
          headingLevel="3"
          url={appEnv.endringsmeldingUrl}
          redirect="ekstern"
        />
        <LenkePanelMikro
          tittel={tekst('snarveier.utbetalingsoversikt')}
          headingLevel="3"
          url={appEnv.utbetalingsoversiktUrl}
          redirect="ekstern"
        />
        <LenkePanelMikro
          tittel={tekst('snarveier.utvidetBarnetrygd')}
          headingLevel="3"
          url={appEnv.utvidetBarnetrygdUrl}
          redirect="ekstern"
        />
      </HStack>
    </VStack>
  );
};

export default Snarveier;
