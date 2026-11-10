import { HStack, Loader } from '@navikt/ds-react';
import React, { useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { type AppEnv, hentEnv } from './api/env';
import { AppProvider } from './context/AppContext';
import { SpråkProvider } from './context/SpråkContext';
import { useSpråkValg } from './hooks/useSpråkValg';
import { Forside } from './pages/Forside/Forside';
import StønadSide from './pages/Stønadoversikt/StønadSide';
import { ScrollToTop } from './utils/scrollEffect';

export const App: React.FC = () => {
    const [appEnv, settAppEnv] = useState<AppEnv>();
    useSpråkValg();

    React.useEffect(() => {
        hentEnv().then((env: AppEnv) => {
            settAppEnv(env);
        });
    }, []);

    if (!appEnv) {
        return (
            <HStack justify={'center'}>
                <Loader size={'xlarge'} />
            </HStack>
        );
    }

    return (
        <SpråkProvider>
            <AppProvider appEnv={appEnv}>
                <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Outlet />}>
                            <Route index element={<Forside />} />
                            <Route path="/overgangsstonad" element={<StønadSide stønadType="overgangsstønad" />} />
                            <Route path="/barnetilsyn" element={<StønadSide stønadType="barnetilsyn" />} />
                            <Route path="/skolepenger" element={<StønadSide stønadType="skolepenger" />} />
                            <Route path="*" element={<Navigate to="/" replace={true} />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </SpråkProvider>
    );
};
