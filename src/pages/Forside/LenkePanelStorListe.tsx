import LenkePanelStor from '../../components/LenkePanelStor';
import { Søknad } from '../../icons/Søknad';
import { Ettersending } from '../../icons/Ettersending';
import { useApp } from '../../context/AppContext';
import { HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';

const LenkePanelStorListe: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        Skal du melde fra om endringer eller ettersende dokumentasjon?
      </HeadingLevel2>
      <HStack gap="4">
        <LenkePanelStor
          tittel="Melde fra om endring"
          headingLevel="3"
          brødtekst="Her kan du melde fra om endringer som kan påvirke stønaden din."
          url={appEnv.endringsmeldingUrl}
          ikon={<Søknad color="grønn" />}
        />
        <LenkePanelStor
          tittel="Ettersende dokumentasjon"
          headingLevel="3"
          brødtekst="Her kan du ettersende dokumenter til saken din."
          url={appEnv.ettersendingUrl}
          ikon={<Ettersending />}
        />
      </HStack>
    </VStack>
  );
};

export default LenkePanelStorListe;
