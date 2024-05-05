import commentsData from './comments/comment-reducer';
import {kinopoiskApi} from '../api/kinopoisk-api';
import filmsData from './films/films-reducer';
import userData from './user/user-reducer';
import {combineReducers} from 'redux';
import filmsReducer from './films/films-slicer';
export const NameSpace = {
  COMMENTS: `COMMENTS`,
  FILMS: `FILMS`,
  USER: `USER`,
};
const reducer = combineReducers({

  [NameSpace.FILMS]: filmsData,
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,

});
console.log(reducer);
export {reducer};
// const reducer = combineReducers({
//   [NameSpace.COMMENTS]: commentsData,
//   [NameSpace.FILMS]: filmsReducer,
//   [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
//   [NameSpace.USER]: userData,
// });
