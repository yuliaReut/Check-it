// import {AuthorizationStatus} from '../const';
// import {
//   postComment as postComments,
//   storeUserData,
//   requireAuthorization,
//   getComments as storeComments,
//   getPromoFilm,
//   loadFilms,
//   getFavouriteList,
// } from './actions';
// import {adaptDataToFilms} from '../adapter/adapter';

// const fetchFilmsList = () => (dispatch, _getState, api) =>
//   api.get(`/api/v2.1/films/top?type=TOP_250_BEST_FILMS&page=1`).then((data) => {
//     const adaptedData = adaptDataToFilms(data.data);
//     dispatch(loadFilms(adaptedData));
//   });

// const fetchPromoFilm = () => (dispatch, _getState, api) =>
//   api.get(`/films/promo`).then((data) => {
//     const adaptedData = adaptDataToFilms(data.data);
//     dispatch(getPromoFilm(adaptedData));
//   });

// const fetchFavouriteList = () => (dispatch, _getState, api) =>
//   api.get(`/favorite`).then((data) => {
//     const adaptedData = adaptDataToFilms(data.data);
//     dispatch(getFavouriteList(adaptedData));
//   });

// const postFavouriteFilm = (filmId) => (dispatch, getState, api) => {
//   const state = getState();
//   const items = state.FILMS.films;
//   const favouriteFilmList = state.FILMS.favouriteFilms;
//   const isExistedFim = favouriteFilmList.findIndex((index) => {
//     return index.id === filmId;
//   });
//   if (isExistedFim === -1) {
//     let favouriteFilms = [...state.FILMS.favouriteFilms];
//     const item = items[filmId] || {};
//     const adaptedStatus = item.isFavorite ? 0 : 1;

//     api.post(`/favorite/${filmId}/${adaptedStatus}`).then((data) => {
//       const adaptedData = adaptDataToFilms(data.data);

//       if (Array.isArray(adaptedData)) {
//         favouriteFilms.push(...adaptedData); // Используйте spread-оператор для добавления элементов массива
//       } else {
//         favouriteFilms.push(adaptedData); // Если adaptedData - это не массив, добавьте его как единственный элемент
//       }

//       dispatch(getFavouriteList(favouriteFilms));
//     });
//   }
// };

// const login =
//   ({login: email, password}) => (dispatch, _getState, api) =>
//     api
//       .post(`/login`, {email, password})
//       .then(({data}) => {
//         dispatch(storeUserData({
//           ...data,
//           id: data.id,
//           email: data[`email`],
//           name: data[`name`],
//           avatarUrl: data[`avatar_url`],
//         }),
//         );
//         // dispatch(requireAuthorization(AuthorizationStatus.AUTH));
//       })
//       .catch((err) => err);
// const checkAuth = () => (dispatch, _getState, api) =>
//   api
//     .get(`/login`)
//     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch((err) => err);

// const getComments = (id) => (dispatch, _getState, api) =>
//   api
//     .get(`/comments/${id}`)
//     .then(({data}) => {
//       dispatch(storeComments(data));
//     })
//     .catch((err) => err);

// const postComment =
//   (id, {rating, comment}) => (dispatch, _getState, api) =>
//     api
//       .post(`/comments/${id}`, {rating, comment})
//       .then(({data}) => {
//         dispatch(postComments(data));
//       })
//       .catch((err) => err);
// export {
//   checkAuth,
//   fetchFilmsList,
//   login,
//   getComments,
//   postComment,
//   fetchPromoFilm,
//   fetchFavouriteList,
//   postFavouriteFilm,
// };
