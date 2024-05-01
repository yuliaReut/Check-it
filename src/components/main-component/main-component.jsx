import React, {useEffect} from "react";
import FilmsList from "../films-list-component/films-list-component";
import ShowMoreComponent from "../show-more-component/show-more-component";
import GenreListComponent from "../genre-list-component/genre-list-component";
import LoadingScreen from "../loading-screen/loading-screen";
import {postFavouriteFilm, fetchFilmsList, fetchPromoFilm} from "../../store/api-actions";
import HeadGuestComponent from "../head-guest-component/head-guest-component";
import {AuthorizationStatus} from "../../const";
import {useSelector, useDispatch} from 'react-redux';
import PlayButtonComponent from "../play-button/play-button";
import {Link} from "react-router-dom";
import FavouriteListComponent from "../favourite-films/favourite-films";

const MainComponent = () => {
  const {films, currentNumberFilms, isDataLoaded, film} = useSelector((state)=>state.FILMS);
  const {user, status} = useSelector((state)=>state.USER);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchPromoFilm());
      dispatch(fetchFilmsList());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  const addFavouriteList = ()=>{
    dispatch(postFavouriteFilm(film.id));
  };

  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="user-block">
          {status === AuthorizationStatus.AUTH && user !== null ? (<>
            <div className="user-block">{user.email}
            </div>
            <Link to={`/mylist`}>
              <div className="user-block__avatar">
                <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </>
          ) : (
            <HeadGuestComponent />
          )}
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <PlayButtonComponent film={film}></PlayButtonComponent>
              <FavouriteListComponent handleOnFavouriteList={addFavouriteList}></FavouriteListComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreListComponent films={films}></GenreListComponent>
        <FilmsList films={films} maxFilms = {currentNumberFilms}></FilmsList>
        <ShowMoreComponent ></ShowMoreComponent>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>
  );
};

export default MainComponent;


