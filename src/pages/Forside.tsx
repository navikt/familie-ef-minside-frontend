import { Heading, HStack, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import LenkePanelLiten from '../components/LenkePanelLiten';
import { Søknad } from '../ikoner/Søknad';
import { Overgangsstønad } from '../ikoner/Overgangsstønad';
import { Barnetilsyn } from '../ikoner/Barnetilsyn';
import { Skolepenger } from '../ikoner/Skolepenger';
import LenkePanelStor from '../components/LenkePanelStor';
import { Ettersending } from '../ikoner/Ettersending';
import { Tannhjul } from '../ikoner/Tannhjul';
import { ABgSubtle } from '@navikt/ds-tokens/dist/tokens';
import SideTittel from '../components/SideTittel';
import { useApp } from '../context/AppContext';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const KomponentGruppe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
`;

const HovedInnhold = styled(OuterContainer)`
  background-color: ${ABgSubtle};
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
`;

const Forside: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <>
      <OuterContainer>
        <SideTittel />
      </OuterContainer>
      <HovedInnhold>
        <KomponentGruppe>
          <VStack gap="2">
            <Heading size={'medium'}>
              Melde fra eller ettersende dokumentasjon?
            </Heading>
            <HStack gap="4">
              <LenkePanelStor
                tittel="Endringsmelding"
                brødtekst="Ved endring i inntekt, aktivitet eller annet som påvirker din stønad."
                url={appEnv.endringsmeldingUrl}
                ikon={<Søknad farge="grønn" />}
              />
              <LenkePanelStor
                tittel="Ettersendelse"
                brødtekst="Her kan du ettersende dokumenter til din sak."
                url={appEnv.ettersendingUrl}
                ikon={<Ettersending />}
              />
            </HStack>
          </VStack>
          <VStack gap="2">
            <Heading size={'medium'}>Ønsker du å søke?</Heading>
            <HStack gap={'4'}>
              <LenkePanelLiten
                tittel="Søknad om overgangsstønad"
                ikon={<Søknad farge={'rød'} />}
                url={appEnv.søknadOvergangsstønadUrl}
              />
              <LenkePanelLiten
                tittel="Søknad om stønad til barnetilsyn"
                ikon={<Søknad farge={'rød'} />}
                url={appEnv.søknadBarnetilsynUrl}
              />
              <LenkePanelLiten
                tittel="Søknad om stønad til skolepenger"
                ikon={<Søknad farge={'rød'} />}
                url={appEnv.søknadSkolepengerUrl}
              />
            </HStack>
          </VStack>
        </KomponentGruppe>
      </HovedInnhold>
      <OuterContainer>
        <KomponentGruppe>
          <VStack gap="1">
            <Heading size={'medium'}>
              Ønsker du å lese mer om stønadene?
            </Heading>
            <HStack gap="4">
              <LenkePanelLiten
                tittel="Overgangsstønad"
                ikon={<Overgangsstønad />}
                url={appEnv.infoSideOvergangsstønadUrl}
              />
              <LenkePanelLiten
                tittel="Stønad til Barnetilsyn"
                ikon={<Barnetilsyn />}
                url={appEnv.infoSideBarnetilsynUrl}
              />
              <LenkePanelLiten
                tittel="Stønad til skolepenger"
                ikon={<Skolepenger />}
                url={appEnv.infoSideSkolepengerUrl}
              />
            </HStack>
          </VStack>
          <VStack gap="2">
            <Heading size={'medium'}>Snarveier</Heading>
            <LenkePanelLiten
              tittel="Saksbehandlingstider"
              ikon={<Tannhjul />}
              url={appEnv.saksbehandlingstiderUrl}
              kompaktVisning={true}
            />
          </VStack>
        </KomponentGruppe>
      </OuterContainer>
    </>
  );
};

export default Forside;
