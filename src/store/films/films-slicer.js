import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteFilms: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFavouriteFilms: (state, action) => {
      state.favouriteFilms = [...action.payload];
    },
  },
});

export const { setFavouriteFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
