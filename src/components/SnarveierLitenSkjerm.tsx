import ResponsiveFlexbox from './ResponsiveFlexbox';
import ResponsiveHeading from './ResponsiveHeading';
import LenkePanelMikro from './LenkePanelMikro';
import { useApp } from '../context/AppContext';
import styled from 'styled-components';
import { smallSkjerm971 } from '../utils';

const Container = styled(ResponsiveFlexbox)`
  @media (min-width: ${smallSkjerm971}px) {
    display: none;
  }
`;

const SnarveierLitenSkjerm: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <Container $gap="0.5rem" $direction="column">
      <ResponsiveHeading size={'medium'}>Snarveier</ResponsiveHeading>
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
        <LenkePanelMikro
          tittel="Saksbehandlingstider"
          url={appEnv.saksbehandlingstiderUrl}
        />
      </ResponsiveFlexbox>
    </Container>
  );
};

export default SnarveierLitenSkjerm;
