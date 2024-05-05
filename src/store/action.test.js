import {
  changeGenre,
  postComment,
  getComments,
  redirectToRoute,
  storeUserData,
  requireAuthorization,
  getFilteredFilms,
  loadFilms,
  getMaxFilms,
  getPromoFilm,
  getFavouriteList,
  addFavouriteFilm,
  ActionType,
} from './actions.js';
import {AuthorizationStatus} from '../const.js';
describe(`All action creators work correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      genre: `Drama`,
    };
    const genre = `Drama`;

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action creator for get comments returns correct action`, () => {
    const expectedAction = {
      type: ActionType.STORE_COMMENTS,
      comments: [``, ``],
    };
    const comments = [``, ``];

    expect(getComments(comments)).toEqual(expectedAction);
  });

  it(`Action creator for post comment returns correct action`, () => {
    const expectedAction = {
      type: ActionType.POST_COMMENT,
      comment: `comment`,
    };
    const comment = `comment`;

    expect(postComment(comment)).toEqual(expectedAction);
  });

  it(`Action creator for get route returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `url`,
    };
    const route = `url`;

    expect(redirectToRoute(route)).toEqual(expectedAction);
  });

  it(`Action creator for get user data returns correct action`, () => {
    const user = {
      id: 1,
      email: `email`,
      name: `name`,
      avatarUrl: `avatar_url`,
    };

    const expectedAction = {
      type: ActionType.STORE_USER_DATA,
      user,
    };

    expect(storeUserData(user)).toEqual(expectedAction);
  });

  it(`Action creator for get user data returns correct action`, () => {
    const status = AuthorizationStatus.AUTH;

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creator for get films returns correct action`, () => {
    const films = [``, ``];

    const expectedAction = {
      type: ActionType.GET_FILTERED_FILMS,
      films,
    };

    expect(getFilteredFilms(films)).toEqual(expectedAction);
  });

  it(`Action creator for get films returns correct action`, () => {
    const films = [``, ``];

    const expectedAction = {
      type: ActionType.GET_FILMS,
      films,
    };

    expect(loadFilms(films)).toEqual(expectedAction);
  });

  it(`Action creator for get max films returns correct action`, () => {
    const number = 8;

    const expectedAction = {
      type: ActionType.GET_MAX_FILMS,
      currentNumberFilms: number,
    };

    expect(getMaxFilms(number)).toEqual(expectedAction);
  });

  it(`Action creator for film returns correct action`, () => {
    const film = {
      id: 18,
      name: `Johnny English`,
      posterImage: `img/johnny-english.jpg`,
      previewImage: `img/johnny-english.jpg`,
      backgroundImage: `img/johnny-english.jpg`,
      backgroundColor: `#ffffff`,
      videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      rating: 8.9,
      scoresCount: 240,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      runTime: 99,
      genre: `Comedy`,
      released: 2014,
      isFavorite: false,
    };

    const expectedAction = {
      type: ActionType.GET_PROMO_FILM,
      film,
    };

    expect(getPromoFilm(film)).toEqual(expectedAction);
  });

  it(`Action creator for get favourite films returns correct action`, () => {
    const favouriteFilms = [``, ``];

    const expectedAction = {
      type: ActionType.GET_FAVOURITE_LIST,
      favouriteFilms,
    };

    expect(getFavouriteList(favouriteFilms)).toEqual(expectedAction);
  });

  it(`Action creator for add favourite film returns correct action`, () => {
    const id = 5;

    const expectedAction = {
      type: ActionType.ADD_FAVOURITE_FILM,
      id,
    };

    expect(addFavouriteFilm(id)).toEqual(expectedAction);
  });
});
