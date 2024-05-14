import {combineReducers} from 'redux';

// eslint-disable-next-line import/namespace
import {kinopoiskApi} from '../api/kinopoisk-api.js';

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

export {reducer};
