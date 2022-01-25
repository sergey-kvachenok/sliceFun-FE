import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ShowsProps {
    id: String,
    verified: Boolean,
    title: String,
    category: String[],
    description: String,
    image: String,
    date: String,
    mainImage: String
}

interface EpisodeProps {
  title: String,
  description: String,
  image: String
}

interface LatestProps {
  id: String
  title: String,
  date: String,
  description: String,
  extendedDescription: String,
  source: String,
  image: String
}

interface SingleShowProps {
    id: String,
    verified: Boolean,
    title: String,
    mainImage: String,
    headlines: EpisodeProps[] 
    latest: LatestProps[],
    video: LatestProps[]
}

// Define a service using a base URL and expected endpoints
export const showsApi = createApi({
  reducerPath: 'shows',
  refetchOnReconnect: true,
  tagTypes: ['Shows'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SHOWS_BACKEND_URL }),
  endpoints: builder => ({
    getShows: builder.query<ShowsProps[], string>({
      query: args => {
        const { search } = args;
        return {
          url: `shows`,
          params: { search },
        };
      },
      // providedTags: ['Shows'], // helps to refetch data if shows were changed by mutation (currently not useful here)
      transformResponse: (response: ShowsProps[], meta, arg) => {
        return response;
      },
    }),
    getPopularShows: builder.query<ShowsProps[], void>({
      query: () => ({ url: `shows/popular` }),
      transformResponse: (response: ShowsProps[], meta, arg) => response,
    }),
    getLibrary: builder.query<ShowsProps[], {category: String}>({
      query: args => {
        const { category } = args;
        return {
          url: `shows/library`,
          params: { category },
        };
      },
      transformResponse: (response: ShowsProps[], meta, arg) => {
        return response;
      },
    }),
    getShowsById: builder.query<SingleShowProps[], {id: String, search: String}>({
      query: args => {
        const { id, search } = args || {};

        return {
          url: `shows/${id}`,
          params: { search },
        };
      },
      transformResponse: (response: SingleShowProps[], meta, arg) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShowsQuery, useGetLibraryQuery, useGetPopularShowsQuery, useGetShowsByIdQuery } = showsApi;
