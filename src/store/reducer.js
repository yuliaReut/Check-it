import {kinopoiskApi} from '../api/kinopoisk-api';
import {combineReducers} from 'redux';
import userSlice from './user/user-slicer.js';
import filmsSlice from './films/films-slicer.js';
export const NameSpace = {
  FILMS: `FILMS`,
  USER: `USER`,
};

const reducer = combineReducers({
  [NameSpace.USER]: userSlice,
  [NameSpace.FILMS]: filmsSlice,
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,

});
console.log(reducer);
export {reducer};
