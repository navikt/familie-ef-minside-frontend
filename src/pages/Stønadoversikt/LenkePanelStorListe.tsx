import LenkePanelStor from '../../components/LenkePanelStor';
import { useApp } from '../../context/AppContext';
import { HStack } from '@navikt/ds-react';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

const LenkePanelStorListe: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <HStack gap="4">
      <LenkePanelStor
        tittel={tekst('endre.tittel')}
        brødtekst={tekst('endre.brødtekst')}
        url={appEnv.endringsmeldingUrl}
        redirect="ekstern"
      />
      <LenkePanelStor
        tittel={tekst('utbetaling.tittel')}
        brødtekst={tekst('utbetaling.brødtekst')}
        url={appEnv.utbetalingsoversiktUrl}
        redirect="ekstern"
      />
    </HStack>
  );
};

export default LenkePanelStorListe;
