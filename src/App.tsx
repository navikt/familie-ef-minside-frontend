import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Forside from './pages/Forside';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={'*'} element={<Forside />} />
      </Routes>
    </Router>
  );
};

export default App;
