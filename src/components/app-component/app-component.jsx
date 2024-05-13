import React, { useEffect } from 'react';
import { setAuthorizationStatus } from '../../store/user/user-slicer.js';
import { AuthorizationStatus } from '../../const';
import ErrorBoundary from '../error-boundery/error-boundery.jsx';
import MoviesLoader from '../movies-loader-component/movies-loader-component.jsx';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '../../providers/theme-provider.jsx';

const AppComponent = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('authStatus');
    dispatch(setAuthorizationStatus(storedAuthStatus ? storedAuthStatus : AuthorizationStatus.NO_AUTH));
  }, [dispatch]);

  return (
    <ErrorBoundary> 
      <ThemeProvider >
        <MoviesLoader />
      </ThemeProvider>     
    </ErrorBoundary>
  );

};
export default AppComponent;
