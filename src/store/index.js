import { configureStore } from '@reduxjs/toolkit';
import { showsApi } from './queries/shows';
import playerSlice from './slices/playerSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import sidebarSlice from './slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    [showsApi.reducerPath]: showsApi.reducer,
    player: playerSlice,
    sidebar: sidebarSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(showsApi.middleware),
});

setupListeners(store.dispatch);
