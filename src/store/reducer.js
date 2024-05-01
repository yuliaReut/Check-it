import commentsData from './comments/comment-reducer';
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
  [NameSpace.FILMS]: filmsData,
  [NameSpace.USER]: userData,
});

export {reducer};
