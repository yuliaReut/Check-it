import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import FilmProp from '../../props/film.prop';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMoviesByIdsQuery } from '../../api/kinopoisk-api.js';
import LogoComponent from '../logo-component/logo-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
const MyListComponent = () => {

  const favouriteFilms = useSelector((state) => state.FILMS.favouriteFilms) || [];
  const user = JSON.parse(localStorage.getItem('currentUser'));
  let favouriteMoviesIds = JSON.parse(localStorage.getItem(`favouriteMovies_${user.login}`)) || [];
  console.log(favouriteMoviesIds);
  const { data, isLoading, error } = useGetMoviesByIdsQuery(favouriteMoviesIds);
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // let favouriteMoviesList = films.slice().filter(movie => favouriteMoviesIds.includes(movie.filmId));
  let films = data;
  // const [favoriteMovies, setFavoriteMovies] = useState(favouriteMoviesList);

  // useEffect(() => {
  //   favouriteMoviesList = data.films;
  //   setFavoriteMovies(favouriteMoviesList);

  // }, [favouriteFilms])

  const authStatus = localStorage.getItem('authStatus');
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>

        <h1 className="page-title user-page__title">Избранные фильмы</h1>

        <div className="user-block">
          {user.login}
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <FilmsList films={films} isAuthenticated={authStatus}></FilmsList>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
};

MyListComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
};

export default MyListComponent;
