import React from 'react';
import {PropTypes} from 'prop-types';

import CardComponent from '../card-component/film-card-component.jsx';
import FilmProp from '../../props/film.prop';

const FilmsList = ({films, isAuthenticated}) => {
  const trimmedFilms = films.slice();
  return (
    <div className="catalog__movies-list">
      {trimmedFilms.length > 0
        ? trimmedFilms.map((filmCard) => {
            const filmId = filmCard.filmId || filmCard.kinopoiskId;
            return <CardComponent key={filmId} film={filmCard} isAuthenticated={isAuthenticated} />;
          })
        : 'Добавьте что-нибудь'}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
  isAuthenticated: PropTypes.string.isRequired,
};

export default FilmsList;
