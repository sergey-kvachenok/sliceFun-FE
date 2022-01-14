import { configureStore } from '@reduxjs/toolkit';
import { showsApi } from './queries/shows';

export const store = configureStore({
  reducer: {
    [showsApi.reducerPath]: showsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(showsApi.middleware)
});
