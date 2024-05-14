/* eslint-disable import/namespace */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

import FilmProp from '../../props/film.prop';
import SearchPanel from '../search-component/search-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
import {useGetSearchingMoviesQuery} from '../../api/kinopoisk-api.js';
import {getCurrentUser, getAuthStatus, getFavouriteMoviesIds} from '../../utils/utils.js';
import {getFavouriteFilmsSelector, getAuthStatusSelector} from '../../selectors/selectors.js';
const SearchComponent = ({films}) => {
  const isAuthenticated = useSelector(getAuthStatusSelector) || [];
  const favouriteFilms = useSelector(getFavouriteFilmsSelector) || [];
  const user = getCurrentUser();
  let favouriteMoviesIds = getFavouriteMoviesIds();

  let favouriteMoviesList = films
    .slice()
    .filter((movie) => favouriteMoviesIds.includes(movie.filmId));
  const [favoriteMovies, setFavoriteMovies] = useState(favouriteMoviesList);
  const location = useLocation();
  let queryParams = queryString.parse(location.search);
  let searchQuery = queryParams.q || '';
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  useEffect(() => {
    favouriteMoviesList = films
      .slice()
      .filter((movie) => favouriteMoviesIds.includes(movie.filmId));
    setFavoriteMovies(favouriteMoviesList);
  }, [favouriteFilms]);
  useEffect(() => {
    queryParams = queryString.parse(location.search);
    searchQuery = queryParams.q || '';
    setSearchTerm(searchQuery);
  }, [location.search]);
  const {data, isLoading, error} = useGetSearchingMoviesQuery(searchQuery);

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
        <SearchPanel isAuthenticated={isAuthenticated}></SearchPanel>

        <div className="user-block">{user.login}</div>
      </header>

      <section className="catalog">
        <h1 className="page-title ">Результаты поиска по запросу {searchTerm}</h1>
        <div className="catalog__movies-list">
          <FilmsList films={data.films} isAuthenticated={authStatus}></FilmsList>
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
