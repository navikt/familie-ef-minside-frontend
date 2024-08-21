import styled from 'styled-components';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import { desktop, contentWidthDesktop, contentWidthMobile } from '../../utils/constants';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';
import React from 'react';
import DineDokumenter from './DineDokumenter';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import SideTittel from '../../components/SideTittel';
import DineStønader from './DineStønader';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

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

const Forside: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  const settBreadcrumbTitleMedTekst = appEnv.defaultBreadcrumbs.map((breadcrumb) => ({
    ...breadcrumb,
    title: tekst(breadcrumb.title),
  }));

  setBreadcrumbs(settBreadcrumbTitleMedTekst);

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel
          tittel={tekst('side.tittel')}
          underTittel={tekst('side.undertittel')}
          ikon={true}
        />
        <DineStønader />
      </Grid>
      <Stripe>
        <LenkePanelStorListe />
      </Stripe>
      <Grid>
        <DineDokumenter />
        <StønadPanelListe />
        <Snarveier />
      </Grid>
    </main>
  );
};

export default Forside;
