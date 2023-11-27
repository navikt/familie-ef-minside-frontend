import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Forside from './pages/Forside';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 2rem;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={'*'} element={<Forside />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
