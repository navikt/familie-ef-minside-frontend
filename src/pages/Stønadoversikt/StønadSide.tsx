import React from 'react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import SideTittel from '../../components/SideTittel';
import { Grid, Stripe } from './Grid';
import LenkePanelStorListe from './LenkePanelStorListe';
import DataViewer from '../../components/DataViewer';
import DineVedtak from './DineVedtak';
import StønadTabell from './StønadTabell';
import { StønadType } from '../../interfaces/stønader';
import { utledBreadCrumb, utledSidetittel } from './utils';

interface Props {
  stønadType: StønadType;
}

const StønadSide: React.FC<Props> = ({ stønadType }) => {
  const { appEnv, stønader, stønadStatus } = useApp();

  const breadCrumb = utledBreadCrumb(stønadType);
  const tittel = utledSidetittel(stønadType);
  const loaderTekst = `Henter din ${stønadType}`;
  const alertTekst = `Noe gikk galt ved uthenting av ${tittel.toLocaleLowerCase()}.`;
  const stønad = stønader[`${stønadType}`];

  setBreadcrumbs([...appEnv.defaultBreadcrumbs, breadCrumb]);

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel tittel={tittel} />
        <DataViewer dataStatus={stønadStatus} loaderTekst={loaderTekst} alertTekst={alertTekst}>
          <StønadTabell stønad={stønad} stønadType={stønadType} />
        </DataViewer>
      </Grid>
      <Stripe>
        <LenkePanelStorListe />
      </Stripe>
      <Grid>
        <DineVedtak stønadType={stønadType} />
      </Grid>
    </main>
  );
};

export default StønadSide;
