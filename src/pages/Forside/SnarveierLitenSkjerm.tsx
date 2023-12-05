import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import ResponsiveHeading from '../../components/ResponsiveHeading';
import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import styled from 'styled-components';
import { smallSkjerm971 } from '../../utils';

const Container = styled(ResponsiveFlexbox)`
  @media (min-width: ${smallSkjerm971}px) {
    display: none;
  }
`;

const SnarveierLitenSkjerm: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <Container $gap="0.5rem" $direction="column">
      <ResponsiveHeading size={'medium'} level="2">
        Snarveier
      </ResponsiveHeading>
      <ResponsiveFlexbox $gap="1rem">
        <LenkePanelMikro
          tittel="Overgangsstønad"
          headingLevel="3"
          url={appEnv.infoSideOvergangsstønadUrl}
        />
        <LenkePanelMikro
          tittel="Stønad til Barnetilsyn"
          headingLevel="3"
          url={appEnv.infoSideBarnetilsynUrl}
        />
        <LenkePanelMikro
          tittel="Stønad til skolepenger"
          headingLevel="3"
          url={appEnv.infoSideSkolepengerUrl}
        />
        <LenkePanelMikro
          tittel="Saksbehandlingstider"
          headingLevel="3"
          url={appEnv.saksbehandlingstiderUrl}
        />
      </ResponsiveFlexbox>
    </Container>
  );
};

export default SnarveierLitenSkjerm;
