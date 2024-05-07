import React from 'react';
import FilmProp from '../../props/film.prop';
const OverviewComponent = (props) => {
  const {film} = props;
  const {rating, ratingVoteCount, nameEn, genres} = film;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{Number(rating)>8?'Very good':'Bad'}</span>
          <span className="movie-rating__count">{ratingVoteCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p><strong>English Name: </strong>{nameEn}</p>
        <p className="movie-card__starring">
          <strong> Genres: </strong>
          {genres.map((genre)=><span key={rating + genre.genre} className="movie-rating__count"><br></br>{genre.genre}<br></br></span>)}
        </p>
      </div>
    </React.Fragment>
  );
};

OverviewComponent.propTypes = {
  film: FilmProp,
};

export default OverviewComponent;
