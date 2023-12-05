import styled from 'styled-components';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import SideTittel from '../../components/SideTittel';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import { smallSkjerm971 } from '../../utils';
import SnarveierLitenSkjerm from './SnarveierLitenSkjerm';
import SnarveierStorSkjerm from './SnarveierStorSkjerm';
import LenkePanelStorListe from './LenkePanelStorListe';
import LenkePanelLitenListe from './LenkePanelLitenListe';

const HovedInnhold = styled(ResponsiveFlexbox)`
  background-color: ${ASurfaceActionSubtle};

  @media (max-width: ${smallSkjerm971}) {
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
        <LenkePanelLitenListe />
        <SnarveierStorSkjerm />
        <SnarveierLitenSkjerm />
      </ResponsiveFlexbox>
    </main>
  );
};

export default Forside;
