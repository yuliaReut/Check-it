import {NameSpace} from "../reducer";

const getFilteredFilms = (state) => state[NameSpace.FILMS].films;

const getGenre = (state) => state[NameSpace.FILMS].genre;

const getCurrentFilms = (state) => state[NameSpace.FILMS].currentNumberFilms;

const getFilms = (state) => state[NameSpace.FILMS].films;

const getPromoFilm = (state) => state[NameSpace.FILMS].film;
const addFavoriteFilm = (state) => state[NameSpace.FILMS].favouriteFilms;
const checkDataLoaded = (state) => state[NameSpace.FILMS].isDataLoaded;
export {getFilteredFilms, getGenre, getCurrentFilms, getFilms, checkDataLoaded, getPromoFilm, addFavoriteFilm};

