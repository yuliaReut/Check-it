export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const getFavouriteMoviesIds = () => {
  return getCurrentUser()
    ? JSON.parse(localStorage.getItem(`favouriteMovies_${getCurrentUser().login}`))
    : [];
};

export const getAuthStatus = () => {
  return localStorage.getItem('authStatus');
};

export const setAuthStatus = (payload) => {
  return localStorage.setItem('authStatus', payload);
};

export const removeAuthStatus = () => {
  localStorage.removeItem('authStatus');
  localStorage.removeItem('currentUser');
};

export const getSearchHistory = () => {
  return getCurrentUser()
    ? JSON.parse(localStorage.getItem(`searchHistory_${getCurrentUser().login}`))
    : [];
};

export const setSearchHistoryItem = (newSearchHistory) => {
  return getCurrentUser()
    ? localStorage.setItem(
        `searchHistory_${getCurrentUser().login}`,
        JSON.stringify(newSearchHistory),
      )
    : [];
};

export const setfavouriteMovies = (favouriteMovies) => {
  return getCurrentUser()
    ? localStorage.setItem(
        `favouriteMovies_${getCurrentUser().login}`,
        JSON.stringify(favouriteMovies),
      )
    : [];
};
