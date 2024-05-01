import {ActionType} from '../actions';
import {maxFilms} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
const initialState = {
  genre: `All genres`,
  films: [],
  allFilms: [],
  currentNumberFilms: maxFilms,
  isDataLoaded: false,
  film: null,
  favouriteFilms: [],
};
const filmsData = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_GENRE, (state, action) => {
    return {
      ...state,
      genre: action.genre,
      currentNumberFilms: maxFilms,
    };
  });
  builder.addCase(ActionType.GET_FILTERED_FILMS, (state, action) => {
    return {
      ...state,
      films: state.genre === `All genres` ? state.allFilms : action.films,
    };
  });
  builder.addCase(ActionType.GET_MAX_FILMS, (state, action) => {
    return {
      ...state,
      currentNumberFilms: action.currentNumberFilms,
    };
  });
  builder.addCase(ActionType.GET_FILMS, (state, action) => {
    return {
      ...state,
      films: action.films,
      allFilms: action.films,
      isDataLoaded: true,
    };
  });
  builder.addCase(ActionType.GET_PROMO_FILM, (state, action) => {
    return {
      ...state,
      film: action.film,
    };
  });
  builder.addCase(ActionType.GET_FAVOURITE_LIST, (state, action) => {
    return {
      ...state,
      favouriteFilms: action.favouriteFilms,
    };
  });
  // builder.addCase(ActionType.ADD_FAVOURITE_FILM, (state, action) => {
  //   return {
  //     ...state,
  //     films: state.films.map((film) => {
  //       if (film.id === action.id) {
  //         return {
  //           ...film,
  //           isFavorite: true
  //         };
  //       }
  //       return film;
  //     })
  //   };
  // });
});
export default filmsData;
