import { useApp } from '../../context/AppContext';
import { Overgangsstønad } from '../../icons/Overgangsstønad';
import { Barnetilsyn } from '../../icons/Barnetilsyn';
import { Skolepenger } from '../../icons/Skolepenger';
import StønadPanel from '../../components/StønadPanel';
import { Heading, HStack, VStack } from '@navikt/ds-react';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

const StønadPanelListe: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="2">
      <Heading size="medium" level="2">
        {tekst('søke.tittel')}
      </Heading>
      <HStack gap="4">
        <StønadPanel
          tittel={tekst('overgangsstønad.tittel')}
          brødtekst={tekst('overgangsstønad.brødtekst')}
          ikon={<Overgangsstønad width={44} height={44} />}
          lenkeTekst={tekst('overgangsstønad.lenkeTekst')}
          lenkeUrl={appEnv.infoSideOvergangsstønadUrl}
          knappTekst={tekst('overgangsstønad.knapp')}
          knappUrl={appEnv.søknadOvergangsstønadUrl}
        />
        <StønadPanel
          tittel={tekst('barnetilsyn.tittel')}
          brødtekst={tekst('barnetilsyn.brødtekst')}
          ikon={<Barnetilsyn width={44} height={44} />}
          lenkeTekst={tekst('barnetilsyn.lenkeTekst')}
          lenkeUrl={appEnv.infoSideBarnetilsynUrl}
          knappTekst={tekst('barnetilsyn.knapp')}
          knappUrl={appEnv.søknadBarnetilsynUrl}
        />
        <StønadPanel
          tittel={tekst('skolepenger.tittel')}
          brødtekst={tekst('skolepenger.brødtekst')}
          ikon={<Skolepenger width={44} height={44} />}
          lenkeTekst={tekst('skolepenger.lenkeTekst')}
          lenkeUrl={appEnv.infoSideSkolepengerUrl}
          knappTekst={tekst('skolepenger.knapp')}
          knappUrl={appEnv.søknadSkolepengerUrl}
        />
      </HStack>
    </VStack>
  );
};

export default StønadPanelListe;
