import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComponent from '../main-component/main-component.jsx';
import SignInComponent from '../sigh-in-component/sigh-in-component.jsx';
import MyListComponent from '../my-list-component/my-list-component.jsx';
import FilmComponent from '../film-component/film-component.jsx';
import SignUpComponent from '../sigh-up-component/sigh-up-component.jsx';
import NonexistentPageComponent from '../nonexistent-page-component/nonexistent-page-component.jsx';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route-component/private-route-component.jsx';
import { useSelector } from 'react-redux';
import { kinopoiskApi } from '../../api/kinopoisk-api';
import ErrorBoundary from '../error-boundery/error-boundery.jsx';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import HistoryComponent from '../my-history-component/my-history-component.jsx';
import SearchComponent from '../my-search-component/my-search-component.jsx';

const AppComponent = () => {
  const { useGetMoviesQuery } = kinopoiskApi;
  const { data, isLoading, error } = useGetMoviesQuery({ type: 'TOP_250_BEST_FILMS' });
  if (isLoading) {
    return <LoadingScreen />;
  } else if (error) {
    console.log('Ошибка при загрузке фильмов:', error);
  } else {
    console.log('Фильмы:', data);
    const films = data && data.films ? data.films : [];
    console.log('Фильмы:', films);
    return (
      <ErrorBoundary>
        <Routes>
          <Route path={AppRoute.ROOT} element={<MainComponent movies={films} />} />
          <Route path={AppRoute.ROOT + `signin`} element={<SignInComponent />} />
          <Route path={AppRoute.ROOT + `signup`} element={<SignUpComponent />} />
          <Route element={<PrivateRoute />}>
            <Route path={AppRoute.ROOT + 'favorites'} element={<MyListComponent films={films} />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={AppRoute.ROOT + 'history'} element={<HistoryComponent films={films} />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={AppRoute.ROOT + `search/:search?`} element={<SearchComponent films={films} />} />
          </Route>
          <Route path={AppRoute.ROOT + `films/:id?`} element={<FilmComponent films={films} />} />
          <Route path="*" element={<NonexistentPageComponent />} />
        </Routes>
      </ErrorBoundary>
    );
  }
};
export default AppComponent;
