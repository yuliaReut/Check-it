import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import FilmProp from '../../props/film.prop';
// eslint-disable-next-line import/namespace
import {useGetMoviesByIdsQuery} from '../../api/kinopoisk-api.js';
import LogoComponent from '../logo-component/logo-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
import {getAuthStatus, getFavouriteMoviesIds, getCurrentUser} from '../../utils/utils.js';
import {getFavouriteFilmsSelector, getAuthStatusSelector} from '../../selectors/selectors.js';
const MyListComponent = () => {
  const favouriteFilms = useSelector(getFavouriteFilmsSelector) || [];
  let favouriteMoviesIds = getFavouriteMoviesIds();
  const [favouriteFilm, setFavoriteFilms] = useState(favouriteMoviesIds);
  const user = getCurrentUser();
  useEffect(() => {
    setFavoriteFilms(favouriteFilms);
  }, [favouriteMoviesIds]);

  const {data: films, isLoading, error} = useGetMoviesByIdsQuery(favouriteMoviesIds);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const authStatus = getAuthStatus();
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>

        <h1 className="page-title user-page__title">Избранные фильмы</h1>

        <div className="user-block">{user.login}</div>
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
