import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import ResponsiveHeading from '../../components/ResponsiveHeading';
import LenkePanelMikro from '../../components/LenkePanelMikro';
import { useApp } from '../../context/AppContext';
import styled from 'styled-components';
import { skjermInnholdBredde, fullSkjermbredde996 } from '../../utils';

const Container = styled(ResponsiveFlexbox)`
  @media (min-width: ${fullSkjermbredde996}px) {
    width: ${skjermInnholdBredde};
  }
`;

const Snarveier: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <Container $gap="2rem" $direction="column">
      <ResponsiveFlexbox $gap="0.5rem" $direction="column">
        <ResponsiveHeading size={'medium'} level="2">
          Andre snarveier
        </ResponsiveHeading>
        <ResponsiveFlexbox $gap="1rem">
          <LenkePanelMikro
            tittel="Saksbehandlingstider"
            headingLevel="3"
            url={appEnv.saksbehandlingstiderUrl}
          />
          <LenkePanelMikro tittel="Skriv til oss" headingLevel="3" url={''} />
        </ResponsiveFlexbox>
      </ResponsiveFlexbox>
    </Container>
  );
};

export default Snarveier;
