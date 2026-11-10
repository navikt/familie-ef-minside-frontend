import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import type React from 'react';
import { SideTittel } from '../../components/SideTittel';
import { useApp } from '../../context/useApp';
import { useLocaleIntlContext } from '../../context/useLocaleIntlContext';
import DineStønader from './DineStønader';
import styles from './Forside.module.css';
import { InfoNyRegelverksendring } from './InfoNyRegelverksendring';
import LenkePanelStorListe from './LenkePanelStorListe';
import Snarveier from './Snarveier';
import StønadPanelListe from './StønadPanelListe';

export const Forside: React.FC = () => {
    const { appEnv } = useApp();
    const { tekst } = useLocaleIntlContext();

    const settBreadcrumbTitleMedTekst = appEnv.defaultBreadcrumbs.map(breadcrumb => ({
        ...breadcrumb,
        title: tekst(breadcrumb.title),
    }));

    setBreadcrumbs(settBreadcrumbTitleMedTekst);

    return (
        <main id="maincontent" tabIndex={-1}>
            <section className={styles.grid}>
                <SideTittel tittel={tekst('side.tittel')} underTittel={tekst('side.undertittel')} ikon={true} />
                <InfoNyRegelverksendring />

                <DineStønader />
            </section>
            <section className={styles.grid}>
                <LenkePanelStorListe />
            </section>
            <section className={styles.grid}>
                <StønadPanelListe />
                <Snarveier />
            </section>
        </main>
    );
};
