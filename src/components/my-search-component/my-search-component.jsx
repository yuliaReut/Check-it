/* eslint-disable import/namespace */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AuthorizationStatus} from '../../const.js';
import FilmProp from '../../props/film.prop';
import SearchPanel from '../search-component/search-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
import {useGetSearchingMoviesQuery} from '../../api/kinopoisk-api.js';
import {getCurrentUser, getAuthStatus} from '../../utils/utils.js';

const SearchComponent = ({films}) => {
  const user = getCurrentUser();

  const location = useLocation();
  let queryParams = queryString.parse(location.search);
  let searchQuery = queryParams.q || '';
  const [searchTerm, setSearchTerm] = useState(searchQuery);

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

  const authStatus = getAuthStatus() ? getAuthStatus() : AuthorizationStatus.NO_AUTH;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>
        <SearchPanel></SearchPanel>

        <div className="user-block">{user ? user.login : ''}</div>
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
