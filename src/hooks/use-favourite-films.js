import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {setFavouriteFilms} from '../store/films/films-slicer';

const getUserFavouriteFilms = (userLogin) => {
  const favouriteMoviesKey = `favouriteMovies_${userLogin}`;
  const favouriteMovies = JSON.parse(localStorage.getItem(favouriteMoviesKey)) || [];
  return favouriteMovies;
};

const saveUserFavouriteFilms = (userLogin, favouriteMovies) => {
  const favouriteMoviesKey = `favouriteMovies_${userLogin}`;
  localStorage.setItem(favouriteMoviesKey, JSON.stringify(favouriteMovies));
};

export const useUserFavouriteFilms = (filmId) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      const favouriteMovies = getUserFavouriteFilms(currentUser.login);
      setIsAdded(favouriteMovies.includes(filmId));
    }
  }, [filmId, currentUser]);

  const toggleFavouriteFilm = () => {
    if (!currentUser) {
      return;
    }

    const favouriteMovies = getUserFavouriteFilms(currentUser.login);

    const updatedFavouriteMovies = favouriteMovies.includes(filmId)
      ? favouriteMovies.filter((movieId) => movieId !== filmId)
      : [...favouriteMovies, filmId];

    saveUserFavouriteFilms(currentUser.login, updatedFavouriteMovies);
    setIsAdded(!isAdded);
    dispatch(setFavouriteFilms(updatedFavouriteMovies));
  };

  return {isAdded, toggleFavouriteFilm};
};
