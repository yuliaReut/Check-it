import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainComponent from '../main-component/main-component';
import SignInComponent from '../sigh-in-component/sigh-in-component';
import MyListComponent from '../my-list-component/my-list-component';
import FilmComponent from '../film-component/film-component';
import AddReviewComponent from '../add-review-component/add-review-component';
import PlayerComponent from '../player-component/player-component';
import NonexistentPageComponent from '../nonexistent-page-component/nonexistent-page-component';
import {AppRoute} from '../../const';
// import PrivateRoute from '../private-route-component/private-route-component';
import {useSelector} from 'react-redux';
import {kinopoiskApi} from '../../api/kinopoisk-api';
import ErrorBoundary from '../error-boundery/error-boundery';
// const AppComponent = () => {
//   // const {films, favouriteFilms} = useSelector((state) => state.FILMS);
//   const { films, isLoading, error } = useGetMoviesQuery({ type: 'TOP_250_BEST_FILMS' });
//   console.log(films);
const AppComponent = () => {
  const {useGetMoviesQuery} = kinopoiskApi;
  const {data, isLoading, error} = useGetMoviesQuery({type: 'TOP_AWAIT_FILMS'});

  if (isLoading) {
    console.log('Загрузка фильмов...');
    console.log('Фильмы:', data);
    // Вы можете отобразить компонент загрузки или другой UI, показывающий, что данные загружаются
  } else if (error) {
    console.log('Ошибка при загрузке фильмов:', error);
    // Вы можете отобразить компонент ошибки или другой UI, показывающий, что произошла ошибка
  } else {
    console.log('Фильмы:', data);
    const {films} = data;
    console.log('Фильмы:', films);
    return (
      <Routes>
        {/* <ErrorBoundary>
        <Route path={AppRoute.ROOT} element={<MainComponent />} />
        </ErrorBoundary> */}

        <Route path="/login" element={<SignInComponent />} />
        {/* <PrivateRoute path='/mylist' element={<MyListComponent films={favouriteFilms} />} /> */}
        <Route path="/mylist" element={<MyListComponent films={films} />} />

        <Route path="/films/:id?" element={<FilmComponent films={films} />} />
        {/* <PrivateRoute path='/films/:id?/review' element={<AddReviewComponent films={films} />} /> */}
        <Route path="/films/:id?/review" element={<AddReviewComponent films={films} />} />

        <Route path="/player/:id?" element={<PlayerComponent films={films} />} />
        <Route path="*" element={<NonexistentPageComponent />} />
      </Routes>
    );
    // Здесь вы можете отобразить компоненты, использующие данные фильмов
  }
};

export default AppComponent;
