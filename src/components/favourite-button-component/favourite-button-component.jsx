import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { setFavouriteFilms } from '../../store/films/films-slicer';
import {useDispatch, useSelector} from "react-redux";
const FavouriteButtonComponent = ({ filmId }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentUser){
      const favouriteMovies = JSON.parse(localStorage.getItem(`favouriteMovies_${currentUser.login}`)) || [];
      setIsAdded(favouriteMovies.includes(filmId));
    }
    
    
  }, [filmId, currentUser]);

  const handleOnClick = () => {
    let favouriteMovies = JSON.parse(localStorage.getItem(`favouriteMovies_${currentUser.login}`)) || [];

    if (favouriteMovies.includes(filmId)) {
      favouriteMovies = favouriteMovies.filter((movieId) => movieId !== filmId);
      localStorage.setItem(`favouriteMovies_${currentUser.login}`, JSON.stringify(favouriteMovies));
      setIsAdded(false);
    } else {
      favouriteMovies.push(filmId);
      setIsAdded(true);
    }

    localStorage.setItem(`favouriteMovies_${currentUser.login}`, JSON.stringify(favouriteMovies));
    dispatch(setFavouriteFilms(favouriteMovies)); 
  };

  return (
    <React.Fragment>
      <button className="btn btn--play movie-card__button" type="button" onClick={handleOnClick}>
        <svg viewBox="0 0 24 24" width="24" height="24" >
          {isAdded?<use xlinkHref="#heart-full"></use>:<use xlinkHref="#heart"></use>}
        </svg>
      </button>
    </React.Fragment>
  );
};

FavouriteButtonComponent.propTypes = {
  filmId: PropTypes.number.isRequired,

};

export default FavouriteButtonComponent;
