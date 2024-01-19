import styled from 'styled-components';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import { desktop, contentWidthDesktop, contentWidthMobile } from '../../utils';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';
import React from 'react';
import SideHeader from './SideHeader';

const Grid = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, ${contentWidthMobile}px);
  row-gap: 1rem;
  justify-content: center;

  padding: 1rem 0.5rem;

  @media (min-width: ${desktop}px) {
    grid-template-columns: minmax(auto, ${contentWidthDesktop}px);
    row-gap: 2.5rem;
    padding: 2rem 0.5rem;
  }
`;

const Stripe = styled(Grid)`
  background-color: ${ASurfaceActionSubtle};
`;

const Forside: React.FC = () => (
  <main id="maincontent" tabIndex={-1} role="main">
    <Grid>
      <SideHeader />
    </Grid>
    <Stripe>
      <LenkePanelStorListe />
    </Stripe>
    <Grid>
      <StønadPanelListe />
      <Snarveier />
    </Grid>
  </main>
);

export default Forside;
