import React , {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import FilmProp from '../../props/film.prop';
import TabsComponent from '../tabs-component/tabs-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
import { AuthorizationStatus } from '../../const';
import FavouriteButtonComponent from '../favourite-button-component/favourite-button-component.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useGetMovieDetailsQuery } from "../../api/kinopoisk-api.js"
import FooterComponent from '../footer-component/footer-component.jsx';
import {setFavouriteFilms} from "../../store/films/films-slicer.js"
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import HeaderComponent from '../header-component/header-component.jsx';
import { setAuthorizationStatus, logout } from '../../store/user/user-slicer.js';
const FilmComponent = ({ films }) => {
  const id = Number(useParams().id);

  const dispatch = useDispatch();
const favouriteFilms = useSelector((state) => state.FILMS.favouriteFilms);
const authStatus = useSelector((state) => state.USER.authStatus);
console.log(favouriteFilms);
const [isAdded, setIsAdded] = useState(favouriteFilms.includes(id));
  const { data: film, error, isLoading } = useGetMovieDetailsQuery(id);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const favouriteMovies = JSON.parse(localStorage.getItem(`favouriteMovies_${currentUser.login}`)) || [];

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('authStatus');
    dispatch(setAuthorizationStatus(storedAuthStatus?storedAuthStatus:AuthorizationStatus.NO_AUTH));
  }, [dispatch]);
  useEffect(() => {
    setFavouriteFilms(favouriteMovies)
    setIsAdded(favouriteFilms.includes(id));
  }, [isAdded, favouriteFilms]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div>Ошибка: {error.toString()}</div>;
  }
  console.log('Фильм:', film);
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
                  <FavouriteButtonComponent filmId={id}></FavouriteButtonComponent>) : ( `` )
                }
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
              <TabsComponent film={film} ></TabsComponent>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            <FilmsList isAuthenticated={authStatus}
              films={
                films
                  .slice()
                  .filter((filmCard) =>
                    filmCard.genres.some((filmGenre) =>
                      film.genres.some((itemGenre) => itemGenre.genre === filmGenre.genre)
                    )
                  )
                  .slice(0, 4)
              }
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
