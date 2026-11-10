import type React from 'react';
import DataViewer from '../../components/DataViewer';
import { SideTittel } from '../../components/SideTittel';
import { useApp } from '../../context/useApp';
import { useLocaleIntlContext } from '../../context/useLocaleIntlContext';
import { useSettBreadcrumbTekster } from '../../hooks/useBreadcrumbTekster';
import type { StønadType } from '../../interfaces/stønader';
import { Grid } from './Grid';
import LenkePanelStorListe from './LenkePanelStorListe';
import StønadTabell from './StønadTabell';
import { utledStønadTekst } from './utils';

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
        </main>
    );
};

export default StønadSide;
