import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech',
    headers: {
      'X-API-KEY': '2fa72f73-9c70-4176-bc49-3cd00029288e',
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      // query: (params) => `/api/v2.2/films${params ? `?${new URLSearchParams(params).toString()}` : ''}`,
      query: (params) => `/api/v2.1/films/top?type=TOP_AWAIT_FILMS&page=1${params ? `&${new URLSearchParams(params).toString()}` : ''}`,
      transformResponse: (response) => response.films ,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `/api/v2.2/films/${movieId}`,
      
    }),
    getSearchingMovies: builder.query({
      query: (searchQuery) => `/api/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(searchQuery)}`,
    }),
    getMoviesByIds: builder.query({
      async queryFn(ids) {
        try {
          const responses = await Promise.all(
            ids.map(async (id) => {
              const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
                headers: {
                  'X-API-KEY': '5e2d7527-d92a-4c0e-a38e-a60f33cdf4ab',
                  'Content-Type': 'application/json',
                },
              });
              return response.json();
            })
          );
          
          return { data: responses };
        } catch (err) {
          return { error: { message: err.message } };
        }
      },
    }),



  }),
});

export const {useGetMoviesQuery, useGetMovieDetailsQuery, useGetSearchingMoviesQuery, useGetMoviesByIdsQuery} = kinopoiskApi;


