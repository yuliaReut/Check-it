export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const getFavouriteMoviesIds = () => {
  return JSON.parse(localStorage.getItem(`favouriteMovies_${getCurrentUser().login}`)) || [];
};

export const getAuthStatus = () => {
  return localStorage.getItem('authStatus');
};

export const getSearchHistory = () => {
  return JSON.parse(localStorage.getItem(`searchHistory_${getCurrentUser().login}`)) || [];
};

export const setSearchHistoryItem = (newSearchHistory) => {
  return localStorage.setItem(
    `searchHistory_${getCurrentUser().login}`,
    JSON.stringify(newSearchHistory),
  );
};

export const setfavouriteMovies = (favouriteMovies) => {
  return localStorage.setItem(
    `favouriteMovies_${getCurrentUser().login}`,
    JSON.stringify(favouriteMovies),
  );
};
