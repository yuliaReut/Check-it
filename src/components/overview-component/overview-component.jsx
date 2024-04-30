import React from "react";

import FilmProp from "../../props/film.prop";
const OverviewComponent = (props) => {
  const {film} = props;
  const {rating, scoresCount, description, director, starring} = film;
  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
    </div>
  </React.Fragment>;
};

OverviewComponent.propTypes = {
  film: FilmProp
};

export default OverviewComponent;
