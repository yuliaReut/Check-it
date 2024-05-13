import React, { useEffect, useContext } from 'react';
import FilmsList from '../films-list-component/films-list-component.jsx';
import { AuthorizationStatus } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
import FavouriteButtonComponent from '../favourite-button-component/favourite-button-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import { store } from '../../index.jsx';
import HeaderComponent from '../header-component/header-component.jsx';
import PropTypes from 'prop-types';
import { setAuthorizationStatus, logout } from '../../store/user/user-slicer.js';
import { ThemeContext } from '../../providers/theme-provider.jsx';
import useAuth from '../../hooks/use-auth.js';

const MainComponent = ({ movies }) => {
  const { isDarkTheme} = useContext(ThemeContext);
  const film = movies[0];
  
  const authStatus = useAuth();

  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={film.posterUrl} alt={film.nameRu} />
        </div>
        <h1 className="visually-hidden">Check_It</h1>
        <HeaderComponent isAuthenticated={authStatus} onExit={handleLogout}></HeaderComponent>


        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={film.posterUrl}
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={`page-content page-content-${isDarkTheme?'dark':'light'}`}>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmsList films={movies} isAuthenticated={authStatus}></FilmsList>
        </section>
        <FooterComponent></FooterComponent>
      </div>
    </React.Fragment>
  );
};


MainComponent.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MainComponent;
