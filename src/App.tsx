import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Forside from './pages/Forside/Forside';
import { AppEnv, hentEnv } from './api/env';
import { AppProvider } from './context/AppContext';
import { HStack, Loader } from '@navikt/ds-react';

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
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={'*'} element={<Forside />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
