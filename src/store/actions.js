const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
  GET_MAX_FILMS: `GET_MAX_FILMS`,
  GET_FILMS: `GET_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  STORE_USER_DATA: `STORE_USER_DATA`,
  STORE_COMMENTS: `STORE_COMMENTS`,
  POST_COMMENT: `POST_COMMENT`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  GET_FAVOURITE_LIST: `GET_FAVOURITE_LIST`,
  ADD_FAVOURITE_FILM: `ADD_FAVOURITE_FILM`,
};

const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  genre,
});

const getPromoFilm = (film) => ({
  type: ActionType.GET_PROMO_FILM,
  film,
});

const getFilteredFilms = (films) => ({
  type: ActionType.GET_FILTERED_FILMS,
  films,
});

const getMaxFilms = (number) => ({
  type: ActionType.GET_MAX_FILMS,
  currentNumberFilms: number,
});

const loadFilms = (films) => ({
  type: ActionType.GET_FILMS,
  films,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  status,
});

const storeUserData = (user) => ({
  type: ActionType.STORE_USER_DATA,
  user,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const getComments = (comments) => ({
  type: ActionType.STORE_COMMENTS,
  comments,
});

const getFavouriteList = (favouriteFilms) => ({
  type: ActionType.GET_FAVOURITE_LIST,
  favouriteFilms,
});

const addFavouriteFilm = (id) => ({
  type: ActionType.ADD_FAVOURITE_FILM,
  id,
});

const postComment = (comment) => ({
  type: ActionType.POST_COMMENT,
  comment,
});

export {
  changeGenre,
  postComment,
  getComments,
  redirectToRoute,
  storeUserData,
  requireAuthorization,
  getFilteredFilms,
  loadFilms,
  getMaxFilms,
  getPromoFilm,
  getFavouriteList,
  addFavouriteFilm,
  ActionType,
};
