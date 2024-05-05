import React from 'react';
import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';
import FilmProp from '../../props/film.prop';
import TabsComponent from '../tabs-component/tabs-component.jsx';
import FilmsList from '../films-list-component/films-list-component.jsx';
import NonexistentPageComponent from '../nonexistent-page-component/nonexistent-page-component.jsx';
import {AuthorizationStatus} from '../../const';
import HeadGuestComponent from '../head-guest-component/head-guest-component.jsx';
// import {postFavouriteFilm} from '../../store/api-actions';
import PlayButtonComponent from '../play-button/play-button.jsx';
import {useSelector, useDispatch} from 'react-redux';
import FavouriteListComponent from '../favourite-films/favourite-films.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';
const FilmComponent = ({films}) => {
  const {currentNumberFilms, allFilms} = useSelector((state) => state.FILMS);
  const {status, user} = useSelector((state) => state.USER);
  const {comments} = useSelector((state) => state.COMMENTS);
  const dispatch = useDispatch();
  const id = Number(useParams().id);
  const item = films.find((it) => it.filmId === id);

  if (item === undefined || item === null) {
    return <NonexistentPageComponent />;
  }
  // const addFavouriteList = () => {
  //   dispatch(postFavouriteFilm(item.id));
  // };
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={item.posterUrlPreview} alt={item.name} />
          </div>

          <h1 className="visually-hidden">Check it</h1>

          <header className="page-header movie-card__head">
           <LogoComponent></LogoComponent>

            <div className="user-block">
              {status === AuthorizationStatus.AUTH && user !== null ? (
                <>
                  <div className="user-block">{user.email}</div>
                  <div className="user-block__avatar">
                    <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
                  </div>
                </>
              ) : (
                <HeadGuestComponent />
              )}
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{item.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{item.genres}</span>
                <span className="movie-card__year"> {item.year}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButtonComponent film={item}></PlayButtonComponent>
                <FavouriteListComponent
                  handleOnFavouriteList={addFavouriteList}
                ></FavouriteListComponent>
                {status === AuthorizationStatus.AUTH && user !== null ? (
                  <Link to={`/films/${id}/review`} className="btn movie-card__button">
                    Add review
                  </Link>
                ) : (
                  ``
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={item.posterImage} alt={item.nameRu} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsComponent film={item} comments={comments}></TabsComponent>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <FilmsList
              films={allFilms.filter((filmCard) => filmCard.genres === item.genres).slice(0, 4)}
              maxFilms={currentNumberFilms}
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
