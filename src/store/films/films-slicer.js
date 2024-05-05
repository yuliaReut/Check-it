import { createSlice } from '@reduxjs/toolkit';
import { kinopoiskApi } from '../../api/kinopoisk-api';
import { maxFilms } from '../../const';

const initialState = {
  genre: 'All genres',
  films: [],
  allFilms: [],
  currentNumberFilms: maxFilms,
  isDataLoaded: false,
  film: null,
  favouriteFilms: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload.genre;
      state.currentNumberFilms = maxFilms;
    },
    getFilteredFilms: (state, action) => {
      state.films = state.genre === 'All genres' ? state.allFilms : action.payload.films;
    },
    getMaxFilms: (state, action) => {
      state.currentNumberFilms = action.payload.currentNumberFilms;
    },
    getPromoFilm: (state, action) => {
      state.film = action.payload.film;
    },
    getFavouriteList: (state, action) => {
      state.favouriteFilms = action.payload.favouriteFilms;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(kinopoiskApi.queryFulfilled, (state, action) => {
  //     if (action.payload.data.films) {
  //       state.films = action.payload.data.films;
  //       state.allFilms = action.payload.data.films;
  //       state.isDataLoaded = true;
  //     }
  //   });
  // },
});

export const {
  changeGenre,
  getFilteredFilms,
  getMaxFilms,
  getPromoFilm,
  getFavouriteList,
} = filmsSlice.actions;

export default filmsSlice.reducer;
