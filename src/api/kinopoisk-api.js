import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech',
    headers: {
      'X-API-KEY': '5e2d7527-d92a-4c0e-a38e-a60f33cdf4ab',
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    // Здесь вы можете определить свои эндпоинты
    getMovies: builder.query({
      query: (params) =>
        `api/v2.1/films/top?type=TOP_AWAIT_FILMS&page=1${params ? `&${new URLSearchParams(params).toString()}` : ''}`,
    }),
  }),
});

export const {useGetMoviesQuery} = kinopoiskApi;
