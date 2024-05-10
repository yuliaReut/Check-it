import React from 'react';
import FilmProp from '../../props/film.prop';
const DetailsComponent = (props) => {
  const { film } = props;
  const {ratingKinopoisk, filmLength, year, countries} = film;
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
         <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Продолжительность</strong>
            <span className="movie-card__details-value">{filmLength}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Страны:</strong>
            {countries.map((country) => <span key={ratingKinopoisk + country.country} className="movie-card__details-value">{country.country}</span>)}
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Дата выпуска</strong>
            <span className="movie-card__details-value">{year}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

DetailsComponent.propTypes = {
  film: FilmProp,
};

export default DetailsComponent;
