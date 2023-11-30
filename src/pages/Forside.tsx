import { Heading } from '@navikt/ds-react';
import styled from 'styled-components';
import LenkePanelLiten from '../components/LenkePanelLiten';
import { Søknad } from '../icons/Søknad';
import { Overgangsstønad } from '../icons/Overgangsstønad';
import { Barnetilsyn } from '../icons/Barnetilsyn';
import { Skolepenger } from '../icons/Skolepenger';
import LenkePanelStor from '../components/LenkePanelStor';
import { Ettersending } from '../icons/Ettersending';
import { Tannhjul } from '../icons/Tannhjul';
import { ABgSubtle } from '@navikt/ds-tokens/dist/tokens';
import SideTittel from '../components/SideTittel';
import { useApp } from '../context/AppContext';
import ResponsiveFlexbox from '../components/ResponsiveFlexbox';

const HovedInnhold = styled(ResponsiveFlexbox)`
  background-color: ${ABgSubtle};
`;

const Forside: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <>
      <ResponsiveFlexbox
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
      >
        <SideTittel />
      </ResponsiveFlexbox>
      <HovedInnhold
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
      >
        <ResponsiveFlexbox $gap="2rem" $direction="column">
          <ResponsiveFlexbox $gap="0.5rem" $direction="column">
            <Heading size={'medium'}>
              Melde fra eller ettersende dokumentasjon?
            </Heading>
            <ResponsiveFlexbox $gap="1rem">
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
            </ResponsiveFlexbox>
          </ResponsiveFlexbox>
          <ResponsiveFlexbox $gap="0.5rem" $direction="column">
            <Heading size={'medium'}>Ønsker du å søke?</Heading>
            <ResponsiveFlexbox $gap="1rem">
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
            </ResponsiveFlexbox>
          </ResponsiveFlexbox>
        </ResponsiveFlexbox>
      </HovedInnhold>
      <ResponsiveFlexbox
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
      >
        <ResponsiveFlexbox $gap="2rem" $direction="column">
          <ResponsiveFlexbox $gap="0.5rem" $direction="column">
            <Heading size={'medium'}>
              Ønsker du å lese mer om stønadene?
            </Heading>
            <ResponsiveFlexbox $gap="1rem">
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
            </ResponsiveFlexbox>
          </ResponsiveFlexbox>
          <ResponsiveFlexbox $gap="0.5rem" $direction="column">
            <Heading size={'medium'}>Snarveier</Heading>
            <LenkePanelLiten
              tittel="Saksbehandlingstider"
              ikon={<Tannhjul />}
              url={appEnv.saksbehandlingstiderUrl}
              kompaktVisning={true}
            />
          </ResponsiveFlexbox>
        </ResponsiveFlexbox>
      </ResponsiveFlexbox>
    </>
  );
};

export default Forside;
