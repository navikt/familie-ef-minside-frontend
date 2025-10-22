import styles from './Forside.module.css';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';
import React from 'react';
import DineDokumenter from './DineDokumenter';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import { SideTittel } from '../../components/SideTittel';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';
import { Alert } from '@navikt/ds-react';

export const Forside: React.FC = () => {
  const { appEnv } = useApp();
  const { tekst } = useLocaleIntlContext();

  const settBreadcrumbTitleMedTekst = appEnv.defaultBreadcrumbs.map((breadcrumb) => ({
    ...breadcrumb,
    title: tekst(breadcrumb.title),
  }));

  setBreadcrumbs(settBreadcrumbTitleMedTekst);

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <section className={styles.grid}>
        <SideTittel
          tittel={tekst('side.tittel')}
          underTittel={tekst('side.undertittel')}
          ikon={true}
        />
        <Alert variant="warning">
          Vi oppdaterer våre systemer. Mens dette pågår vil det ikke være mulig å se informasjon om
          dine stønader. Vi beklager ulempen dette medfører.
        </Alert>
      </section>
      <section className={styles.grid} style={{ backgroundColor: ASurfaceActionSubtle }}>
        <LenkePanelStorListe />
      </section>
      <section className={styles.grid}>
        <DineDokumenter />
        <StønadPanelListe />
        <Snarveier />
      </section>
    </main>
  );
};
