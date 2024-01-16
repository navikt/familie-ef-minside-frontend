import styled from 'styled-components';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import SideTittel from '../../components/SideTittel';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import {
  skjermBreddeMax,
  skjermBreddeInhhold,
  skjermBreddeMobil,
  breddeGuidePanelIkon,
} from '../../utils';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';
import { GuidePanel } from '@navikt/ds-react';
import { useApp } from '../../context/AppContext';
import { Device } from '../../hooks/useResponsive';

const HovedInnhold = styled(ResponsiveFlexbox)`
  background-color: ${ASurfaceActionSubtle};

  @media (max-width: ${skjermBreddeMax}px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ForsideTittel = styled(SideTittel)`
  @media (min-width: ${skjermBreddeMobil}px) {
    padding-left: ${breddeGuidePanelIkon / 2}px;
  }
`;

const TittelContainer = styled.div<{ $gap: string }>`
  max-width: ${skjermBreddeInhhold};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
`;

const Forside: React.FC = () => {
  const { currentDevice, personData } = useApp();

  const panelTekstPrefix = personData.visningsnavn
    ? `Hei, ${personData.visningsnavn}. `
    : '';
  const tittelContainerGap = currentDevice === Device.MOBILE ? '1rem' : '2rem';

  const HovedInnholdPadding =
    currentDevice === Device.MOBILE ? '1.5rem' : '2.5rem';

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <ResponsiveFlexbox
        $justify="center"
        $padding="1rem"
        $paddingBottom="2rem"
      >
        <TittelContainer $gap={tittelContainerGap}>
          <ForsideTittel />
          <GuidePanel>
            {`${panelTekstPrefix}Denne siden er under arbeid, og du
            vil foreløpig ikke finne informasjon om saken din her nå.`}
          </GuidePanel>
        </TittelContainer>
      </ResponsiveFlexbox>
      <HovedInnhold
        $justify="center"
        $padding="2rem"
        $paddingTop={HovedInnholdPadding}
        $paddingBottom={HovedInnholdPadding}
      >
        <LenkePanelStorListe />
      </HovedInnhold>
      <ResponsiveFlexbox
        $gap="2.5rem"
        $direction="column"
        $align="center"
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
