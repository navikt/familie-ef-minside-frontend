import styled from 'styled-components';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import { desktop, contentWidthDesktop, contentWidthMobile } from '../../utils';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';
import React from 'react';
import SideHeader from './SideHeader';

const Forside: React.FC = () => {
  const Grid = styled.section`
    display: grid;
    grid-template-columns: minmax(auto, ${contentWidthMobile}px);
    row-gap: 2.5rem;
    justify-content: center;

    padding: 2rem 0.5rem;

    @media (min-width: ${desktop}px) {
      grid-template-columns: minmax(auto, ${contentWidthDesktop}px);
    }
  `;

  const Stripe = styled(Grid)`
    background-color: ${ASurfaceActionSubtle};
  `;

  return (
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
};

export default Forside;
