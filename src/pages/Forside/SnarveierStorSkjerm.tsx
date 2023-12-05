import styled from 'styled-components';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import ResponsiveHeading from '../../components/ResponsiveHeading';
import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import { smallSkjerm970 } from '../../utils';

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
        <ResponsiveHeading size={'medium'} level="2">
          Ønsker du å lese mer om stønadene?
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
        </ResponsiveFlexbox>
      </ResponsiveFlexbox>
      <ResponsiveFlexbox $gap="0.5rem" $direction="column">
        <ResponsiveHeading size={'medium'} level="2">
          Snarveier
        </ResponsiveHeading>
        <LenkePanelMikro
          tittel="Saksbehandlingstider"
          headingLevel="3"
          url={appEnv.saksbehandlingstiderUrl}
        />
      </ResponsiveFlexbox>
    </Container>
  );
};

export default SnarveierStorSkjerm;
