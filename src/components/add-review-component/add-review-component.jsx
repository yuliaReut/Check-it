import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import FormReviewComponent from '../form-review-component/form-review-component';
import FilmProp from '../../props/film.prop';
const AddReviewComponent = (props) => {
  const id = Number(useParams().id);
  const film = props.films.find((it) => it.id === id);
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">
                    {` `}
                    {film.name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <FormReviewComponent id={id} film={film}></FormReviewComponent>
        </div>
      </section>
    </React.Fragment>
  );
};

AddReviewComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
};

export default AddReviewComponent;
