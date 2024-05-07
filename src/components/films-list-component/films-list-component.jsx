import React from 'react';
import { PropTypes } from 'prop-types';
import CardComponent from '../card-component/film-card-component';
import FilmProp from '../../props/film.prop';

const FilmsList = ({ films }) => {
  const trimmedFilms = films.slice();
  return (
      <div className="catalog__movies-list">
        {trimmedFilms.map((filmCard) => {
          return (
            <CardComponent
              key={filmCard.filmId}
              film={filmCard}
            />
          );
        })}
      </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
  maxFilms: PropTypes.number.isRequired,
};

export default FilmsList;
