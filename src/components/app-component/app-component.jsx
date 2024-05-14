import React from 'react';

import {useAuthStatus} from '../../hooks/use-auth-status.js';
import ErrorBoundary from '../error-boundery/error-boundery.jsx';
import MoviesLoader from '../movies-loader-component/movies-loader-component.jsx';
import {ThemeProvider} from '../../providers/theme-provider.jsx';

const AppComponent = () => {
  useAuthStatus();

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <MoviesLoader />
      </ThemeProvider>
    </ErrorBoundary>
  );
};
export default AppComponent;
