import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech', // Используем переменную окружения
    headers: {
      'X-API-KEY': '5e2d7527-d92a-4c0e-a38e-a60f33cdf4ab',
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      // query: (params) => `/api/v2.2/films${params ? `?${new URLSearchParams(params).toString()}` : ''}`,
      query: (params) => `/api/v2.1/films/top?type=TOP_AWAIT_FILMS&page=1${params ? `&${new URLSearchParams(params).toString()}` : ''}`,
    }),
  }),
});

export const {useGetMoviesQuery} = kinopoiskApi;
// export const kinopoiskApi = createApi({
//   reducerPath: 'kinopoiskApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://kinopoiskapiunofficial.tech',
//     headers: {
//       'X-API-KEY': '5e2d7527-d92a-4c0e-a38e-a60f33cdf4ab',
//       'Content-Type': 'application/json',
//     },
//   }),
//   // endpoints: (builder) => ({
//   //   getMovies: builder.query({
//   //     query: (params) =>
//   //       `/api/v2.1/films`,
//   //     transformResponse: (response) => ({
//   //       ...response,
//   //       genre: 'All genres',
//   //       allFilms: response.films,
//   //       currentNumberFilms: 20, // Используйте значение maxFilms здесь
//   //       isDataLoaded: true,
//   //       film: null,
//   //       favouriteFilms: [],
//   //     }),
//   //   }),
//   // }),
//   endpoints: (builder) => ({
//     getMovies: builder.query({
//       query: (params) => `/films${params ? `?${new URLSearchParams(params).toString()}` : ''}`,
//     }),
//   }),
// });


