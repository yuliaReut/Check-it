import React from "react";
import FilmProp from "../../props/film.prop";
const DetailsComponent = (props) => {
  const {film} = props;
  return <React.Fragment>
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">{film.director}</strong>
          <span className="movie-card__details-value">Wes Andreson</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          {film.starring.map((star, index) => {
            return <React.Fragment key={index}><span className="movie-card__details-value">
              {star}</span><br /></React.Fragment>;
          })}

        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{film.runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  </React.Fragment>;
};

DetailsComponent.propTypes = {
  film: FilmProp
};

export default DetailsComponent;
