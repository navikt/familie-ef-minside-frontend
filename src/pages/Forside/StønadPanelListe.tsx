import { useApp } from '../../context/AppContext';
import { Overgangsstønad } from '../../icons/Overgangsstønad';
import { Barnetilsyn } from '../../icons/Barnetilsyn';
import { Skolepenger } from '../../icons/Skolepenger';
import StønadPanel from '../../components/StønadPanel';
import { Heading, HStack, VStack } from '@navikt/ds-react';
import { Device } from '../../hooks/useResponsive';

const StønadPanelListe: React.FC = () => {
  const { appEnv, currentDevice } = useApp();

  const tittelSize = currentDevice === Device.MOBILE ? 'small' : 'medium';

  return (
    <VStack gap="2">
      <Heading size={tittelSize} level="2">
        Ønsker du å søke?
      </Heading>
      <HStack gap="4">
        <StønadPanel
          tittel="Overgangsstønad"
          headingLevel="3"
          brødtekst="Sikrer deg inntekt i inntil 3 år når du har minst 60 prosent av den daglige omsorgen for barn under 8 år."
          ikon={<Overgangsstønad width={44} height={44} />}
          lenkeTekst="Les mer om overgangsstønad"
          lenkeUrl={appEnv.infoSideOvergangsstønadUrl}
          knappTekst="Søk overgangsstønad"
          knappUrl={appEnv.søknadOvergangsstønadUrl}
        />
        <StønadPanel
          tittel="Stønad til barnetilsyn"
          headingLevel="3"
          brødtekst="Dekker deler av utgiftene til barnehage, skolefritidsordning (SFO) eller dagmamma når du er alene med barn og er i arbeid."
          ikon={<Barnetilsyn width={44} height={44} />}
          lenkeTekst="Les mer om stønad til barnetilsyn"
          lenkeUrl={appEnv.infoSideBarnetilsynUrl}
          knappTekst="Søk stønad til barnetilsyn"
          knappUrl={appEnv.søknadBarnetilsynUrl}
        />
        <StønadPanel
          tittel="Stønad til skolepenger"
          headingLevel="3"
          brødtekst="Dekker utgifter til studieavgift, semesteravgift og eksamensgebyr når du tar utdanning og er alene med barn."
          ikon={<Skolepenger width={44} height={44} />}
          lenkeTekst="Les mer om stønad til skolepenger"
          lenkeUrl={appEnv.infoSideSkolepengerUrl}
          knappTekst="Søk stønad til skolepenger"
          knappUrl={appEnv.søknadSkolepengerUrl}
        />
      </HStack>
    </VStack>
  );
};

export default StønadPanelListe;
