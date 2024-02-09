import { breadCrumbBarnetilsyn } from '../../utils/constants';
import React from 'react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import SideTittel from '../../components/SideTittel';
import { Grid, Stripe } from './Grid';

const Barnetilsyn: React.FC = () => {
  const { appEnv } = useApp();

  setBreadcrumbs([...appEnv.defaultBreadcrumbs, breadCrumbBarnetilsyn]);

  const tittel = 'Din stønad til barnetilsyn';

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel tittel={tittel} />
      </Grid>
      <Stripe></Stripe>
    </main>
  );
};

export default Barnetilsyn;
