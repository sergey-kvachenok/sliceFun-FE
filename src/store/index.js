import { configureStore } from '@reduxjs/toolkit';
import { showsApi } from './queries/shows';
import playerSlice from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    [showsApi.reducerPath]: showsApi.reducer,
    player: playerSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(showsApi.middleware),
});
