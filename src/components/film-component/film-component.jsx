import React, {useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import FilmProp from '../../props/film.prop';
import TabsComponent from '../tabs-component/tabs-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
import {AuthorizationStatus} from '../../const';
import FavouriteButtonComponent from '../favourite-button-component/favourite-button-component.jsx';
// eslint-disable-next-line import/namespace
import {useGetMovieDetailsQuery} from '../../api/kinopoisk-api.js';
import FooterComponent from '../footer-component/footer-component.jsx';
import {setFavouriteFilms} from '../../store/films/films-slicer.js';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import HeaderComponent from '../header-component/header-component.jsx';
import {setAuthorizationStatus, logout} from '../../store/user/user-slicer.js';
import {ThemeContext} from '../../providers/theme-provider.jsx';
import {getAuthStatus, getFavouriteMoviesIds} from '../../utils/utils.js';
import {getFavouriteFilmsSelector, getAuthStatusSelector} from '../../selectors/selectors.js';
const FilmComponent = ({films}) => {
  const id = Number(useParams().id);
  const {isDarkTheme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const favouriteFilms = useSelector(getFavouriteFilmsSelector);
  const authStatus = useSelector(getAuthStatusSelector);
  const [isAdded, setIsAdded] = useState(favouriteFilms.includes(id));
  const {data: film, error, isLoading} = useGetMovieDetailsQuery(id);
  const favouriteMovies = getFavouriteMoviesIds();

  useEffect(() => {
    const storedAuthStatus = getAuthStatus();
    dispatch(
      setAuthorizationStatus(storedAuthStatus ? storedAuthStatus : AuthorizationStatus.NO_AUTH),
    );
  }, [dispatch]);
  useEffect(() => {
    setFavouriteFilms(favouriteMovies);
    setIsAdded(favouriteFilms.includes(id));
  }, [isAdded, favouriteFilms]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div>Ошибка: {error.toString()}</div>;
  }

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.posterUrl} alt={film.nameOriginal} />
          </div>
          <h1 className="visually-hidden">Check it</h1>
          <HeaderComponent onExit={handleLogout} isAuthenticated={authStatus}></HeaderComponent>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.nameRu}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__year"> {film.year}</span>
              </p>
              <div className="movie-card__buttons">
                {authStatus === AuthorizationStatus.AUTH ? (
                  <FavouriteButtonComponent filmId={id}></FavouriteButtonComponent>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterUrlPreview} alt={film.nameRu} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsComponent film={film}></TabsComponent>
            </div>
          </div>
        </div>
      </section>
      <div className={`page-content page-content-${isDarkTheme ? 'dark' : 'light'}`}>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            <FilmsList
              isAuthenticated={authStatus}
              films={films
                .slice()
                .filter((filmCard) =>
                  filmCard.genres.some((filmGenre) =>
                    film.genres.some((itemGenre) => itemGenre.genre === filmGenre.genre),
                  ),
                )
                .slice(0, 4)}
              maxFilms={4}
            ></FilmsList>
          </div>
        </section>
        <FooterComponent></FooterComponent>
      </div>
    </React.Fragment>
  );
};
FilmComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
};
export default FilmComponent;
