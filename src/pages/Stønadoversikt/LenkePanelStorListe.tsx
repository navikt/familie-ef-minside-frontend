import LenkePanelStor from '../../components/LenkePanelStor';
import { useApp } from '../../context/AppContext';
import { HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';

const LenkePanelStorListe: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <HStack gap="4">
      <LenkePanelStor
        tittel="Melde fra om endring"
        headingLevel="3"
        brødtekst="Her kan du melde fra om endringer som kan påvirke stønaden din."
        url={appEnv.endringsmeldingUrl}
        redirect="ekstern"
      />
      <LenkePanelStor
        tittel="Dine utbetalinger"
        headingLevel="3"
        brødtekst="Her kan du sjekke hva du har fått utbetalt fra NAV."
        url={appEnv.ettersendingUrl}
        redirect="ekstern"
      />
    </HStack>
  );
};

export default LenkePanelStorListe;
