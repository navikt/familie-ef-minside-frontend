import LenkePanelStor from '../../components/LenkePanelStor';
import { useApp } from '../../context/AppContext';
import { Heading, HStack, VStack } from '@navikt/ds-react';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

const LenkePanelStorListe: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="2">
      <Heading size="medium" level="2">
        {tekst('endreEllerEttersende.tittel')}
      </Heading>
      <HStack gap="4">
        <LenkePanelStor
          tittel={tekst('endre.tittel')}
          brødtekst={tekst('endre.brødtekst')}
          url={appEnv.endringsmeldingUrl}
          redirect="ekstern"
        />
        <LenkePanelStor
          tittel={tekst('ettersende.tittel')}
          brødtekst={tekst('ettersende.brødtekst')}
          url={appEnv.ettersendingUrl}
          redirect="ekstern"
        />
      </HStack>
    </VStack>
  );
};

export default LenkePanelStorListe;
