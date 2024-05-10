import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import FilmProp from '../../props/film.prop';
import { useDispatch, useSelector } from 'react-redux';

import LogoComponent from '../logo-component/logo-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
const SearchComponent = ({ films }) => {

  const favouriteFilms = useSelector((state) => state.FILMS.favouriteFilms) || [];
  const user = JSON.parse(localStorage.getItem('currentUser'));
  let favouriteMoviesIds = JSON.parse(localStorage.getItem(`favouriteMovies_${user.login}`)) || [];

  let favouriteMoviesList = films.slice().filter(movie => favouriteMoviesIds.includes(movie.filmId));
  const [favoriteMovies, setFavoriteMovies] = useState(favouriteMoviesList);

  useEffect(() => {
    favouriteMoviesList = films.slice().filter(movie => favouriteMoviesIds.includes(movie.filmId));
    setFavoriteMovies(favouriteMoviesList);

  }, [favouriteFilms])

  const authStatus = localStorage.getItem('authStatus');
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>

        <h1 className="page-title user-page__title">Результаты поиска по запросу</h1>

        <div className="user-block">
          {user.login}
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <FilmsList films={favoriteMovies} isAuthenticated={authStatus}></FilmsList>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
};

SearchComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
};

export default SearchComponent;
