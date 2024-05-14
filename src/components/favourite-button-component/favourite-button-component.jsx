import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {setFavouriteFilms} from '../../store/films/films-slicer';
import {getCurrentUser, setfavouriteMovies, getFavouriteMoviesIds} from '../../utils/utils.js';
const FavouriteButtonComponent = ({filmId}) => {
  const currentUser = getCurrentUser();
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  let favouriteMovies;
  useEffect(() => {
    if (currentUser) {
      favouriteMovies = getFavouriteMoviesIds();
      setIsAdded(favouriteMovies.includes(filmId));
    }
  }, [filmId, currentUser]);

  const handleOnClick = () => {
    favouriteMovies = getFavouriteMoviesIds();

    if (favouriteMovies.includes(filmId)) {
      favouriteMovies = favouriteMovies.filter((movieId) => movieId !== filmId);
      setfavouriteMovies(favouriteMovies);
      setIsAdded(false);
    } else {
      favouriteMovies.push(filmId);
      setIsAdded(true);
    }
    setfavouriteMovies(favouriteMovies);
    dispatch(setFavouriteFilms(favouriteMovies));
  };
  return (
    <button className="btn btn--play movie-card__button" type="button" onClick={handleOnClick}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        {isAdded ? <use xlinkHref="#heart-full"></use> : <use xlinkHref="#heart"></use>}
      </svg>
    </button>
  );
};

FavouriteButtonComponent.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default FavouriteButtonComponent;
