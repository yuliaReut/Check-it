import commentsData from './comments/comment-reducer';
import {kinopoiskApi} from '../api/kinopoisk-api';
import filmsData from './films/films-reducer';
import userData from './user/user-reducer';
import {combineReducers} from 'redux';
export const NameSpace = {
  COMMENTS: `COMMENTS`,
  FILMS: `FILMS`,
  USER: `USER`,
};
const reducer = combineReducers({
  [NameSpace.COMMENTS]: commentsData,
  // [NameSpace.FILMS]: filmsData,
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  [NameSpace.USER]: userData,
});

export {reducer};
