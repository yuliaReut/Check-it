// eslint-disable-next-line import/namespace
import {useGetMoviesByIdsQuery} from '../api/kinopoisk-api.js';

export const useGetFavoriteMovies = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const favouriteMoviesIds =
    JSON.parse(localStorage.getItem(`favouriteMovies_${user.login}`)) || [];
  const {data, isLoading, error} = useGetMoviesByIdsQuery(favouriteMoviesIds);

  return {
    favoriteMovies: data || [],
    isLoading,
    error,
    user,
  };
};
