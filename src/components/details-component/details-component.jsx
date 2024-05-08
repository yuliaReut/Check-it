import React from 'react';
import FilmProp from '../../props/film.prop';
const DetailsComponent = (props) => {
  const { film } = props;
  const {rating, filmLength, year, genres} = film;
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
         <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{filmLength}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            {genres.map((genre) => <span key={rating + genre.genre} className="movie-card__details-value">{genre.genre}</span>)}
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
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
