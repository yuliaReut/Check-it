import React from 'react';
import FilmProp from '../../props/film.prop';
const OverviewComponent = (props) => {
  const {film} = props;
  const {ratingKinopoisk, ratingKinopoiskVoteCount, nameOriginal, genres, description} = film;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingKinopoisk}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{Number(ratingKinopoisk)>8?'Very good':'Bad'}</span>
          <span className="movie-rating__count">{ratingKinopoiskVoteCount} оценили</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p><strong>Описание фильма: </strong>{description}</p>
        <p><strong>Оригинальное название: </strong>{nameOriginal}</p>
        <p className="movie-card__starring">
          <strong> Жанры: </strong>
          {genres.map((genre)=><span key={ratingKinopoisk + genre.genre} className="movie-rating__count">{genre.genre}</span>)}
        </p>
      </div>
    </React.Fragment>
  );
};

OverviewComponent.propTypes = {
  film: FilmProp,
};

export default OverviewComponent;
