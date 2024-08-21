import LenkePanelStor from '../../components/LenkePanelStor';
import { useApp } from '../../context/AppContext';
import { HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

const LenkePanelStorListe: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        {tekst('endreEllerEttersende.tittel')}
      </HeadingLevel2>
      <HStack gap="4">
        <LenkePanelStor
          tittel={tekst('endre.tittel')}
          headingLevel="3"
          brødtekst={tekst('endre.brødtekst')}
          url={appEnv.endringsmeldingUrl}
          redirect="ekstern"
        />
        <LenkePanelStor
          tittel={tekst('ettersende.tittel')}
          headingLevel="3"
          brødtekst={tekst('ettersende.brødtekst')}
          url={appEnv.ettersendingUrl}
          redirect="ekstern"
        />
      </HStack>
    </VStack>
  );
};

export default LenkePanelStorListe;
