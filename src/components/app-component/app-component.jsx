import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import { kinopoiskApi } from '../../api/kinopoisk-api';
import ErrorBoundary from '../error-boundery/error-boundery.jsx';
import LoadingScreen from '../loading-screen/loading-screen.jsx';



const MoviesLoader =  lazy(() => import('../movies-loader-component/movies-loader-component.jsx'));
const AppComponent = () => {
  const { useGetMoviesQuery } = kinopoiskApi;
  const { data:films, isLoading, error } = useGetMoviesQuery({ type: 'TOP_250_BEST_FILMS' });
  if (isLoading) {
    console.log('Фильмы:', films);
    return <LoadingScreen />;
  } else if (error) {
    console.log('Ошибка при загрузке фильмов:', error);
  } else {
    // console.log('Фильмы:', data);
    // const films = data && data.films ? data.films : [];
    console.log('Фильмы:', films);
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
        <MoviesLoader />
            

        </Suspense>
      </ErrorBoundary>
    );
  }
};
export default AppComponent;
