import React, { Suspense , lazy, useState, createContext} from 'react';
import { kinopoiskApi } from '../../api/kinopoisk-api';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route-component/private-route-component.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthorizationStatus, logout } from '../../store/user/user-slicer.js';
import { AuthorizationStatus } from '../../const';
import { useEffect } from 'react';
const MainPage = lazy(() => import('../main-component/main-component.jsx'));

const FilmPage = lazy(() => import('../film-component/film-component.jsx'));
const FavoutitesFilsmPage = lazy(() => import('../my-list-component/my-list-component.jsx'));
const HistoryPage = lazy(() => import('../my-history-component/my-history-component.jsx'));
const SearchPage = lazy(() => import('../my-search-component/my-search-component.jsx'));
const Page404 = lazy(() => import('../page404-component/page404-component.jsx'));

const SignInPage = lazy(() => import('../sigh-in-component/sigh-in-component.jsx'));
const SignUpPage = lazy(() => import('../sigh-up-component/sigh-up-component.jsx'));



const MoviesLoader = () => {

  const { useGetMoviesQuery } = kinopoiskApi;
  const { data: films, isLoading, error } = useGetMoviesQuery({ type: 'TOP_250_BEST_FILMS' });

  if (isLoading) {
    return <LoadingScreen />;
  } else if (error) {
    return <div>Ошибка при загрузке фильмов: {error.message}</div>;
  } else {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   const storedAuthStatus = localStorage.getItem('authStatus');
    //   dispatch(setAuthorizationStatus(storedAuthStatus?storedAuthStatus:AuthorizationStatus.NO_AUTH));
    // }, [dispatch]);
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path={AppRoute.ROOT} element={<MainPage movies={films} />} />
          <Route element={<PrivateRoute />}>
            <Route path={AppRoute.ROOT + 'favorites'} element={<FavoutitesFilsmPage films={films} />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={AppRoute.ROOT + 'history'} element={<HistoryPage films={films} />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={AppRoute.ROOT + `search/:search?`} element={<SearchPage films={films} />} />
          </Route>
          <Route path={AppRoute.ROOT + `films/:id?`} element={<FilmPage films={films} />} />
          <Route path={AppRoute.ROOT + `signin`} element={<SignInPage />} />
          <Route path={AppRoute.ROOT + `signup`} element={<SignUpPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    );
  }
};

export default MoviesLoader;