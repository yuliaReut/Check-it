// import MockAdapter from 'axios-mock-adapter';
// import createAPI from '../api/api';
// import {ActionType} from '../store/actions';
// import {checkAuth, fetchFilmsList, login, getComments} from './api-actions';
// import filmsData from './films/films-reducer';
// import {AuthorizationStatus} from '../const';

// const api = createAPI(() => {});
// // const Films = [
// //   {
// //     "id": 1,
// //     "name": `Fantastic Beasts: The Crimes of Grindelwald`,
// //     "posterImage": `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
// //     "previewImage": `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
// //     "backgroundImage": `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
// //     "backgroundColor": `#ffffff`,
// //     "videoLink": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
// //     "previewVideoLink": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
// //     "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
// //     "rating": 8.9,
// //     "scoresCount": 240,
// //     "director": `Wes Andreson`,
// //     "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
// //     "runTime": 99,
// //     "genre": `Comedy`,
// //     "released": 2014,
// //     "isFavorite": false
// //   },
// //   {
// //     "id": 2,
// //     "name": `Bohemian Rhapsody`,
// //     "posterImage": `img/bohemian-rhapsody.jpg`,
// //     "previewImage": `img/bohemian-rhapsody.jpg`,
// //     "backgroundImage": `img/bohemian-rhapsody.jpg`,
// //     "backgroundColor": `#ffffff`,
// //     "videoLink": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
// //     "previewVideoLink": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
// //     "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
// //     "rating": 8.9,
// //     "scoresCount": 240,
// //     "director": `Wes Andreson`,
// //     "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
// //     "runTime": 99,
// //     "genre": `Crime`,
// //     "released": 2014,
// //     "isFavorite": false
// //   }
// // ];

// describe(`Reducer shold work correctly`, () => {
//   it(`Reducer without additional parameters should return initial state`, () => {
//     expect(filmsData(undefined, {})).toEqual({
//       genre: `All genres`,
//       films: [],
//       allFilms: [],
//       currentNumberFilms: 8,
//       isDataLoaded: false,
//       film: null,
//       favouriteFilms: [],
//     });
//   });

//   it(`Reducer without additional parameters should return initial state`, () => {
//     expect(filmsData(undefined, {})).toEqual({
//       genre: `All genres`,
//       films: [],
//       allFilms: [],
//       currentNumberFilms: 8,
//       isDataLoaded: false,
//       film: null,
//       favouriteFilms: [],
//     });
//   });

//   it(`Reducer should return loaded films`, () => {
//     const state = {
//       genre: `All genres`,
//       films: [],
//       allFilms: [],
//       currentNumberFilms: 8,
//       isDataLoaded: false,
//       film: null,
//       favouriteFilms: [],
//     };

//     const loadFilms = (films) => ({
//       type: ActionType.GET_FILMS,
//       films,
//     });

//     expect(filmsData(state, loadFilms([]))).toEqual({
//       genre: `All genres`,
//       films: [],
//       allFilms: [],
//       currentNumberFilms: 8,
//       isDataLoaded: true,
//       film: null,
//       favouriteFilms: [],
//     });
//   });
// });

// describe(`Async operation work correctly`, () => {
//   it(`Should make a correct API call to /films`, () => {
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const filmsLoader = fetchFilmsList();

//     apiMock.onGet(`/films`).reply(200, [{fake: true}]);

//     return filmsLoader(dispatch, () => {}, api).then(() => {
//       expect(dispatch).toHaveBeenCalledTimes(1);
//       expect(dispatch).toHaveBeenNthCalledWith(1, {
//         type: ActionType.GET_FILMS,
//         films: [{fake: true}],
//       });
//     });
//   });

//   it(`Should make a correct API call to /login`, () => {
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const checkAuthLoader = checkAuth();

//     apiMock.onGet(`/login`).reply(200, [{fake: true}]);

//     return checkAuthLoader(dispatch, () => {}, api).then(() => {
//       expect(dispatch).toHaveBeenCalledTimes(1);
//       expect(dispatch).toHaveBeenNthCalledWith(1, {
//         type: ActionType.REQUIRED_AUTHORIZATION,
//         status: AuthorizationStatus.AUTH,
//       });
//     });
//   });

//   it(`Should make a correct API call to /login pos`, () => {
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const fakeUser = {email: `test@test.ru`, password: `123456`};
//     const user = {
//       id: 1,
//       email: `Oliver.conner@gmail.com`,
//       name: `Oliver.conner`,
//       // avatar_url: `img/1.png`,
//     };
//     const loginLoader = login(fakeUser);

//     apiMock.onPost(`/login`).reply(200, user);

//     return loginLoader(dispatch, () => {}, api).then(() => {
//       expect(dispatch).toHaveBeenCalledTimes(1);

//       // expect(dispatch).toHaveBeenNthCalledWith(1, {
//       //   type: ActionType.REQUIRED_AUTHORIZATION,
//       //   status: AuthorizationStatus.AUTH,
//       // });

//       expect(dispatch).toHaveBeenNthCalledWith(1, {
//         type: ActionType.STORE_USER_DATA,
//         user: {
//           ...user,
//           avatarUrl: user.avatar_url, // изменить на avatarUrl: user.avatar_url
//         },
//       });
//     });
//   });

//   it(`Should make a correct API call to /comments/9`, () => {
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const Comments = [
//       {
//         id: 1,
//         user: {
//           id: 4,
//           name: `Kate Muir`,
//         },
//         rating: 8.9,
//         comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
//         date: `2019-05-08T14:13:56.569Z`,
//       },
//     ];
//     const commentsLoader = getComments(9);

//     apiMock.onGet(`/comments/9`).reply(200, Comments);

//     return commentsLoader(dispatch, () => {}, api).then(() => {
//       expect(dispatch).toHaveBeenCalledTimes(1);

//       expect(dispatch).toHaveBeenNthCalledWith(1, {
//         type: ActionType.STORE_COMMENTS,
//         comments: Comments,
//       });
//     });
//   });
// });
