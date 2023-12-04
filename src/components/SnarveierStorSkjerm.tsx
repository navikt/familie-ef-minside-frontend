import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import ResponsiveHeading from './ResponsiveHeading';
import LenkePanelMikro from './LenkePanelMikro';
import { useApp } from '../context/AppContext';
import { smallSkjerm970 } from '../utils';

const Container = styled(ResponsiveFlexbox)`
  @media (max-width: ${smallSkjerm970}px) {
    display: none;
  }
`;

const SnarveierStorSkjerm: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <Container $gap="2rem" $direction="column">
      <ResponsiveFlexbox $gap="0.5rem" $direction="column">
        <ResponsiveHeading size={'medium'}>
          Ønsker du å lese mer om stønadene?
        </ResponsiveHeading>
        <ResponsiveFlexbox $gap="1rem">
          <LenkePanelMikro
            tittel="Overgangsstønad"
            url={appEnv.infoSideOvergangsstønadUrl}
          />
          <LenkePanelMikro
            tittel="Stønad til Barnetilsyn"
            url={appEnv.infoSideBarnetilsynUrl}
          />
          <LenkePanelMikro
            tittel="Stønad til skolepenger"
            url={appEnv.infoSideSkolepengerUrl}
          />
        </ResponsiveFlexbox>
      </ResponsiveFlexbox>
      <ResponsiveFlexbox $gap="0.5rem" $direction="column">
        <ResponsiveHeading size={'medium'}>Snarveier</ResponsiveHeading>
        <LenkePanelMikro
          tittel="Saksbehandlingstider"
          url={appEnv.saksbehandlingstiderUrl}
        />
      </ResponsiveFlexbox>
    </Container>
  );
};

export default SnarveierStorSkjerm;
