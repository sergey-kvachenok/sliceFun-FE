import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const showsApi = createApi({
  reducerPath: 'shows',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SHOWS_BACKEND_URL }),
  endpoints: builder => ({
    getShows: builder.query({
      query: () => ({ url: `shows` }),
      transformResponse: (response, meta, arg) => {
        console.log('response', response, meta);
        return response;
      },
    }),
    getPopularShows: builder.query({
      query: () => ({ url: `shows/popular` }),
      transformResponse: (response, meta, arg) => response,
    }),
    getLibrary: builder.query({
      query: () => ({ url: `shows/library` }),
      transformResponse: (response, meta, arg) => response,
    }),
    getShowsById: builder.query({
      query: id => ({ url: `shows/${id}` }),
      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShowsQuery, useGetLibraryQuery, useGetPopularShowsQuery, useGetShowsByIdQuery } = showsApi;
