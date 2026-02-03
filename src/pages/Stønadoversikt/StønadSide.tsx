import React from 'react';
import { useApp } from '../../context/AppContext';
import { SideTittel } from '../../components/SideTittel';
import { Grid } from './Grid';
import LenkePanelStorListe from './LenkePanelStorListe';
import DataViewer from '../../components/DataViewer';
import DineVedtak from './DineVedtak';
import StønadTabell from './StønadTabell';
import { StønadType } from '../../interfaces/stønader';
import { utledStønadTekst } from './utils';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';
import { useSettBreadcrumbTekster } from '../../hooks/useBreadcrumbTekster';

interface Props {
  stønadType: StønadType;
}

const StønadSide: React.FC<Props> = ({ stønadType }) => {
  const { stønader, stønadStatus } = useApp();
  const { tekst } = useLocaleIntlContext();
  useSettBreadcrumbTekster(stønadType);

  const tittel = tekst(utledStønadTekst(stønadType));
  const loaderTekst = `Henter din ${stønadType}`;
  const alertTekst = `Noe gikk galt ved uthenting av ${tittel.toLocaleLowerCase()}.`;
  const stønad = stønader[`${stønadType}`];

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel tittel={tittel} />
        <DataViewer dataStatus={stønadStatus} loaderTekst={loaderTekst} alertTekst={alertTekst}>
          <StønadTabell stønad={stønad} stønadType={stønadType} />
        </DataViewer>
      </Grid>

      <LenkePanelStorListe />

      <Grid>
        <DineVedtak stønadType={stønadType} />
      </Grid>
    </main>
  );
};

export default StønadSide;
