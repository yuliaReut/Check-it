import {kinopoiskApi} from '../../api/kinopoisk-api';

export const reducer = {
  // другие редьюсеры, если есть
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
};
