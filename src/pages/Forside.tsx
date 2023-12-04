import styled from 'styled-components';
import LenkePanelLiten from '../components/LenkePanelLiten';
import { Søknad } from '../icons/Søknad';
import { Overgangsstønad } from '../icons/Overgangsstønad';
import { Barnetilsyn } from '../icons/Barnetilsyn';
import { Skolepenger } from '../icons/Skolepenger';
import LenkePanelStor from '../components/LenkePanelStor';
import { Ettersending } from '../icons/Ettersending';
import { Tannhjul } from '../icons/Tannhjul';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import SideTittel from '../components/SideTittel';
import { useApp } from '../context/AppContext';
import ResponsiveFlexbox from '../components/ResponsiveFlexbox';
import ResponsiveHeading from '../components/ResponsiveHeading';
import { smallSkjerm } from '../utils';

const HovedInnhold = styled(ResponsiveFlexbox)`
  background-color: ${ASurfaceActionSubtle};

  @media (max-width: ${smallSkjerm}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Forside: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <>
      <ResponsiveFlexbox $align="center" $justify="center" $padding="2rem">
        <SideTittel />
      </ResponsiveFlexbox>
      <HovedInnhold
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
      >
        <ResponsiveFlexbox $gap="0.5rem" $direction="column">
          <ResponsiveHeading size={'medium'}>
            Melde fra eller ettersende dokumentasjon?
          </ResponsiveHeading>
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
      </HovedInnhold>
      <ResponsiveFlexbox
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
      >
        <ResponsiveFlexbox $gap="0.5rem" $direction="column">
          <ResponsiveHeading size={'medium'}>
            Ønsker du å søke?
          </ResponsiveHeading>
          <ResponsiveFlexbox $gap="1rem">
            <LenkePanelLiten
              tittel="Søknad om overgangsstønad"
              ikon={<Overgangsstønad width={52} height={52} />}
              url={appEnv.søknadOvergangsstønadUrl}
            />
            <LenkePanelLiten
              tittel="Søknad om stønad til barnetilsyn"
              ikon={<Barnetilsyn width={52} height={52} />}
              url={appEnv.søknadBarnetilsynUrl}
            />
            <LenkePanelLiten
              tittel="Søknad om stønad til skolepenger"
              ikon={<Skolepenger width={52} height={52} />}
              url={appEnv.søknadSkolepengerUrl}
            />
          </ResponsiveFlexbox>
        </ResponsiveFlexbox>
        <ResponsiveFlexbox $gap="2rem" $direction="column">
          <ResponsiveFlexbox $gap="0.5rem" $direction="column">
            <ResponsiveHeading size={'medium'}>
              Ønsker du å lese mer om stønadene?
            </ResponsiveHeading>
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
            <ResponsiveHeading size={'medium'}>Snarveier</ResponsiveHeading>
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
