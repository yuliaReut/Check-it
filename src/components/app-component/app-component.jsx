import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainComponent from '../main-component/main-component.jsx';
import SignInComponent from '../sigh-in-component/sigh-in-component.jsx';
import MyListComponent from '../my-list-component/my-list-component.jsx';
import FilmComponent from '../film-component/film-component.jsx';
import AddReviewComponent from '../add-review-component/add-review-component.jsx';
import PlayerComponent from '../player-component/player-component.jsx';
import NonexistentPageComponent from '../nonexistent-page-component/nonexistent-page-component.jsx';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route-component/private-route-component.jsx';
import {useSelector} from 'react-redux';
import {kinopoiskApi} from '../../api/kinopoisk-api';
//import ErrorBoundary from '../error-boundery/error-boundery';
// const AppComponent = () => {
//   // const {films, favouriteFilms} = useSelector((state) => state.FILMS);
//   const { films, isLoading, error } = useGetMoviesQuery({ type: 'TOP_250_BEST_FILMS' });
//   console.log(films);
const AppComponent = () => {
  const {useGetMoviesQuery} = kinopoiskApi;
  const { data, isLoading, error } = useGetMoviesQuery({ type: 'TOP_250_BEST_FILMS' });

  if (isLoading) {
    console.log('Загрузка фильмов...');
    console.log('Фильмы:', data);

  } else if (error) {
    console.log('Ошибка при загрузке фильмов:', error);

  } else {
    console.log('Фильмы:', data);
    const films = data && data.films ? data.films : [];
    console.log('Фильмы:', films);
    return (

      <Routes>

        <Route path={AppRoute.ROOT} element={<MainComponent movies={films} />} />


        <Route path="/login" element={<SignInComponent />} />
        {/* <PrivateRoute path='/mylist'>
          <MyListComponent films={films} />
        </PrivateRoute> */}
        <Route path="/mylist" element={<MyListComponent films={films} />} />

        <Route path="/films/:id?" element={<FilmComponent films={films} />} />
        {/* <PrivateRoute path='/films/:id?/review' element={<AddReviewComponent films={films} />} /> */}
        <Route path="/films/:id?/review" element={<AddReviewComponent films={films} />} />

        {/* <Route path="/player/:id?" element={<PlayerComponent films={films} />} /> */}
        <Route path="*" element={<NonexistentPageComponent />} />
      </Routes>
    );
  }
};

export default AppComponent;
