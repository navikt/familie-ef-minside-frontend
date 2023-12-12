import styled from 'styled-components';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import SideTittel from '../../components/SideTittel';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import { fullSkjermbredde996, skjermInnholdBredde } from '../../utils';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';
import { GuidePanel } from '@navikt/ds-react';

const HovedInnhold = styled(ResponsiveFlexbox)`
  background-color: ${ASurfaceActionSubtle};

  @media (max-width: ${fullSkjermbredde996}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const StyledGuidePanel = styled(GuidePanel)`
  max-width: ${skjermInnholdBredde};
`;

const Forside: React.FC = () => {
  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <ResponsiveFlexbox
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
      >
        <SideTittel />
        <StyledGuidePanel>
          Hei, Ola Nordmann. Denne siden er under arbeid og du vil foreløpig
          ikke finnes informasjon om din sak. Det du finner er relevante lenker.
          Denne siden er under arbeid og du vil foreløpig ikke finne infomrasjon
          om din sak. Det du finner er relevante lenker.
        </StyledGuidePanel>
      </ResponsiveFlexbox>
      <HovedInnhold
        $gap="2rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2.5rem"
      >
        <LenkePanelStorListe />
      </HovedInnhold>
      <ResponsiveFlexbox
        $gap="2.5rem"
        $direction="column"
        $align="center"
        $justify="center"
        $padding="2rem"
        $paddingTop="2.5rem"
        $paddingBottom="2.5rem"
      >
        <StønadPanelListe />
        <Snarveier />
      </ResponsiveFlexbox>
    </main>
  );
};

export default Forside;
