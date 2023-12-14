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
import { useEffect } from 'react';
import { logBesøk } from '../../amplitude/amplitude';

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

const TittelContainer = styled.div`
  max-width: ${skjermBreddeInhhold};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Forside: React.FC = () => {
  useEffect(() => {
    logBesøk('Forside');
  }, []);

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <ResponsiveFlexbox $justify="center" $padding="2.5rem">
        <TittelContainer>
          <ForsideTittel />
          <GuidePanel>
            Hei, Ola Nordmann. Denne siden er under arbeid og du vil foreløpig
            ikke finne informasjon om din sak. Det du finner er relevante
            lenker. Denne siden er under arbeid og du vil foreløpig ikke finne
            infomrasjon om din sak. Det du finner er relevante lenker.
          </GuidePanel>
        </TittelContainer>
      </ResponsiveFlexbox>
      <HovedInnhold
        $justify="center"
        $padding="2rem"
        $paddingTop="2.5rem"
        $paddingBottom="2.5rem"
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
