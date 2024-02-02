import {
  BrowserRouter,
  Route,
  Outlet,
  Routes,
  Navigate,
} from 'react-router-dom';
import React, { useState } from 'react';
import Forside from './pages/Forside/Forside';
import { AppEnv, hentEnv } from './api/env';
import { AppProvider } from './context/AppContext';
import { HStack, Loader } from '@navikt/ds-react';
import Dokumentoversikt from './pages/Dokumentoversikt/Dokumentoversikt';
import { ScrollToTop } from './utils/scrollEffect';

const App: React.FC = () => {
  const [appEnv, settAppEnv] = useState<AppEnv>();

  React.useEffect(() => {
    hentEnv().then((env: AppEnv) => {
      settAppEnv(env);
    });
  }, []);

  if (!appEnv) {
    return (
      <HStack justify={'center'}>
        <Loader
          size={'xlarge'}
          onResize={undefined}
          onResizeCapture={undefined}
        />
      </HStack>
    );
  }

  return (
    <AppProvider appEnv={appEnv}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Forside />} />
            <Route path="/dokumentoversikt" element={<Dokumentoversikt />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
