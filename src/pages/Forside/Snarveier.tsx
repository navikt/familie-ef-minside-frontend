import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import ResponsiveHeading from '../../components/ResponsiveHeading';
import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import styled from 'styled-components';
import { skjermBreddeInhhold, skjermBreddeMax } from '../../utils';

const Container = styled(ResponsiveFlexbox)`
  @media (min-width: ${skjermBreddeMax}px) {
    width: ${skjermBreddeInhhold};
  }
`;

const Snarveier: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <Container $gap="2rem" $direction="column">
      <ResponsiveFlexbox $gap="0.5rem" $direction="column">
        <ResponsiveHeading size={'medium'} level="2" $responsive={true}>
          Andre snarveier
        </ResponsiveHeading>
        <ResponsiveFlexbox $gap="1rem" $responsive={true}>
          <LenkePanelMikro
            tittel="Saksbehandlingstider"
            headingLevel="3"
            url={appEnv.saksbehandlingstiderUrl}
          />
          <LenkePanelMikro
            tittel="Skriv til oss"
            headingLevel="3"
            url={appEnv.endringsmeldingUrl}
          />
        </ResponsiveFlexbox>
      </ResponsiveFlexbox>
    </Container>
  );
};

export default Snarveier;