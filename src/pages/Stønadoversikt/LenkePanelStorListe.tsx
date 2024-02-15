import LenkePanelStor from '../../components/LenkePanelStor';
import { useApp } from '../../context/AppContext';
import { HStack } from '@navikt/ds-react';

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
        url={appEnv.utbetalingsoversiktUrl}
        redirect="ekstern"
      />
    </HStack>
  );
};

export default LenkePanelStorListe;
