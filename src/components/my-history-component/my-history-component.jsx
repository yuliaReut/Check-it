import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import FilmProp from '../../props/film.prop.js';
import { useDispatch, useSelector } from 'react-redux';
import LogoComponent from '../logo-component/logo-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
import { Link } from 'react-router-dom';

const HistoryComponent = ({ films }) => {
  const navigate = useNavigate();
  const favouriteFilms = useSelector((state) => state.FILMS.favouriteFilms) || [];
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  let favouriteMoviesIds = JSON.parse(localStorage.getItem(`searchHistory_${currentUser.login}`)) || [];

  let favouriteMoviesList = films.slice().filter(movie => favouriteMoviesIds.includes(movie.filmId));
  const [favoriteMovies, setFavoriteMovies] = useState(favouriteMoviesList);

  useEffect(() => {
    favouriteMoviesList = films.slice().filter(movie => favouriteMoviesIds.includes(movie.filmId));
    setFavoriteMovies(favouriteMoviesList);
  }, [favouriteFilms]);

  const searchHistory = JSON.parse(localStorage.getItem(`searchHistory_${currentUser.login}`));

  const handleHistoryClick = (searchTerm) => {
    navigate(`/Check-it/search/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>
        <h1 className="page-title user-page__title">История поиска</h1>
        <div className="user-block">
          {currentUser.login}
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          <div>
            {searchHistory ? searchHistory.map((searchTerm, index) => (
              <div className="catalog__movies-list" key={index} onClick={() => handleHistoryClick(searchTerm)}>
                {searchTerm}
              </div>
            )) : <p>Ваша история пуста</p>}
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
};

HistoryComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
};

export default HistoryComponent;
