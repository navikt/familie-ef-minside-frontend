import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useEffect } from 'react';
import { useApp } from '../context/useApp';
import { useLocaleIntlContext } from '../context/useLocaleIntlContext';
import type { StønadType } from '../interfaces/stønader';
import { utledBreadCrumb } from '../pages/Stønadoversikt/utils';

export const useSettBreadcrumbTekster = (stønadType: StønadType) => {
    const { appEnv } = useApp();
    const { tekst } = useLocaleIntlContext();

    const breadCrumb = utledBreadCrumb(stønadType);
    const breadCrumbTitle = tekst(breadCrumb.title);

    useEffect(() => {
        const breadCrumbModifisert = { ...breadCrumb, title: breadCrumbTitle };

        const settBreadcrumbTitleMedTekst = appEnv.defaultBreadcrumbs.map(breadcrumb => ({
            ...breadcrumb,
            title: tekst(breadcrumb.title),
        }));

        setBreadcrumbs([...settBreadcrumbTitleMedTekst, breadCrumbModifisert]);
    }, [stønadType, appEnv.defaultBreadcrumbs, tekst, breadCrumb, breadCrumbTitle]);
};
