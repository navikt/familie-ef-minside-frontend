import styles from './Forside.module.css';
import Snarveier from './Snarveier';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadPanelListe from './StønadPanelListe';
import React from 'react';
import DineDokumenter from './DineDokumenter';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import { SideTittel } from '../../components/SideTittel';
import DineStønader from './DineStønader';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';
import { InfoNyRegelverksendring } from './InfoNyRegelverksendring';

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
        <InfoNyRegelverksendring />

        <DineStønader />
      </section>
      <section className={styles.grid}>
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
