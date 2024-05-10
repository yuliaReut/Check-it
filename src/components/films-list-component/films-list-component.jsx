import React from 'react';
import { PropTypes } from 'prop-types';
import CardComponent from '../card-component/film-card-component';
import FilmProp from '../../props/film.prop';

const FilmsList = ({ films, isAuthenticated}) => {
  const trimmedFilms = films.slice();
  return (
      <div className="catalog__movies-list">
        {trimmedFilms.map((filmCard) => {
          return (
            <CardComponent
              key={filmCard.filmId}
              film={filmCard}
              isAuthenticated={isAuthenticated}
            />
          );
        })}
      </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
  isAuthenticated: PropTypes.string.isRequired,
};

export default FilmsList;
