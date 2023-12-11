import styled from 'styled-components';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import SideTittel from '../../components/SideTittel';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import { fullSkjermbredde996 } from '../../utils';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';

const HovedInnhold = styled(ResponsiveFlexbox)`
  background-color: ${ASurfaceActionSubtle};

  @media (max-width: ${fullSkjermbredde996}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Forside: React.FC = () => {
  return (
    <main id="maincontent" tabIndex={-1} role="main">
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
        <LenkePanelStorListe />
      </HovedInnhold>
      <ResponsiveFlexbox
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
      >
        <StønadPanelListe />
        <Snarveier />
      </ResponsiveFlexbox>
    </main>
  );
};

export default Forside;
