import React, { useEffect } from 'react';
import FilmsList from '../films-list-component/films-list-component.jsx';
import ShowMoreComponent from '../show-more-component/show-more-component.jsx';
import GenreListComponent from '../genre-list-component/genre-list-component.jsx';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
// import {postFavouriteFilm, fetchFilmsList, fetchPromoFilm} from '../../store/api-actions';
import HeadGuestComponent from '../head-guest-component/head-guest-component';
import { AuthorizationStatus } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
// import PlayButtonComponent from '../play-button-component/play-button.jsx';
import { Link } from 'react-router-dom';
import FavouriteListComponent from '../favourite-films/favourite-films.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';
import { store } from '../../index.jsx';
import SearchPanel from '../search-component/search-component.jsx';
import PropTypes from 'prop-types';
const MainComponent = ({ movies }) => {
  console.log(store.getState());
  const film = movies[0];
  console.log('film', movies);


  // useEffect(() => {
  //   if (!isDataLoaded) {
  //     dispatch(fetchPromoFilm());
  //     dispatch(fetchFilmsList());
  //   }
  // }, [isDataLoaded]);


  // const addFavouriteList = () => {
  //   dispatch(postFavouriteFilm(film.id));
  // };

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={film.posterUrl} alt={film.nameRu} />
        </div>

        <h1 className="visually-hidden">Check_It</h1>

        <header className="page-header movie-card__head">
          <LogoComponent></LogoComponent>
          <SearchPanel isAuthenticated={true}></SearchPanel>
          <div className="user-block">
            {status === AuthorizationStatus.AUTH && user !== null ? (
              <>
                <div className="user-block">{user.email}</div>
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

              <div className="movie-card__buttons">
                {/* <PlayButtonComponent film={film}></PlayButtonComponent> */}
                {/* <FavouriteListComponent
                  handleOnFavouriteList={addFavouriteList}
                ></FavouriteListComponent> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {/* <GenreListComponent films={movies}></GenreListComponent> */}
          <FilmsList films={movies} maxFilms={8}></FilmsList>
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
