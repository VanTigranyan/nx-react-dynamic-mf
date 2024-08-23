import { useEffect } from 'react';
import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

const MfeLogin = React.lazy(() => import('mfe-login/Module'));

export function App() {
  useEffect(() => {
    React.lazy(() => loadRemoteModule('mfe-login', './Module').then(m => {
      console.log(m);
      return m;
    }));
  });

  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mfe-login">MfeLogin</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-shell" />} />
        <Route path="/mfe-login" element={<MfeLogin />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
