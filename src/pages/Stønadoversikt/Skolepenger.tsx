import { breadCrumbSkolepenger } from '../../utils/constants';
import React from 'react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import SideTittel from '../../components/SideTittel';
import { Grid, Stripe } from './Grid';

const Skolepenger: React.FC = () => {
  const { appEnv } = useApp();

  setBreadcrumbs([...appEnv.defaultBreadcrumbs, breadCrumbSkolepenger]);

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel />
      </Grid>
      <Stripe></Stripe>
    </main>
  );
};

export default Skolepenger;
