import {changeGenre, getFilteredFilms, loadFilms, getMaxFilms, getPromoFilm, getFavouriteList} from "../actions";
import filmsData from "./films- reducer";

describe(`Reducer work correctly`, ()=>{
  it(`rEDUCER WITHOUT ADDITIONAL PARAMETRS SHOULF RETURN INITIAL STATE`, ()=>{
    const state = {
      genre: `All genres`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    };
    expect(filmsData(undefined, {})).toEqual(state);
  });

  it(`Reducer should change genre`, ()=>{
    const state = {
      genre: `All genres`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    };
    expect(filmsData(state, changeGenre(`Drama`))).toEqual({
      genre: `Drama`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    });
  });

  it(`Reducer should get fitered films`, ()=>{
    const state = {
      genre: `Drama`,
      films: [``, ``],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    };
    expect(filmsData(state, getFilteredFilms([``, ``]))).toEqual({
      genre: `Drama`,
      films: [``, ``],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    });
  });

  it(`Reducer should get max number`, ()=>{
    const state = {
      genre: `Drama`,
      films: [``, ``],
      allFilms: [],
      currentNumberFilms: null,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    };
    expect(filmsData(state, getMaxFilms(8))).toEqual({
      genre: `Drama`,
      films: [``, ``],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    });
  });

  it(`Reducer should load films`, ()=>{
    const state = {
      genre: `All genres`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    };
    expect(filmsData(state, loadFilms([``, ``]))).toEqual({
      genre: `All genres`,
      films: [``, ``],
      allFilms: [``, ``],
      currentNumberFilms: 8,
      isDataLoaded: true,
      film: null,
      favouriteFilms: []
    });
  });

  it(`Reducer should load films`, ()=>{
    const state = {
      genre: `All genres`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: true,
      film: null,
      favouriteFilms: []
    };
    expect(filmsData(state, getPromoFilm({}))).toEqual({
      genre: `All genres`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: true,
      film: {},
      favouriteFilms: []
    });
  });

  it(`Reducer should get favourite films`, ()=>{
    const state = {
      genre: `All genres`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: []
    };
    expect(filmsData(state, getFavouriteList([``, ``]))).toEqual({
      genre: `All genres`,
      films: [],
      allFilms: [],
      currentNumberFilms: 8,
      isDataLoaded: false,
      film: null,
      favouriteFilms: [``, ``]
    });
  });
});
