import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Forside from './pages/Forside';
import styled from 'styled-components';
import { AppEnv, hentEnv } from './api/env';
import { AppProvider } from './context/AppContext';

const AppContainer = styled.div`
  margin-top: 2rem;
`;

const App: React.FC = () => {
  const [appEnv, settAppEnv] = useState<AppEnv>();

  React.useEffect(() => {
    hentEnv().then((env: AppEnv) => {
      settAppEnv(env);
    });
  }, []);

  // if (!appEnv) {
  //   // TODO: Presenter feilside
  //   return <></>;
  // }
  console.log('appEnv', appEnv);
  return (
    <AppProvider appEnv={appEnv}>
      <AppContainer>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path={'*'} element={<Forside />} />
          </Routes>
        </Router>
      </AppContainer>
    </AppProvider>
  );
};

export default App;
